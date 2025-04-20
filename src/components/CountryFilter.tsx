import { Holiday } from "@/types/holiday";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { getCountryFlag } from "@/utils";

interface CountryFilterProps {
  displayedHolidays: Holiday[];  // New prop for holidays actually being shown
  selectedCountry: string | null;
  onCountrySelect: (country: string | null) => void;
}

export function CountryFilter({ displayedHolidays, selectedCountry, onCountrySelect }: CountryFilterProps) {
  const uniqueCountries = Array.from(
    new Set(
      displayedHolidays
        .filter(holiday => holiday.countries.length > 0)
        .flatMap(holiday => holiday.countries)
    )
  ).sort();

  // Only hide if there are no countries and no active selection
  if (uniqueCountries.length === 0 && !selectedCountry) return null;

  return (
    <div className="py-2">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Button
          variant={selectedCountry === null ? "default" : "outline"}
          className="gap-2 shrink-0"
          onClick={() => onCountrySelect(null)}
        >
          <Globe className="h-4 w-4" />
          <span>All Countries</span>
        </Button>
        {uniqueCountries.map(country => (
          <Button
            key={country}
            variant={selectedCountry === country ? "default" : "outline"}
            onClick={() => onCountrySelect(country)}
            className="gap-2 shrink-0"
          >
            <span className="text-base">{getCountryFlag(country)}</span>
            <span>{country}</span>
          </Button>
        ))}
      </div>
    </div>
  );
} 