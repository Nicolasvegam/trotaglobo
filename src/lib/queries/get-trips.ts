import { TripAdapter } from "../adapter/trip.adapter";
import { createClientSupabaseClient } from "../auth/utils/create-client-supabase-client";

export async function getTrips(token: string): Promise<TripAdapter[]> {
  const supabase = createClientSupabaseClient(token);
  const { data, error } = await supabase
    .from("trips")
    .select(`
      *,
      trip_cities (
        *,
        trip_places (
          *
        )
      ),
      trip_tags (
        *
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as TripAdapter[];
}
