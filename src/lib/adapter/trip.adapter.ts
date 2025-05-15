import { Trip } from "../entity/trip.entity";
import { TripCity } from "../entity/tripCity.entity";
import { TripPlace } from "../entity/tripPlace.entity";
import { TripTag } from "../entity/tripTags.entity";

export type TripAdapter = Trip & {
  tripCities: (TripCity & {
    tripPlaces: TripPlace[];
  })[];
  tripTags: TripTag[];
};