import { TripAdapter } from "@/lib/adapter/trip.adapter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Calendar, MapPin, Tag, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TripModalProps {
  trip: TripAdapter | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TripModal({ trip, isOpen, onClose }: TripModalProps) {
  if (!trip) return null;

  const startDate = new Date(trip.start_date);
  const endDate = new Date(trip.end_date);
  const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold">{trip.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="relative h-64 w-full mt-4 rounded-lg overflow-hidden">
          <Image
            src={trip.cover_image}
            alt={trip.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6 space-y-6">
          <div className="flex items-center text-neutral-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>
              {format(startDate, "MMMM d")} - {format(endDate, "MMMM d, yyyy")} ({duration} days)
            </span>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-neutral-600">{trip.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Cities & Places</h3>
            <div className="space-y-4">
              {trip?.tripCities?.map((city) => (
                <div key={city.id} className="bg-neutral-50 rounded-lg p-4">
                  <div className="flex items-center text-neutral-800 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{city.name}</span>
                  </div>
                  {city.tripPlaces.length > 0 && (
                    <ul className="ml-6 space-y-1">
                      {city.tripPlaces.map((place) => (
                        <li key={place.id} className="text-neutral-600">
                          • {place.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {trip.tripTags && trip.tripTags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {trip.tripTags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700"
                  >
                    <Tag className="h-4 w-4 mr-1" />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 