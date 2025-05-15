'use client'
import { useQuery } from '@tanstack/react-query'
import { getTrips } from '@/lib/queries/get-trips'
import { TripAdapter } from '@/lib/adapter/trip.adapter'
import { TripCity } from '@/lib/entity/tripCity.entity'
import { TripPlace } from '@/lib/entity/tripPlace.entity'
import { useSession } from '@clerk/nextjs'

type TripCityWithPlaces = TripCity & {
  tripPlaces: TripPlace[]
}

export default function Home() {

    const { session } = useSession();
  const { data: trips, isLoading, error } = useQuery<TripAdapter[]>({
    queryKey: ['trips'],
    queryFn: async () => {
        if (!session) return [];
        const token = await session.getToken();
        if (!token) return [];
        const trips = await getTrips(token);
        return trips;
    },
    enabled: !!session
  })

  if (isLoading) return <div>Loading trips...</div>
  if (error) return <div>Error loading trips</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Trips</h1>
      
      {trips && trips.length > 0 ? (
        <div className="space-y-4">
          {trips.map((trip) => (
            <div key={trip.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{trip.title}</h2>
              <p className="text-gray-600 mt-1">{trip.description}</p>
              
              {trip.tripCities && trip.tripCities.length > 0 && (
                <div className="mt-2">
                  <h3 className="font-medium">Cities:</h3>
                  <ul className="list-disc list-inside">
                    {trip.tripCities.map((city) => {
                      const cityWithPlaces = city as unknown as TripCityWithPlaces
                      return (
                        <li key={cityWithPlaces.id}>
                          {cityWithPlaces.name}
                          {cityWithPlaces.tripPlaces && cityWithPlaces.tripPlaces.length > 0 && (
                            <ul className="ml-4 list-disc">
                              {cityWithPlaces.tripPlaces.map((place) => (
                                <li key={place.id}>{place.name}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {trip.tripTags && trip.tripTags.length > 0 && (
                <div className="mt-2">
                  <h3 className="font-medium">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {trip.tripTags.map((tag) => (
                      <span 
                        key={tag.id}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No trips found</p>
      )}
    </div>
  )
}