import { Holiday } from "@/types/holiday";
import { Button } from "@/components/ui/button";
import { getCountryContinent } from "@/utils";

interface ContinentFilterProps {
  displayedHolidays: Holiday[];  // New prop for holidays actually being shown
  selectedContinent: string | null;
  onContinentSelect: (continent: string | null) => void;
}

export function ContinentFilter({ displayedHolidays, selectedContinent, onContinentSelect }: ContinentFilterProps) {
  // Get continents that have at least one displayed holiday
  const uniqueContinents = Array.from(
    new Set(
      displayedHolidays
        .filter(holiday => holiday.countries.length > 0)
        .flatMap(holiday => 
          holiday.countries.map(country => getCountryContinent(country))
        )
    )
  ).sort();

  // Only hide if there are no continents and no active selection
  if (uniqueContinents.length === 0 && !selectedContinent) return null;

  return (
    <div className="py-2">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Button
          variant={selectedContinent === null ? "default" : "outline"}
          className="gap-2 shrink-0"
          onClick={() => onContinentSelect(null)}
        >
          <span>All Continents</span>
        </Button>
        {uniqueContinents.map(continent => (
          <Button
            key={continent}
            variant={selectedContinent === continent ? "default" : "outline"}
            onClick={() => onContinentSelect(continent)}
            className="gap-2 shrink-0"
          >
            <span>{continent}</span>
          </Button>
        ))}
      </div>
    </div>
  );
} 