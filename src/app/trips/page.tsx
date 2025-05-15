"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrips } from "@/lib/queries/get-trips";
import { TripAdapter } from "@/lib/adapter/trip.adapter";
import { TripCard } from "@/components/trips/TripCard";
import { TripModal } from "@/components/trips/TripModal";
import { AddTripModal } from "@/components/trips/AddTripModal";
import { TripFilters } from "@/components/trips/TripFilters";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSession } from "@clerk/nextjs";

export default function TripsPage() {
  const [selectedTrip, setSelectedTrip] = useState<TripAdapter | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const { session } = useSession();
  const { data: trips, isLoading, error } = useQuery({
    queryKey: ["trips"],
    queryFn: async () => {
        if (!session) return [];
        const token = await session.getToken();
        if (!token) return [];
        const trips = await getTrips(token);
        return trips;
    },
    enabled: !!session
  });

  const filteredTrips = trips?.filter((trip) => {
    if (selectedCountry) {
      const hasCountry = trip.tripCities.some(
        (city) => city.country === selectedCountry
      );
      if (!hasCountry) return false;
    }

    if (selectedContinent) {
      const hasContinent = trip.tripCities.some((city) => {
        const continent = getCountryContinent(city.country);
        return continent === selectedContinent;
      });
      if (!hasContinent) return false;
    }

    return true;
  });

  const handleAddTrip = async (tripData: {
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
  }) => {
    // TODO: Implement trip creation with Supabase
    console.log("Adding new trip:", tripData);
  };

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-destructive">
            Error loading trips. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">My Trips</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Trip
        </Button>
      </div>

      <TripFilters
        trips={trips || []}
        selectedCountry={selectedCountry}
        selectedContinent={selectedContinent}
        onCountrySelect={setSelectedCountry}
        onContinentSelect={setSelectedContinent}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {filteredTrips?.map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
              onClick={() => setSelectedTrip(trip)}
            />
          ))}
        </div>
      </div>

      {selectedTrip && (
        <TripModal
          trip={selectedTrip}
          isOpen={!!selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}

      <AddTripModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTrip}
      />
    </div>
  );
}

// Helper function to get continent for a country
function getCountryContinent(country: string): string {
  const countryToContinent: { [key: string]: string } = {
    // North America
    "United States": "North America",
    "Canada": "North America",
    "Mexico": "North America",
    // South America
    "Brazil": "South America",
    "Argentina": "South America",
    "Chile": "South America",
    "Peru": "South America",
    "Colombia": "South America",
    "Ecuador": "South America",
    "Bolivia": "South America",
    "Uruguay": "South America",
    "Paraguay": "South America",
    "Venezuela": "South America",
    "Guyana": "South America",
    "Suriname": "South America",
    "French Guiana": "South America",
    // Europe
    "United Kingdom": "Europe",
    "France": "Europe",
    "Germany": "Europe",
    "Italy": "Europe",
    "Spain": "Europe",
    "Portugal": "Europe",
    "Netherlands": "Europe",
    "Belgium": "Europe",
    "Switzerland": "Europe",
    "Austria": "Europe",
    "Sweden": "Europe",
    "Norway": "Europe",
    "Denmark": "Europe",
    "Finland": "Europe",
    "Poland": "Europe",
    "Greece": "Europe",
    "Turkey": "Europe",
    // Add more countries as needed
  };

  return countryToContinent[country] || "Other";
} 