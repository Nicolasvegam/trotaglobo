import { useState, useRef, useEffect } from "react";
import { useSession } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { createTrip } from "@/lib/commands/create-trip";
import { CreateTripDto } from "@/lib/dtos/create-trip.dto";
import { CreateTripCityDto } from "@/lib/dtos/create-trip-city.dto";
import { CreateTripPlaceDto } from "@/lib/dtos/create-trip-place.dto";
import { CreateTripTagDto } from "@/lib/dtos/create-trip-tag.dto";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ManualTripFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const libraries: ("places")[] = ["places"];

export function ManualTripForm({ onSuccess, onCancel }: ManualTripFormProps) {
  const { session } = useSession();
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cities, setCities] = useState<(CreateTripCityDto & { trip_places: CreateTripPlaceDto[] })[]>([]);
  const [tags, setTags] = useState<CreateTripTagDto[]>([]);
  const [newPlaceName, setNewPlaceName] = useState("");
  const [newTagName, setNewTagName] = useState("");
  const [selectedCityIndex, setSelectedCityIndex] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });
  
  const placeAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);

  useEffect(() => {
    if (isLoaded && !autocompleteService.current) {
      autocompleteService.current = new google.maps.places.AutocompleteService();
      placesService.current = new google.maps.places.PlacesService(
        document.createElement('div')
      );
    }
  }, [isLoaded]);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    if (!value) {
      setPredictions([]);
      return;
    }

    if (autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        {
          input: value,
          types: ['(cities)'],
        },
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPredictions(predictions);
          } else {
            setPredictions([]);
          }
        }
      );
    }
  };

  const handlePlaceSelect = (placeId: string) => {
    if (placesService.current) {
      placesService.current.getDetails(
        {
          placeId: placeId,
          fields: ['address_components', 'geometry', 'name'],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            const addressComponents = place.address_components || [];
            const countryComponent = addressComponents.find(
              (component) => component.types.includes("country")
            );
            const cityComponent = addressComponents.find(
              (component) => component.types.includes("locality")
            );

            if (cityComponent && countryComponent && place.geometry?.location) {
              const newCity: CreateTripCityDto & { trip_places: CreateTripPlaceDto[] } = {
                name: cityComponent.long_name,
                country: countryComponent.long_name,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                trip_places: [],
              };

              setCities([...cities, newCity]);
              setSearchInput("");
              setPredictions([]);
            }
          }
        }
      );
    }
  };

  const { mutate: createTripMutation, isPending } = useMutation({
    mutationFn: async (data: CreateTripDto) => {
      if (!session) throw new Error("No session");
      const token = await session.getToken();
      if (!token) throw new Error("No token");
      return createTrip(token, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      onSuccess();
    },
    onError: (error: Error) => {
      alert(error.message || "Failed to create trip");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      alert("Please select start and end dates");
      return;
    }
    if (cities.length === 0) {
      alert("Please add at least one city");
      return;
    }

    const tripData: CreateTripDto = {
      title,
      description,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      cover_image: coverImage || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      trip_cities: cities,
      trip_tags: tags,
    };

    createTripMutation(tripData);
  };

  const onTripPlaceSelected = (cityIndex: number) => {
    if (placeAutocompleteRef.current) {
      const place = placeAutocompleteRef.current.getPlace();
      if (place.name) {
        const updatedCities = [...cities];
        updatedCities[cityIndex].trip_places.push({ 
          name: place.name,
        });
        setCities(updatedCities);
        setNewPlaceName("");
        setSelectedCityIndex(null);
      }
    }
  };

  const addPlace = (cityIndex: number) => {
    if (!newPlaceName) {
      alert("Please enter a place name");
      return;
    }

    const updatedCities = [...cities];
    updatedCities[cityIndex].trip_places.push({ name: newPlaceName });
    setCities(updatedCities);
    setNewPlaceName("");
  };

  const addTag = () => {
    if (!newTagName) {
      alert("Please enter a tag name");
      return;
    }

    setTags([...tags, { name: newTagName }]);
    setNewTagName("");
  };

  const removeCity = (index: number) => {
    setCities(cities.filter((_, i) => i !== index));
  };

  const removePlace = (cityIndex: number, placeIndex: number) => {
    const updatedCities = [...cities];
    updatedCities[cityIndex].trip_places = updatedCities[cityIndex].trip_places.filter(
      (_, i) => i !== placeIndex
    );
    setCities(updatedCities);
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Trip Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter trip title"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Enter image URL (optional)"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter trip description"
          required
          className="min-h-[100px] sm:min-h-[120px]"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-10 sm:h-11",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-10 sm:h-11",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                disabled={(date) => startDate ? date < startDate : false}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Label>Cities</Label>
          <div className="w-full sm:w-auto">
            {isLoaded ? (
              <div className="w-full sm:w-[400px] relative">
                <Input
                  ref={searchInputRef}
                  value={searchInput}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search for a city"
                  className="w-full h-10 sm:h-11"
                />
                {predictions.length > 0 && (
                  <div className="absolute w-full mt-1 bg-background border rounded-md shadow-lg z-50 max-h-[200px] overflow-y-auto">
                    {predictions.map((prediction) => (
                      <button
                        key={prediction.place_id}
                        className="w-full px-4 py-3 text-left hover:bg-muted cursor-pointer text-sm sm:text-base"
                        onClick={() => handlePlaceSelect(prediction.place_id)}
                      >
                        {prediction.description}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        <ScrollArea className="h-[250px] sm:h-[200px] rounded-md border p-2 sm:p-4">
          <div className="space-y-4">
            {cities.map((city, cityIndex) => (
              <div key={cityIndex} className="space-y-2">
                <div className="flex items-center justify-between bg-muted p-2 rounded-md">
                  <div className="flex items-center gap-2 flex-wrap">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{city.name}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      ({city.country})
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCity(cityIndex)}
                    className="h-8 w-8 p-0 sm:h-9 sm:w-9"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="ml-4 sm:ml-6 space-y-2">
                  <div className="flex gap-2">
                    {isLoaded ? (
                      <div className="flex-1 sm:w-60">
                        <Autocomplete
                          onLoad={(autocomplete) => {
                            placeAutocompleteRef.current = autocomplete;
                          }}
                          onPlaceChanged={() => selectedCityIndex !== null && onTripPlaceSelected(selectedCityIndex)}
                          types={["establishment"]}
                        >
                          <Input
                            placeholder="Add a place"
                            value={selectedCityIndex === cityIndex ? newPlaceName : ""}
                            onChange={(e) => {
                              setNewPlaceName(e.target.value);
                              setSelectedCityIndex(cityIndex);
                            }}
                            className="w-full h-9 sm:h-10"
                          />
                        </Autocomplete>
                      </div>
                    ) : (
                      <Input
                        placeholder="Add a place"
                        value={selectedCityIndex === cityIndex ? newPlaceName : ""}
                        onChange={(e) => {
                          setNewPlaceName(e.target.value);
                          setSelectedCityIndex(cityIndex);
                        }}
                        className="flex-1 sm:w-60 h-9 sm:h-10"
                      />
                    )}
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => addPlace(cityIndex)}
                      className="h-9 w-9 sm:h-10 sm:w-10 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {city.trip_places.map((place, placeIndex) => (
                    <div
                      key={placeIndex}
                      className="flex items-center justify-between bg-muted/50 p-2 rounded-md"
                    >
                      <span className="text-sm sm:text-base truncate mr-2">{place.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removePlace(cityIndex, placeIndex)}
                        className="h-8 w-8 p-0 sm:h-9 sm:w-9 flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Label>Tags</Label>
          <div className="flex gap-2 w-full sm:w-auto">
            <Input
              placeholder="Add a tag"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="flex-1 sm:w-40 h-9 sm:h-10"
            />
            <Button 
              type="button" 
              onClick={addTag} 
              size="sm"
              className="h-9 w-9 sm:h-10 sm:w-10 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-muted px-3 py-1.5 rounded-full"
            >
              <span className="text-sm sm:text-base">{tag.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeTag(index)}
                className="h-6 w-6 p-0 sm:h-7 sm:w-7"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          className="w-full sm:w-auto h-10 sm:h-11"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full sm:w-auto h-10 sm:h-11"
        >
          {isPending ? "Creating..." : "Create Trip"}
        </Button>
      </div>
    </form>
  );
} 