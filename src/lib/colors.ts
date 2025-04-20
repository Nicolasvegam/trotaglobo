// Sophisticated color palette inspired by premium travel platforms
export const colorPalette = {
  // Primary brand colors
  brand: {
    primary: "#FF5A5F", // Airbnb-inspired primary
    secondary: "#00A699", // Teal accent
    tertiary: "#FC642D", // Warm orange
  },
  
  // Semantic colors
  semantic: {
    success: "#34D399",
    warning: "#FBBF24",
    error: "#EF4444",
    info: "#3B82F6",
  },
  
  // Neutral palette for text, backgrounds, etc.
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  
  // Holiday type colors (for markers and cards)
  holiday: {
    beach: "#00A699", // Teal
    city: "#FF5A5F", // Red
    mountain: "#484848", // Dark gray
    countryside: "#767676", // Medium gray
    adventure: "#FC642D", // Orange
  }
};

// Generate a color for a holiday based on its title
export function generateHolidayColor(title: string): string {
  const colors = [
    "#FF5A5F", // Airbnb red
    "#00A699", // Teal
    "#FC642D", // Orange
    "#007A87", // Dark teal
    "#FFAA91", // Salmon
    "#7B0051", // Purple
    "#00D1C1", // Light teal
    "#FFAA91", // Peach
    "#8CE071", // Light green
    "#7B0051", // Magenta
  ];
  
  // Simple hash function to get consistent colors for the same title
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
} 