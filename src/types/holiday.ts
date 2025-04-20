export interface City {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  places: string[];
  image?: string;
}

export interface Holiday {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isPast: boolean;
  cities: City[];
  countries: string[];
  color: string;
  coverImage?: string;
  description?: string;
  budget?: {
    currency: string;
    amount: number;
  };
  tags?: string[];
} 