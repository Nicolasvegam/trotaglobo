import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Holiday } from "@/types/holiday";
import { Calendar, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HolidayModalProps {
  holiday: Holiday | null;
  isOpen: boolean;
  onClose: () => void;
}

export function HolidayModal({ holiday, isOpen, onClose }: HolidayModalProps) {
  if (!holiday) return null;

  const totalDays = Math.ceil((holiday.endDate.getTime() - holiday.startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl max-h-[90vh]">
        <DialogHeader className="sr-only">
          <DialogTitle>{holiday.title}</DialogTitle>
        </DialogHeader>
        
        {/* Header with image - fixed height */}
        <div className="relative h-64 w-full flex-shrink-0">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10" />
          <Image
            src={holiday.coverImage || `/images/destinations/${holiday.id}.jpg`}
            alt={holiday.title}
            className="object-cover"
            fill
            sizes="100vw"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.target as HTMLElement;
              target.style.background = `linear-gradient(135deg, ${holiday.color}33, ${holiday.color}11)`;
            }}
          />
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <h2 className="text-3xl font-bold mb-2">{holiday.title}</h2>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 opacity-80" />
              <span>
                {holiday.startDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })} - {holiday.endDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>
        
        {/* Scrollable content area */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 16rem)" }}>
          {/* Description */}
          {holiday.description && (
            <div className="mb-6 text-neutral-700">
              <p>{holiday.description}</p>
            </div>
          )}
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-sm text-neutral-500">Duration</div>
              <div className="font-medium">{totalDays} days</div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-sm text-neutral-500">Cities</div>
              <div className="font-medium">{holiday.cities.length}</div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-sm text-neutral-500">Status</div>
              <div className="font-medium">{holiday.isPast ? 'Completed' : 'Planned'}</div>
            </div>
          </div>
          
          {/* Cities */}
          <h3 className="text-xl font-semibold mb-4">Itinerary</h3>
          <div className="space-y-6">
            {holiday.cities.map((city, index) => (
              <div key={city.id} className="relative">
                {/* Timeline connector */}
                {index < holiday.cities.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-neutral-200" />
                )}
                
                <div className="flex">
                  {/* Timeline marker */}
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${holiday.color}20`, borderColor: holiday.color }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: holiday.color }}></div>
                  </div>
                  
                  {/* City content */}
                  <div className="flex-1 pb-6">
                    <h4 className="text-lg font-medium text-neutral-900">{city.name}</h4>
                    
                    {city.places.length > 0 && (
                      <div className="mt-3 bg-neutral-50 rounded-lg p-4">
                        <h5 className="text-sm font-medium text-neutral-700 mb-2">Places to visit</h5>
                        <ul className="space-y-2">
                          {city.places.map((place, placeIndex) => (
                            <li key={placeIndex} className="flex items-start">
                              <span className="inline-block w-5 h-5 rounded-full bg-white border border-neutral-200 text-xs flex items-center justify-center mr-2 mt-0.5">
                                {placeIndex + 1}
                              </span>
                              <span className="text-neutral-700">{place}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 