"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { HolidayMap } from "@/components/HolidayMap";
import { HolidayCard } from "@/components/HolidayCard";
import { HolidayModal } from "@/components/HolidayModal";
import { AddHolidayModal } from "@/components/AddHolidayModal";
import { CountryFilter } from "@/components/CountryFilter";
import { ContinentFilter } from "@/components/ContinentFilter";
import { Holiday } from "@/types/holiday";
import { Plus, MapPin, Calendar,  Globe, Map as MapIcon, CalendarDays, Trophy } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SAMPLE_HOLIDAYS } from "@/lib/constants";
import { calculateTravelStats, getCountryContinent } from "@/utils";

export default function Home() {
  const [holidays, setHolidays] = useState<Holiday[]>(
    // Sort holidays by date (most recent first)
    [...SAMPLE_HOLIDAYS].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
  );
  const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'past' | 'wishlist'>('past');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  const handleHolidayClick = (holiday: Holiday) => {
    setSelectedHoliday(holiday);
    setIsModalOpen(true);
  };

  const handleAddHoliday = (newHoliday: Holiday) => {
    setHolidays([...holidays, newHoliday]);
  };

  const filteredHolidays = useMemo(() => {
    return holidays.filter(holiday => {
      const countryMatch = !selectedCountry || holiday.countries.includes(selectedCountry);
      const continentMatch = !selectedContinent || 
        holiday.countries.some(country => getCountryContinent(country) === selectedContinent);
      return countryMatch && continentMatch;
    });
  }, [holidays, selectedCountry, selectedContinent]);

  const pastHolidays = filteredHolidays.filter(holiday => holiday.isPast);
  const wishlistHolidays = filteredHolidays.filter(holiday => !holiday.isPast);

  // Get the currently visible holidays based on tab and country filter
  const visibleHolidays = useMemo(() => {
    return activeTab === 'past' ? pastHolidays : wishlistHolidays;
  }, [activeTab, pastHolidays, wishlistHolidays]);

  const travelStats = useMemo(() => calculateTravelStats(pastHolidays), [pastHolidays]);

  return (
    <div className="min-h-screen bg-neutral-50">      
      <main className="mx-auto px-12 sm:px-6 lg:px-8 py-8 sm:py-6 lg:py-8">
        {/* Stats Section - Moved to top */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Your Travel Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card className="p-4 hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Countries</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-lg font-bold">{travelStats.totalCountries}/195</div>
                <p className="text-xs text-muted-foreground">countries explored</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cities</CardTitle>
                <MapIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-lg font-bold">{travelStats.totalCities}</div>
                <p className="text-xs text-muted-foreground">unique cities visited</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                <CardTitle className="text-sm font-medium">Longest Trip</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-lg font-bold">{travelStats.longestTrip}</div>
                <p className="text-xs text-muted-foreground">longest single adventure</p>
              </CardContent>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                <CardTitle className="text-sm font-medium">Most Visited</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-lg font-bold">{travelStats.mostVisitedCountry !== 'N/A' ? travelStats.mostVisitedCountry : '...'}</div>
                <p className="text-xs text-muted-foreground">{travelStats.mostVisitedCountry !== 'N/A' ? 'top country' : 'keep travelling!'}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <div className="lg:w-[45%] lg:sticky lg:top-4 lg:self-start">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow duration-200">
              <div className="p-6 flex justify-between items-center border-b border-neutral-200">
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900">Your Travel Map</h2>
                  <p className="text-neutral-500 text-sm mt-1">
                    {activeTab === 'past' ? 'Visualize your past adventures' : 'Preview your future destinations'}
                  </p>
                </div>
              </div>
              <div className="h-[400px] lg:h-[600px]">
                <HolidayMap 
                  holidays={visibleHolidays} 
                  onHolidayClick={handleHolidayClick} 
                />
              </div>
            </div>
          </div>

          {/* Left side - Cards and Filters */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col mb-8">
              <div className="flex border-b border-neutral-200">
                <button
                  className={`py-4 px-6 font-medium text-sm relative transition-colors duration-200 ${
                    activeTab === 'past' 
                      ? 'text-neutral-900 border-b-2 border-brand-primary' 
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                  onClick={() => setActiveTab('past')}
                >
                  Past Trips
                  {pastHolidays.length > 0 && (
                    <span className="ml-2 bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full text-xs">
                      {pastHolidays.length}
                    </span>
                  )}
                </button>
                <button
                  className={`py-4 px-6 font-medium text-sm relative transition-colors duration-200 ${
                    activeTab === 'wishlist' 
                      ? 'text-neutral-900 border-b-2 border-brand-primary' 
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  Wishlist
                  {wishlistHolidays.length > 0 && (
                    <span className="ml-2 bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full text-xs">
                      {wishlistHolidays.length}
                    </span>
                  )}
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <ContinentFilter
                  displayedHolidays={visibleHolidays}
                  selectedContinent={selectedContinent}
                  onContinentSelect={setSelectedContinent}
                />
                <CountryFilter
                  displayedHolidays={visibleHolidays}
                  selectedCountry={selectedCountry}
                  onCountrySelect={setSelectedCountry}
                />
              </div>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {visibleHolidays.map(holiday => (
                <HolidayCard
                  key={holiday.id}
                  holiday={holiday}
                  onClick={handleHolidayClick}
                />
              ))}
              
              {visibleHolidays.length === 0 && (
                <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
                  <div className="bg-neutral-100 rounded-full p-5 mb-6">
                    {activeTab === 'past' ? (
                      <MapPin className="h-8 w-8 text-neutral-400" />
                    ) : (
                      <Calendar className="h-8 w-8 text-neutral-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800 mb-3">
                    {activeTab === 'past' ? 'No past trips yet' : 'Your wishlist is empty'}
                  </h3>
                  <p className="text-neutral-500 max-w-md mb-8 text-lg">
                    {activeTab === 'past' 
                      ? 'Start adding your travel memories to build your personal travel map.' 
                      : 'Add destinations you dream of visiting to your wishlist.'}
                  </p>
                  <Button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-6 py-2.5 text-base"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    <span>{activeTab === 'past' ? 'Add Past Trip' : 'Add to Wishlist'}</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-10">
          <Button 
            className="rounded-full h-16 w-16 shadow-lg hover:shadow-xl transition-all duration-200" 
            size="icon"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus className="h-7 w-7" />
          </Button>
        </div>
      </main>

      <HolidayModal 
        holiday={selectedHoliday} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <AddHolidayModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddHoliday}
        isPast={activeTab === 'past'}
      />

      <Footer />
    </div>
  );
}
