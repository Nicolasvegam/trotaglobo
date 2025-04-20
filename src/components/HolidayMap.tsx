import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Holiday } from "@/types/holiday";

interface HolidayMapProps {
  holidays: Holiday[];
  onHolidayClick: (holiday: Holiday) => void;
}

export function HolidayMap({ holidays, onHolidayClick }: HolidayMapProps) {
  const [hoveredHolidayId, setHoveredHolidayId] = useState<string | null>(null);
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapCenter = useMemo(
    () => ({ lat: 30, lng: 0 }), 
    []
  );

  // Premium map styling
  const mapOptions = useMemo<google.maps.MapOptions>(() => {
    // Base options that don't require the Google Maps API to be loaded
    const options: google.maps.MapOptions = {
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }, { lightness: 17 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 18 }],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 16 }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#dedede" }, { lightness: 21 }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
        },
        {
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#fefefe" }, { lightness: 20 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
        },
      ],
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true,
    };

    // Add options that require the Google Maps API to be loaded
    if (typeof google !== 'undefined') {
      options.zoomControlOptions = {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      };
    }

    return options;
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-neutral-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-300 mb-4"></div>
          <p className="text-neutral-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <GoogleMap
        options={mapOptions}
        zoom={2}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {holidays.flatMap(holiday => 
          holiday.cities.map(city => {
            const isHovered = holiday.id === hoveredHolidayId;
            
            return (
              <MarkerF
                key={city.id}
                position={city.position}
                title={`${holiday.title} - ${city.name}`}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: isHovered ? 10 : 8,
                  fillColor: holiday.color,
                  fillOpacity: isHovered ? 0.9 : 0.7,
                  strokeWeight: isHovered ? 2 : 1,
                  strokeColor: "#FFFFFF",
                }}
                onClick={() => onHolidayClick(holiday)}
                onMouseOver={() => setHoveredHolidayId(holiday.id)}
                onMouseOut={() => setHoveredHolidayId(null)}
                animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
              />
            );
          })
        )}
      </GoogleMap>
    </div>
  );
} 