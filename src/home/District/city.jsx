// CityPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import cityData from './citydata'; // Your actual data file

export default function CityPage() {
  const { cityId } = useParams();
  const data = cityData[cityId];

  if (!data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">City not found.</h2>
      </div>
    );
  }

  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(data.categories[0]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));

  const nextHotel = () => setCurrentHotelIndex((prev) => (prev + 1) % data.hotels.length);
  const prevHotel = () => setCurrentHotelIndex((prev) => (prev - 1 + data.hotels.length) % data.hotels.length);
  const getVisibleHotels = () => data.hotels.slice(currentHotelIndex, currentHotelIndex + 3).concat(
    data.hotels.slice(0, Math.max(0, 3 - (data.hotels.length - currentHotelIndex)))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">{data.heroTitle}</h1>
          <p className="text-lg md:text-xl text-white mb-8 font-light">{data.heroSubtitle}</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg text-base transition duration-300 transform hover:scale-105">
            Explore the City
          </button>
        </div>
      </div>

      {/* Hotels */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">Luxury Hotels</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleHotels().map((hotel, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${hotel.image})` }} />
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
            <button onClick={prevHotel} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={nextHotel} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">Explore {data.cityName}</h2>
          <div className="flex justify-center mt-6 mb-6">
            <div className="bg-white rounded-lg p-1 shadow-lg flex space-x-1">
              {data.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                    activeCategory === cat ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.categoryData[activeCategory]?.map((place, i) => (
              <div key={i} className="bg-white shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${place.image})` }} />
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
