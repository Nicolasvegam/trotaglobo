import { TripAdapter } from "@/lib/adapter/trip.adapter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";

interface TripCardProps {
  trip: TripAdapter;
  onClick: (trip: TripAdapter) => void;
}

export function TripCard({ trip, onClick }: TripCardProps) {
  const startDate = new Date(trip.start_date);
  const endDate = new Date(trip.end_date);
  const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-md transition-all duration-200"
      onClick={() => onClick(trip)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={trip.cover_image}
          alt={trip.title}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold line-clamp-1">{trip.title}</h3>
          <p className="text-sm text-white/90 line-clamp-2 mt-1">{trip.description}</p>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="flex items-center text-sm text-neutral-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>
            {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")} ({duration} days)
          </span>
        </div>

        <div className="flex items-center text-sm text-neutral-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="line-clamp-1">
            {trip?.tripCities?.map(city => city.name).join(", ")}
          </span>
        </div>

        {trip.tripTags && trip.tripTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {trip.tripTags.map(tag => (
              <span
                key={tag.id}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 