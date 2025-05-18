import { createClientSupabaseClient } from "../auth/utils/create-client-supabase-client";
import { CreateTripDto } from "../dtos/create-trip.dto";

export async function createTrip(token: string, tripData: CreateTripDto) {
  // Validate dates
  const startDate = new Date(tripData.start_date);
  const endDate = new Date(tripData.end_date);
  
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid date format for start_date or end_date");
  }
  
  if (endDate < startDate) {
    throw new Error("end_date must be after start_date");
  }

  // Validate required fields
  if (!tripData.title?.trim()) {
    throw new Error("title is required");
  }

  if (!tripData.trip_cities?.length) {
    throw new Error("At least one city is required");
  }

  const supabase = createClientSupabaseClient(token);

  // Start a transaction to insert trip and related data
  const { data: trip, error: tripError } = await supabase
    .from("trips")
    .insert({
      title: tripData.title.trim(),
      description: tripData.description?.trim() || "",
      start_date: tripData.start_date,
      end_date: tripData.end_date,
      cover_image: tripData.cover_image?.trim() || "",
    })
    .select()
    .single();

  if (tripError) {
    throw new Error(`Failed to create trip: ${tripError.message}`);
  }

  // Insert trip cities
  const { data: createdCities, error: citiesError } = await supabase
    .from("trip_cities")
    .insert(
      tripData.trip_cities.map((city) => ({
        trip_id: trip.id,
        name: city.name.trim(),
        country: city.country.trim(),
        lat: city.lat,
        lng: city.lng,
      }))
    )
    .select();

  if (citiesError) {
    throw new Error(`Failed to create trip cities: ${citiesError.message}`);
  }

  // Insert trip places
  const placesToInsert = tripData.trip_cities.flatMap((city, index) =>
    city.trip_places.map((place) => ({
      trip_city_id: createdCities[index].id,
      name: place.name.trim(),
    }))
  );

  if (placesToInsert.length > 0) {
    const { error: placesError } = await supabase
      .from("trip_places")
      .insert(placesToInsert);

    if (placesError) {
      throw new Error(`Failed to create trip places: ${placesError.message}`);
    }
  }

  // Insert trip tags
  if (tripData.trip_tags?.length) {
    const { error: tagsError } = await supabase
      .from("trip_tags")
      .insert(
        tripData.trip_tags.map((tag) => ({
          trip_id: trip.id,
          name: tag.name.trim(),
        }))
      );

    if (tagsError) {
      throw new Error(`Failed to create trip tags: ${tagsError.message}`);
    }
  }

  return trip;
} 