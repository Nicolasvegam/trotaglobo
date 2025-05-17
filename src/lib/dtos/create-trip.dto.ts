import { CreateTripCityDto } from "./create-trip-city.dto";
import { CreateTripPlaceDto } from "./create-trip-place.dto";
import { CreateTripTagDto } from "./create-trip-tag.dto";

export type CreateTripDto = {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  cover_image: string;
  trip_cities: (CreateTripCityDto & {
    trip_places: CreateTripPlaceDto[];
  })[];
  trip_tags: CreateTripTagDto[];
}; 