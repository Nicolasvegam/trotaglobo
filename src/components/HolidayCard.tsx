import { formatDistance } from "date-fns";
import { Holiday } from "@/types/holiday";
import { MapPin, Calendar, Clock, Globe } from "lucide-react";
import Image from "next/image";
import { getCountryFlag } from "@/utils";

interface HolidayCardProps {
  holiday: Holiday;
  onClick: (holiday: Holiday) => void;
}

// Map of reliable Unsplash image URLs for different destinations
const fallbackImages: Record<string, string> = {
  // Default fallback for any destination
  default: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  
  // Specific destinations with reliable images
  "1": "https://images.unsplash.com/photo-1569700946659-fe1941c71fe4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Punta Cana
  "2": "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Mediterranean (Santorini)
  "3": "https://images.unsplash.com/photo-1547652835-4c3ba4ef1367?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Costa Rica
  "4": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // East Coast (NYC)
  "5": "https://images.unsplash.com/photo-1514885639497-8f15943b738a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Andean (Atacama)
  // Add other specific holiday IDs and their image URLs here
  // Example:
  // "6": "https://images.unsplash.com/photo-YOUR_IMAGE_ID_FOR_HOLIDAY_6",
};

export function HolidayCard({ holiday, onClick }: HolidayCardProps) {
  const { title, startDate, endDate, isPast, cities, countries } = holiday;
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Get a representative image for the holiday with reliable fallbacks
  const coverImage = holiday.coverImage || 
                     fallbackImages[holiday.id] || 
                     fallbackImages.default;
  
  return (
    <div 
      className="group rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg border border-neutral-200 bg-white"
      onClick={() => onClick(holiday)}
    >
      {/* Card image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
        <div 
          className="absolute top-3 left-3 z-20 px-2 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: `${holiday.color}CC` }}
        >
          {isPast ? 'Visited' : 'Planned'}
        </div>
        <Image 
          src={coverImage}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLElement;
            target.style.backgroundColor = holiday.color + '33';
          }}
        />
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-neutral-600">
            <Calendar className="h-4 w-4 mr-2 text-neutral-400" />
            <span>
              {startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - {endDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <Clock className="h-4 w-4 mr-2 text-neutral-400" />
            <span>{totalDays} days</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <MapPin className="h-4 w-4 mr-2 text-neutral-400" />
            <span>{cities.length} {cities.length === 1 ? 'city' : 'cities'}</span>
          </div>

          <div className="flex items-center text-sm text-neutral-600">
            <Globe className="h-4 w-4 mr-2 text-neutral-400" />
            <div className="flex items-center gap-1 flex-wrap">
              {countries.map(country => (
                <span key={country} className="inline-flex items-center gap-1">
                  <span className="text-base">{getCountryFlag(country)}</span>
                  <span>{country}</span>
                </span>
              ))}
            </div>
          </div>
          
          {!isPast && (
            <div className="mt-4 pt-3 border-t border-neutral-100">
              <div className="text-sm font-medium" style={{ color: holiday.color }}>
                {formatDistance(startDate, new Date(), { addSuffix: true })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 