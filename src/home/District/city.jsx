// CityPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, MapPin, Thermometer, Wind, Droplets, Eye } from 'lucide-react';
import cityData from './citydata'; // Your actual data file

export default function CityPage() {
  const { cityId } = useParams();
  const data = cityData[cityId];

  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(data?.categories[0] || '');
  const [weather, setWeather] = useState(null);
  const apiKey = '028a2b358f874453b6060142250707'; // Replace with your WeatherAPI key

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
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">City not found.</h2>
      </div>
    );
  }

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  const nextHotel = () =>
    setCurrentHotelIndex((prev) => (prev + 1) % data.hotels.length);
  const prevHotel = () =>
    setCurrentHotelIndex((prev) => (prev - 1 + data.hotels.length) % data.hotels.length);

  const getVisibleHotels = () =>
    data.hotels
      .slice(currentHotelIndex, currentHotelIndex + 3)
      .concat(
        data.hotels.slice(0, Math.max(0, 3 - (data.hotels.length - currentHotelIndex)))
      );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
            {data.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 font-light">{data.heroSubtitle}</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg text-base transition duration-300 transform hover:scale-105">
            Explore the City
          </button>
        </div>
      </div>

      {/* Weather Section */}
      {weather && (
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Main Weather Info */}
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="text-lg font-medium text-gray-900">
                    {weather.location.name}, {weather.location.country}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>

              {/* Weather Display */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-4">
                  <img
                    src={weather.current.condition.icon}
                    alt={weather.current.condition.text}
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {Math.round(weather.current.temp_c)}°C
                    </div>
                    <div className="text-sm text-gray-600">
                      {weather.current.condition.text}
                    </div>
                  </div>
                </div>

                {/* Weather Details */}
                <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Thermometer className="w-4 h-4" />
                    <span>Feels {Math.round(weather.current.feelslike_c)}°C</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wind className="w-4 h-4" />
                    <span>{weather.current.wind_kph} km/h {weather.current.wind_dir}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Droplets className="w-4 h-4" />
                    <span>{weather.current.humidity}%</span>
                  </div>
                  {weather.current.uv && (
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span>UV {weather.current.uv}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Weather Details */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-4 h-4" />
                  <span>Feels like {Math.round(weather.current.feelslike_c)}°C</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="w-4 h-4" />
                  <span>{weather.current.wind_kph} km/h {weather.current.wind_dir}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplets className="w-4 h-4" />
                  <span>Humidity {weather.current.humidity}%</span>
                </div>
                {weather.current.uv && (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>UV Index {weather.current.uv}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hotels */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">
            Luxury Hotels
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleHotels().map((hotel, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                      <div className="text-right">
                        <span className="text-xl font-bold text-gray-900">{hotel.price}</span>
                        <span className="text-gray-600 ml-1">/ {hotel.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex">{renderStars(hotel.rating)}</div>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-lg text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevHotel}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextHotel}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">
            Explore {data.cityName}
          </h2>
          <div className="flex justify-center mt-6 mb-6">
            <div className="bg-white rounded-lg p-1 shadow-lg flex space-x-1">
              {data.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                    activeCategory === cat
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.categoryData[activeCategory]?.map((place, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${place.image})` }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-gray-600 text-sm">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}