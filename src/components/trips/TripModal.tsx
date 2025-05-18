import { TripAdapter } from "@/lib/adapter/trip.adapter";
import { format } from "date-fns";
import { Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { getCountryFlag } from "@/utils";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip } from "@/lib/commands/delete-trip";
import { useSession } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TripModalProps {
  trip: TripAdapter | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TripModal({ trip, isOpen, onClose }: TripModalProps) {
  const queryClient = useQueryClient();
  const { session } = useSession();

  const mutation = useMutation({
    mutationFn: async (tripId: string) => {
      if (!session) throw new Error("No session");
      const token = await session.getToken();
      if (!token) throw new Error("No token");
      return deleteTrip(token, tripId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      alert("Trip deleted successfully");
      onClose();
    },
    onError: (error: Error) => {
      alert(error.message || "Failed to delete trip");
    },
  });

  if (!trip) return null;

  const startDate = new Date(trip.start_date);
  const endDate = new Date(trip.end_date);
  const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const isPast = endDate < new Date();

  // Get unique countries from trip cities
  const countries = Array.from(new Set(trip.trip_cities.map((city: { country: string }) => city.country)));

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this trip? This action cannot be undone.")) {
      mutation.mutate(trip.id);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
  <DialogContent className={"lg:max-w-screen-lg overflow-y-scroll max-h-screen"}>
  <DialogHeader>
          <div className="space-y-1">
            <DialogTitle className="text-2xl font-bold">{trip.title}</DialogTitle>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {isPast ? 'Visited' : 'Planned'}
              </span>
              <span>•</span>
              <span>{duration} days</span>
            </div>
          </div>
        </DialogHeader>

        <div className="relative h-72 w-full mt-4 rounded-xl overflow-hidden">
          <Image
            src={trip.cover_image}
            alt={trip.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {trip.trip_tags?.map((tag: { name: string }) => (
              <span key={tag.name} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-neutral-600">
              <Calendar className="h-5 w-5 mr-2 text-neutral-400" />
              <span>
                {format(startDate, "MMMM d")} - {format(endDate, "MMMM d, yyyy")}
              </span>
            </div>

            <div className="flex items-center text-neutral-600">
              <Globe className="h-5 w-5 mr-2 text-neutral-400" />
              <div className="flex items-center gap-2 flex-wrap">
                {countries.map((country: string) => (
                  <span key={country} className="inline-flex items-center gap-1">
                    <span className="text-base">{getCountryFlag(country)}</span>
                    <span>{country}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-neutral-600 whitespace-pre-wrap">{trip.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Cities & Places</h3>
            <div className="space-y-4">
              {trip.trip_cities.map((city) => (
                <div key={city.id} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center text-neutral-800 mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-neutral-400" />
                    <span className="font-medium">{city.name}</span>
                    <span className="ml-2 text-sm text-neutral-500">
                      ({city.country})
                    </span>
                  </div>
                  {city.trip_places.length > 0 && (
                    <ul className="ml-6 space-y-2 mt-2">
                      {city.trip_places.map((place) => (
                        <li key={place.id} className="text-neutral-600">
                          <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <div>
                              <span className="font-medium">{place.name}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            variant="ghost"
            className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
            onClick={handleDelete}
            disabled={mutation.isPending}
          >
            Delete this trip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 