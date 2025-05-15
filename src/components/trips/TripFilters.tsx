import { TripAdapter } from "@/lib/adapter/trip.adapter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, MapPin } from "lucide-react";

interface TripFiltersProps {
  trips: TripAdapter[];
  selectedCountry: string | null;
  selectedContinent: string | null;
  onCountrySelect: (country: string | null) => void;
  onContinentSelect: (continent: string | null) => void;
}

// Helper function to get continent for a country
const getCountryContinent = (country: string): string => {
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
};

export function TripFilters({
  trips,
  selectedCountry,
  selectedContinent,
  onCountrySelect,
  onContinentSelect,
}: TripFiltersProps) {
  // Get unique countries and continents from trips
  const countries = Array.from(
    new Set(trips.flatMap((trip) => trip?.tripCities?.map((city) => city.country)))
  ).sort();

  const continents = Array.from(
    new Set(countries.map((country) => getCountryContinent(country)))
  ).sort();

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Select
        value={selectedContinent || "all"}
        onValueChange={(value) => onContinentSelect(value === "all" ? null : value)}
      >
        <SelectTrigger className="w-full sm:w-[200px]">
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by continent" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Continents</SelectItem>
          {continents.map((continent) => (
            <SelectItem key={continent} value={continent}>
              {continent}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={selectedCountry || "all"}
        onValueChange={(value) => onCountrySelect(value === "all" ? null : value)}
      >
        <SelectTrigger className="w-full sm:w-[200px]">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by country" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Countries</SelectItem>
          {countries.map((country, index) => (
            <SelectItem key={index+1} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
} 