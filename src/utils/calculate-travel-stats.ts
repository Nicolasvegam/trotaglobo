import { Holiday } from "@/types/holiday";
import { calculateDuration } from "./calculate-duration";
import { getCountry } from "./get-country";

export interface TravelStats {
  totalCities: number;
  totalCountries: number;
  longestTrip: string;
  mostVisitedCity: string;
  mostVisitedCountry: string;
}

export const calculateTravelStats = (pastHolidays: Holiday[]): TravelStats => {
  const allPastCities = pastHolidays.flatMap(h => h.cities);
  
  const uniqueCityNames = new Set(allPastCities.map(c => c.name));
  const totalCities = uniqueCityNames.size;

  const uniqueCountryNames = new Set<string>();
  allPastCities.forEach(c => {
    const country = getCountry(c.name);
    if (country) {
      uniqueCountryNames.add(country);
    }
  });
  const totalCountries = uniqueCountryNames.size;

  let longestTripDuration = 0;
  let longestTripTitle = "N/A";
  if (pastHolidays.length > 0) {
    longestTripDuration = Math.max(...pastHolidays.map(h => calculateDuration(h.startDate, h.endDate)));
    const longestTrip = pastHolidays.find(h => calculateDuration(h.startDate, h.endDate) === longestTripDuration);
    longestTripTitle = longestTrip ? `${longestTrip.title} (${longestTripDuration} days)` : `${longestTripDuration} days`;
  }

  const cityCounts: { [key: string]: number } = {};
  allPastCities.forEach(c => {
    cityCounts[c.name] = (cityCounts[c.name] || 0) + 1;
  });
  let mostVisitedCity = "N/A";
  let maxCityCount = 0;
  for (const city in cityCounts) {
    if (cityCounts[city] > maxCityCount) {
      maxCityCount = cityCounts[city];
      mostVisitedCity = `${city} (${maxCityCount} times)`;
    }
  }
  
  const countryCounts: { [key: string]: number } = {};
  allPastCities.forEach(c => {
    const country = getCountry(c.name);
    if (country) {
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    }
  });
  let mostVisitedCountry = "N/A";
  let maxCountryCount = 0;
  for (const country in countryCounts) {
    if (countryCounts[country] > maxCountryCount) {
      maxCountryCount = countryCounts[country];
      mostVisitedCountry = `${country} (${maxCountryCount} visits)`;
    }
  }

  return {
    totalCities,
    totalCountries,
    longestTrip: longestTripTitle,
    mostVisitedCity: maxCityCount > 1 ? mostVisitedCity : 'N/A',
    mostVisitedCountry: maxCountryCount > 1 ? mostVisitedCountry : 'N/A'
  };
}; 