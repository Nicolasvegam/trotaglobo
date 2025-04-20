export const getCountry = (cityName: string): string | null => {
  const parts = cityName.split(',');
  if (parts.length > 1) {
    return parts[parts.length - 1].trim();
  }
  if (cityName.trim() === "Hong Kong") return "Hong Kong"; 
  return null; 
}; 