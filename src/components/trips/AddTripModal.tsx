import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (tripData: {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    coverImage: string;
    cities: Array<{
      name: string;
      country: string;
      latitude: number;
      longitude: number;
      places?: Array<{
        name: string;
        description: string;
        image?: string;
      }>;
    }>;
    tags?: string[];
  }) => void;
}

export function AddTripModal({ isOpen, onClose, onAdd }: AddTripModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [coverImage, setCoverImage] = useState("");
  const [cities, setCities] = useState<Array<{
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    places: Array<{
      name: string;
      description: string;
      image?: string;
    }>;
  }>>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const handleAddCity = () => {
    setCities([
      ...cities,
      {
        name: "",
        country: "",
        latitude: 0,
        longitude: 0,
        places: [],
      },
    ]);
  };

  const handleAddPlace = (cityIndex: number) => {
    const updatedCities = [...cities];
    updatedCities[cityIndex].places.push({
      name: "",
      description: "",
    });
    setCities(updatedCities);
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) return;

    onAdd({
      title,
      description,
      startDate,
      endDate,
      coverImage,
      cities,
      tags,
    });

    // Reset form
    setTitle("");
    setDescription("");
    setStartDate(undefined);
    setEndDate(undefined);
    setCoverImage("");
    setCities([]);
    setTags([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Trip</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
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
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    disabled={(date) =>
                      startDate ? date < startDate : false
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Cities</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddCity}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add City
              </Button>
            </div>

            {cities.map((city, cityIndex) => (
              <div key={cityIndex} className="space-y-4 p-4 border rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>City Name</Label>
                    <Input
                      value={city.name}
                      onChange={(e) => {
                        const updatedCities = [...cities];
                        updatedCities[cityIndex].name = e.target.value;
                        setCities(updatedCities);
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input
                      value={city.country}
                      onChange={(e) => {
                        const updatedCities = [...cities];
                        updatedCities[cityIndex].country = e.target.value;
                        setCities(updatedCities);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Latitude</Label>
                    <Input
                      type="number"
                      step="any"
                      value={city.latitude}
                      onChange={(e) => {
                        const updatedCities = [...cities];
                        updatedCities[cityIndex].latitude = parseFloat(
                          e.target.value
                        );
                        setCities(updatedCities);
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Longitude</Label>
                    <Input
                      type="number"
                      step="any"
                      value={city.longitude}
                      onChange={(e) => {
                        const updatedCities = [...cities];
                        updatedCities[cityIndex].longitude = parseFloat(
                          e.target.value
                        );
                        setCities(updatedCities);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Places</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddPlace(cityIndex)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Place
                    </Button>
                  </div>

                  {city.places.map((place, placeIndex) => (
                    <div
                      key={placeIndex}
                      className="space-y-4 p-4 border rounded-lg bg-muted/50"
                    >
                      <div className="space-y-2">
                        <Label>Place Name</Label>
                        <Input
                          value={place.name}
                          onChange={(e) => {
                            const updatedCities = [...cities];
                            updatedCities[cityIndex].places[placeIndex].name =
                              e.target.value;
                            setCities(updatedCities);
                          }}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          value={place.description}
                          onChange={(e) => {
                            const updatedCities = [...cities];
                            updatedCities[cityIndex].places[
                              placeIndex
                            ].description = e.target.value;
                            setCities(updatedCities);
                          }}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Image URL (optional)</Label>
                        <Input
                          value={place.image || ""}
                          onChange={(e) => {
                            const updatedCities = [...cities];
                            updatedCities[cityIndex].places[placeIndex].image =
                              e.target.value;
                            setCities(updatedCities);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  className="w-[200px]"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddTag}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Tag
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Trip</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 