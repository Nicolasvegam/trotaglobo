import { TripAdapter } from "../adapter/trip.adapter";
import { createClientSupabaseClient } from "../auth/utils/create-client-supabase-client";

export async function getTrips(token: string, userId: string): Promise<TripAdapter[]> {
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
    .eq("user_id", userId)
    .order("start_date", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as TripAdapter[];
}
