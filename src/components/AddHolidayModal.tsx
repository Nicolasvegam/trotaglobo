import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { X, Plus, MapPin } from "lucide-react";
import { generateHolidayColor } from "@/lib/colors";

interface AddHolidayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (holiday: any) => void;
  isPast: boolean;
}

export function AddHolidayModal({ isOpen, onClose, onAdd, isPast }: AddHolidayModalProps) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cities, setCities] = useState<{ name: string; places: string[] }[]>([
    { name: "", places: [""] }
  ]);

  const handleAddCity = () => {
    setCities([...cities, { name: "", places: [""] }]);
  };

  const handleRemoveCity = (index: number) => {
    const newCities = [...cities];
    newCities.splice(index, 1);
    setCities(newCities);
  };

  const handleCityNameChange = (index: number, name: string) => {
    const newCities = [...cities];
    newCities[index].name = name;
    setCities(newCities);
  };

  const handleAddPlace = (cityIndex: number) => {
    const newCities = [...cities];
    newCities[cityIndex].places.push("");
    setCities(newCities);
  };

  const handlePlaceChange = (cityIndex: number, placeIndex: number, place: string) => {
    const newCities = [...cities];
    newCities[cityIndex].places[placeIndex] = place;
    setCities(newCities);
  };

  const handleRemovePlace = (cityIndex: number, placeIndex: number) => {
    const newCities = [...cities];
    newCities[cityIndex].places.splice(placeIndex, 1);
    setCities(newCities);
  };

  const handleSubmit = () => {
    // Create a new holiday object
    const newHoliday = {
      id: Date.now().toString(),
      title,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      isPast,
      color: generateHolidayColor(title),
      cities: cities.map((city, index) => ({
        id: `new-${index}`,
        name: city.name,
        position: { lat: 0, lng: 0 }, // This would be replaced with geocoding in a real app
        places: city.places.filter(place => place.trim() !== "")
      }))
    };

    onAdd(newHoliday);
    onClose();
    
    // Reset form
    setTitle("");
    setStartDate("");
    setEndDate("");
    setCities([{ name: "", places: [""] }]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isPast ? "Add Past Trip" : "Add to Wishlist"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Basic Info */}
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-neutral-700 block mb-2">
              Trip Title
            </Label>
            <Input
              id="title"
              placeholder="e.g. Europe Summer 2023"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate" className="text-sm font-medium text-neutral-700 block mb-2">
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="endDate" className="text-sm font-medium text-neutral-700 block mb-2">
                End Date
              </Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Cities */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-sm font-medium text-neutral-700">Cities</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={handleAddCity}
                className="text-xs"
              >
                <Plus className="h-3 w-3 mr-1" /> Add City
              </Button>
            </div>

            <div className="space-y-6">
              {cities.map((city, cityIndex) => (
                <div key={cityIndex} className="p-4 border border-neutral-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-neutral-400 mr-2" />
                      <Input
                        placeholder="City name"
                        value={city.name}
                        onChange={(e) => handleCityNameChange(cityIndex, e.target.value)}
                        className="border-0 p-0 text-base font-medium focus-visible:ring-0"
                      />
                    </div>
                    {cities.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveCity(cityIndex)}
                        className="h-6 w-6 p-0 text-neutral-400 hover:text-neutral-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="ml-6 space-y-2">
                    <Label className="text-xs font-medium text-neutral-500 block mb-2">
                      Places to visit
                    </Label>
                    {city.places.map((place, placeIndex) => (
                      <div key={placeIndex} className="flex items-center gap-2">
                        <Input
                          placeholder="Place name"
                          value={place}
                          onChange={(e) => handlePlaceChange(cityIndex, placeIndex, e.target.value)}
                          className="flex-1"
                        />
                        {city.places.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemovePlace(cityIndex, placeIndex)}
                            className="h-8 w-8 p-0 text-neutral-400 hover:text-neutral-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAddPlace(cityIndex)}
                      className="text-xs mt-2"
                    >
                      <Plus className="h-3 w-3 mr-1" /> Add Place
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={!title || !startDate || !endDate}>
              {isPast ? "Add Trip" : "Add to Wishlist"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 