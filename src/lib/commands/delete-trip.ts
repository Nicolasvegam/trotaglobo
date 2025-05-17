import { createClientSupabaseClient } from "../auth/utils/create-client-supabase-client";

export async function deleteTrip(token: string, tripId: string) {
  const supabase = createClientSupabaseClient(token);

  // Delete trip and all related data in a transaction
  const { error } = await supabase
    .from("trips")
    .delete()
    .eq("id", tripId);

  if (error) {
    throw new Error(`Failed to delete trip: ${error.message}`);
  }

  return true;
} 