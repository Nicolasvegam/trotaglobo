import { TripAdapter } from "@/lib/adapter/trip.adapter";
import { MapPin, Calendar, Tag, Globe } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import { getCountryFlag } from "@/utils";

interface TripCardProps {
  trip: TripAdapter;
  onClick: (trip: TripAdapter) => void;
}

export function TripCard({ trip, onClick }: TripCardProps) {
  const startDate = new Date(trip.start_date);
  const endDate = new Date(trip.end_date);
  const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const isPast = endDate < new Date();

  // Get unique countries from trip cities
  const countries = Array.from(new Set(trip.trip_cities.map(city => city.country)));

  return (
    <div 
      className="group rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg border border-neutral-200 bg-white"
      onClick={() => onClick(trip)}
    >
      {/* Card image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
        <div 
          className="absolute top-3 left-3 z-20 px-2 py-1 rounded-full text-xs font-medium text-white bg-primary/80"
        >
          {isPast ? 'Visited' : 'Planned'}
        </div>
        <Image 
          src={trip.cover_image}
          alt={trip.title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLElement;
            target.style.backgroundColor = '#e5e7eb';
          }}
        />
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 text-neutral-900">{trip.title}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-neutral-600">
            <Calendar className="h-4 w-4 mr-2 text-neutral-400" />
            <span>
              {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <Calendar className="h-4 w-4 mr-2 text-neutral-400" />
            <span>{duration} days</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <MapPin className="h-4 w-4 mr-2 text-neutral-400" />
            <span>{trip.trip_cities.length} {trip.trip_cities.length === 1 ? 'city' : 'cities'}</span>
          </div>

          <div className="flex items-center text-sm text-neutral-600">
            <Globe className="h-4 w-4 mr-2 text-neutral-400" />
            <div className="flex items-center gap-1 flex-wrap">
              {countries.map((country: string) => (
                <span key={country} className="inline-flex items-center gap-1">
                  <span className="text-base">{getCountryFlag(country)}</span>
                  <span>{country}</span>
                </span>
              ))}
            </div>
          </div>

          {trip.trip_tags && trip.trip_tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {trip.trip_tags.map(tag => (
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
          
          {!isPast && (
            <div className="mt-4 pt-3 border-t border-neutral-100">
              <div className="text-sm font-medium text-primary">
                {format(startDate, "MMM d, yyyy")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 