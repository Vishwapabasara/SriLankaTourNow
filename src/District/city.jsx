import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Star,
  MapPin,
  Thermometer,
  Wind,
  Droplets,
  ExternalLink,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import cityData from './citydata';

export default function CityPage() {
  const { cityId } = useParams();
  const data = cityData[cityId];
  

  const [weather, setWeather] = useState(null);
  const [activeCategory, setActiveCategory] = useState(data?.categories[0] || '');
  const [selectedType, setSelectedType] = useState("All");
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);
  const [showAllHotels, setShowAllHotels] = useState(false);
  const scrollContainerRef = useRef(null);
  const exploreScrollRef = useRef(null);
  const thingsToDoScrollRef = useRef(null);

  const apiKey = '028a2b358f874453b6060142250707';

  useEffect(() => {
    if (!data?.cityName) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${data.cityName}`
        );
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [data?.cityName]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h2>
          <p className="text-gray-600">The city you're looking for doesn't exist in our database.</p>
        </div>
      </div>
    );
  }

  const cityHotelData = data?.hotels || [];
  const hotelTypes = ["All", "Luxury", "Boutique", "Budget", "Serviced Apartments"];
  const thingsToDo = data?.thingsToDo || [];

  const filteredHotels =
    selectedType === "All"
      ? cityHotelData
      : cityHotelData.filter((hotel) => hotel.type === selectedType);

  
  

  // Reset scroll position when filter changes
  useEffect(() => {
    setCurrentHotelIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [selectedType]);

  // Reset to carousel view when filter changes
  useEffect(() => {
    setShowAllHotels(false);
  }, [selectedType]);

  // Reset explore scroll when category changes
  useEffect(() => {
    if (exploreScrollRef.current) {
      exploreScrollRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  // Scroll functions for hotels
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Scroll functions for explore section
  const scrollExploreLeft = () => {
    if (exploreScrollRef.current) {
      const cardWidth = exploreScrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      exploreScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollExploreRight = () => {
    if (exploreScrollRef.current) {
      const cardWidth = exploreScrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      exploreScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Scroll functions for things to do section
  const scrollThingsToDoLeft = () => {
    if (thingsToDoScrollRef.current) {
      const cardWidth = thingsToDoScrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      thingsToDoScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollThingsToDoRight = () => {
    if (thingsToDoScrollRef.current) {
      const cardWidth = thingsToDoScrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      thingsToDoScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section - Enhanced */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {data.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl">
              {data.heroSubtitle}
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Weather Section - Compact Bar Style */}
      {weather && (
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              {/* Location */}
              <div className="flex items-center space-x-3 mb-3 md:mb-0">
                <MapPin className="w-4 h-4 text-slate-300" />
                <span className="text-sm font-medium">
                  {weather.location.name}, {weather.location.country}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </span>
              </div>
              
              {/* Weather Info - Horizontal */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">{Math.round(weather.current.temp_c)}°C</span>
                  <span className="text-slate-300">{weather.current.condition.text}</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-4 text-xs text-slate-300">
                  <div className="flex items-center space-x-1">
                    <Thermometer className="w-3 h-3" />
                    <span>Feels {Math.round(weather.current.feelslike_c)}°C</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wind className="w-3 h-3" />
                    <span>{weather.current.wind_kph} km/h</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Droplets className="w-3 h-3" />
                    <span>{weather.current.humidity}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hotels Section - Premium Design */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🏨 Premium Accommodations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hotels in {data.cityName}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover exceptional stays that make your journey unforgettable
            </p>
          </div>

          {/* Hotel Type Filter - Mobile Responsive, No Box */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:justify-center">
                {hotelTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center shadow-md ${
                      selectedType === type
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hotel Cards - Conditional Layout */}
          <div className="space-y-8">
            {filteredHotels.length > 0 ? (
              showAllHotels ? (
                // Grid View - All Hotels (Single Column, Mobile Responsive)
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">All Hotels in {data.cityName}</h3>
                    <p className="text-gray-600">Showing all {filteredHotels.length} available accommodations</p>
                  </div>
                  <div className="max-w-5xl mx-auto space-y-4">
                    {filteredHotels.map((hotel) => (
                      <div
                        key={hotel.name}
                        className="group bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row"
                      >
                        {/* Hotel Image - Mobile Responsive */}
                        <div className="relative overflow-hidden w-full sm:w-48 flex-shrink-0">
                          <img 
                            src={hotel.image} 
                            alt={hotel.name} 
                            className="w-full h-48 sm:h-32 object-cover transition-transform duration-300" 
                          />
                          {/* Type Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="bg-white/95 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                              {hotel.type}
                            </span>
                          </div>
                          {/* Rating Badge */}
                          {hotel.rating && (
                            <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-lg flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-current text-yellow-400" />
                              <span className="text-xs font-medium">{hotel.rating}</span>
                            </div>
                          )}
                        </div>

                        {/* Hotel Info - Mobile Responsive */}
                        <div className="flex-1 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <div className="flex-1 mb-4 sm:mb-0">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {hotel.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                              {hotel.description}
                            </p>
                            
                            {/* Hotel Details - Mobile Stack */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="font-medium">{data.cityName}</span>
                              </div>
                              {hotel.amenities && (
                                <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600 font-medium w-fit">
                                  {hotel.amenities.length} amenities
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Price & CTA - Mobile Stack */}
                          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center space-x-4 sm:space-x-0 sm:space-y-3 sm:ml-4">
                            {/* Price */}
                            {hotel.price && (
                              <div className="text-left sm:text-right">
                                <div className="text-lg sm:text-xl font-bold text-gray-900">${hotel.price}</div>
                                <div className="text-xs text-gray-500">per night</div>
                              </div>
                            )}
                            
                            {/* CTA Button - Compact */}
                            <a
                              href={hotel.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center space-x-2 text-sm whitespace-nowrap"
                            >
                              <span>Book Now</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Toggle Button - Below Hotels in Grid View */}
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAllHotels(false)}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 text-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Show Carousel View</span>
                    </button>
                  </div>
                </div>
              ) : (
                // Carousel View - Original Horizontal Scroll
                <div>
                  <div className="relative">
                    {/* Navigation Buttons */}
                    {filteredHotels.length > 4 && (
                      <>
                        <button
                          onClick={scrollLeft}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          onClick={scrollRight}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                      </>
                    )}

                    {/* Scrollable Container */}
                    <div 
                      ref={scrollContainerRef}
                      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {filteredHotels.map((hotel) => (
                        <div
                          key={hotel.name}
                          className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex-shrink-0 w-80"
                        >
                          {/* Hotel Image */}
                          <div className="relative overflow-hidden">
                            <img 
                              src={hotel.image} 
                              alt={hotel.name} 
                              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Type Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-white/20">
                                {hotel.type}
                              </span>
                            </div>
                            
                            {/* Rating Badge */}
                            {hotel.rating && (
                              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                                <Star className="w-4 h-4 fill-current text-yellow-400" />
                                <span className="text-sm font-bold">{hotel.rating}</span>
                              </div>
                            )}
                          </div>

                          {/* Hotel Info */}
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                              {hotel.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                              {hotel.description}
                            </p>
                            
                            {/* Hotel Details */}
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="font-medium">{data.cityName}</span>
                              </div>
                              {hotel.amenities && (
                                <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600 font-medium">
                                  {hotel.amenities.length} amenities
                                </span>
                              )}
                            </div>
                            
                            {/* Price */}
                            {hotel.price && (
                              <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                                <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
                                <span className="text-gray-600 text-sm ml-2">per night</span>
                              </div>
                            )}
                            
                            {/* CTA Button */}
                            <a
                              href={hotel.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl"
                            >
                              <span>Book Your Stay</span>
                              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Scroll Indicator */}
                    {filteredHotels.length > 4 && (
                      <div className="flex justify-center mt-6">
                        <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                          Scroll to see all {filteredHotels.length} hotels →
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* View Toggle Button - Below Carousel */}
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAllHotels(true)}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 text-sm"
                    >
                      <span>View All {filteredHotels.length} Hotels</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No Hotels Available</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  We couldn't find any accommodations matching your criteria. Let's explore all available options.
                </p>
                <button
                  onClick={() => setSelectedType("All")}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Hotels
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Explore Categories - Compact */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
              ✨ Discover & Explore
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Explore {data.cityName}
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Uncover hidden gems and must-visit attractions
            </p>
          </div>
          
          {/* Category Tabs - Mobile Responsive, No Box */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-3xl">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:justify-center">
                {data.categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-5 py-2 rounded-lg font-semibold transition-all duration-200 text-xs sm:text-sm text-center shadow-md ${
                      activeCategory === cat
                        ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Places Grid - Horizontal Scroll */}
          <div className="relative">
            {/* Navigation Buttons */}
            {data.categoryData[activeCategory]?.length > 3 && (
              <>
                <button
                  onClick={scrollExploreLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={scrollExploreRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </>
            )}

            {/* Scrollable Container */}
            <div 
              ref={exploreScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {data.categoryData[activeCategory]?.map((place, i) => (
                <div
                  key={i}
                  className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex-shrink-0 w-80"
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${place.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {place.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </section>

      {/* Things To Do Section */}
     {/* Things To Do Section */}
{data?.thingsToDo && data.thingsToDo.length > 0 && (
  <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
          🎯 Activities & Experiences
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Things To Do in {data.cityName}
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Create unforgettable memories with these amazing activities and experiences
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        {data.thingsToDo.length > 3 && (
          <>
            <button
              onClick={scrollThingsToDoLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={scrollThingsToDoRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}

        {/* Scrollable Container */}
        <div 
          ref={thingsToDoScrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.thingsToDo.map((activity, i) => (
            <div
              key={i}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex-shrink-0 w-80"
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/95 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    {activity.category}
                  </span>
                </div>

                {/* Price Badge */}
                {activity.price && (
                  <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-lg">
                    <span className="text-xs font-semibold">{activity.price}</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {activity.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {activity.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">{activity.duration}</span>
                  </div>
                  <span className="bg-orange-50 px-2 py-1 rounded-full text-orange-600 font-medium">
                    {activity.category}
                  </span>
                </div>

                {/* Book Button */}
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-center shadow-md hover:shadow-lg"
                  >
                  Book Experience <ExternalLink className="inline ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

    </div>
  );
}