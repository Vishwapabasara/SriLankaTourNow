import React, { useState } from 'react';
import { Search, Star, Sun, Cloud, Zap } from 'lucide-react'; // ⬅️ removed Link
import Navbar from './Nav/nav';
import { Link } from 'react-router-dom';

export default function SriLankaTravelSite() {
  const [whereToValue, setWhereToValue] = useState('');
  const [checkInValue, setCheckInValue] = useState('');
  const [guestsValue, setGuestsValue] = useState('');

  const destinations = [
    {
      name: 'Colombo',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      alt: 'Colombo city skyline with lake view'
    },
    {
      name: 'Kandy',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      alt: 'Kandy temple and hills'
    },
    {
      name: 'Galle',
      image: 'https://images.unsplash.com/photo-1567225477277-c97eeab9db5c?w=400&h=300&fit=crop',
      alt: 'Galle lighthouse and fort'
    },
    {
      name: 'Ella',
      image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=400&h=300&fit=crop',
      alt: 'Ella mountain landscapes'
    }
  ];

  const hotels = [
    {
      name: 'Trillium Boutique City Hotel',
      rating: 5,
      reviews: '5 night',
      location: 'Old Town Road',
      city: 'Colombo',
      price: '$75',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=150&fit=crop'
    },
    {
      name: 'Ocean View Resort',
      rating: 4,
      reviews: '50 m',
      location: 'Galle',
      city: 'Galle',
      price: '$120',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=150&fit=crop'
    },
    {
      name: 'Green Hills Inn',
      rating: 4,
      reviews: '48 fol',
      location: 'Nuwara Eliya',
      city: 'Ella',
      price: '$90',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&h=150&fit=crop'
    }
  ];

  const weatherData = [
    { city: 'Colombo', temp: '30°C', icon: Sun, color: 'text-yellow-500' },
    { city: 'Kandy', temp: '28°C', icon: Cloud, color: 'text-gray-500' },
    { city: 'Nuwara Eliya', temp: '20°C', icon: Zap, color: 'text-blue-500' }
  ];

  const exchangeRates = [
    { currency: '1 USD', rate: '306.45 LKR' },
    { currency: '1 EUR', rate: '320.10 LKR' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566053052-eaa37997e9de?w=1200&h=600&fit=crop)',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Explore Sri Lanka with Best Deals -<br />
            Stay, Fly, and Discover!
          </h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Where to?</label>
                <input
                  type="text"
                  value={whereToValue}
                  onChange={(e) => setWhereToValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Destination"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <input
                  type="date"
                  value={checkInValue}
                  onChange={(e) => setCheckInValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <input
                  type="number"
                  value={guestsValue}
                  onChange={(e) => setGuestsValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2"
                  min="1"
                />
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-200 flex items-center justify-center">
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Destinations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Destinations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {destinations.map((destination, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }} />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{destination.name}</h3>
                     <Link
  to={`/District/${destination.name.toLowerCase()}`}
  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition duration-200"
>
  Explore
</Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hotels */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Looking for the perfect stay?</h2>
              <div className="space-y-6">
                {hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                    <div className="w-32 h-32 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url(${hotel.image})` }} />
                    <div className="flex-1 p-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{hotel.name}</h3>
                        <div className="flex items-center mb-2">
                          {renderStars(hotel.rating)}
                          <span className="ml-2 text-sm text-gray-600">{hotel.reviews}</span>
                        </div>
                        <p className="text-gray-600">{hotel.location}</p>
                        <p className="text-gray-600">{hotel.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 mb-2">{hotel.price} <span className="text-sm font-normal">/ {hotel.period}</span></p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-200">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
                Apply for Visa
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
                Visit SriLankan Airlines
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Latest Travel News */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Travel News</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-medium">Aptiral</span>
                  <a href="#" className="text-blue-600 underline ml-2">Sarlana:</a>
                  <span className="text-gray-600 ml-1">2024</span>
                  <p className="text-gray-700 mt-1">Sri Lanka Welcomes Recording Number of Tourists in 2024</p>
                </div>
                <div>
                  <p className="text-gray-700">Temples of the Cultural Triangle</p>
                </div>
              </div>
            </section>

            {/* Weather */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weather</h3>
              <div className="space-y-3">
                {weatherData.map((weather, index) => {
                  const IconComponent = weather.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className={`w-5 h-5 ${weather.color} mr-2`} />
                        <span className="text-gray-700">{weather.city}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{weather.temp}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Exchange Rates */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exchange Rates</h3>
              <div className="space-y-3">
                {exchangeRates.map((rate, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700">{rate.currency}</span>
                    <span className="font-semibold text-gray-900">{rate.rate}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}