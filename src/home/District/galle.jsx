import React, { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Galle() {
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Outdoor Beaches');

  const hotels = [
    {
      name: 'Hotel Paradise',
      rating: 5,
      price: '$80',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
    },
    {
      name: 'Oceanview Retreat',
      rating: 5,
      price: '$95',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
    },
    {
      name: 'Mountain Haven',
      rating: 5,
      price: '$80',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
    },
    {
      name: 'City Comfort',
      rating: 4,
      price: '$65',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
    }
  ];

  const categories = ['Outdoor Beaches', 'Shopping Places', 'Museums'];

  const categoryData = {
    'Outdoor Beaches': [
      {
        name: 'Unawatuna Beach',
        image: 'https://images.unsplash.com/photo-1596399803976-e04301f13cd2?w=800',
        description: 'A beautiful golden sand beach perfect for swimming and snorkeling.'
      },
      {
        name: 'Jungle Beach',
        image: 'https://images.unsplash.com/photo-1583447783406-8f6d5e6ef679?w=800',
        description: 'A secluded beach surrounded by lush jungle and ideal for relaxing.'
      },
      {
        name: 'Hikkaduwa Beach',
        image: 'https://images.unsplash.com/photo-1559585149-0437ab928983?w=800',
        description: 'Famous for its coral sanctuary and vibrant nightlife.'
      }
    ],
    'Shopping Places': [
      {
        name: 'Galle Antiques',
        image: 'https://images.unsplash.com/photo-1585162114609-12e32af9fd83?w=800',
        description: 'A unique store offering colonial-era artifacts and souvenirs.'
      },
      {
        name: 'Sooriya Weaving',
        image: 'https://images.unsplash.com/photo-1601233741629-414e287bc9cf?w=800',
        description: 'Traditional handloom textiles and local crafts.'
      },
      {
        name: 'The Factory Outlet',
        image: 'https://images.unsplash.com/photo-1561907650-6d04bdf8c8c8?w=800',
        description: 'A modern shopping outlet with branded items at discounted prices.'
      }
    ],
    Museums: [
      {
        name: 'National Museum of Galle',
        image: 'https://images.unsplash.com/photo-1629795815383-17de897bf8b4?w=800',
        description: 'Features exhibits on the region’s colonial history and local culture.'
      },
      {
        name: 'Martin Wickramasinghe Folk Museum',
        image: 'https://images.unsplash.com/photo-1587923579033-51c77bfb6e0e?w=800',
        description: 'Dedicated to the life and work of the great Sri Lankan writer.'
      }
    ]
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const nextHotel = () => {
    setCurrentHotelIndex((prev) => (prev + 1) % hotels.length);
  };

  const prevHotel = () => {
    setCurrentHotelIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  const getVisibleHotels = () => {
    const visibleHotels = [];
    for (let i = 0; i < 3; i++) {
      visibleHotels.push(hotels[(currentHotelIndex + i) % hotels.length]);
    }
    return visibleHotels;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1920)' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Explore the Hidden Gems<br />of Galle
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 font-light">
            Your journey to paradise begins here.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Hotels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Best Hotels</h2>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisibleHotels().map((hotel, index) => (
                <div key={`${hotel.name}-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${hotel.image})` }} />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">{hotel.price}</span>
                        <span className="text-gray-600 ml-1">/ {hotel.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex">{renderStars(hotel.rating)}</div>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-lg transition duration-200">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Arrows */}
            <button onClick={prevHotel} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={nextHotel} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Plan Your Day */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Plan Your Day</h2>
            <div className="flex justify-center mt-8">
              <div className="bg-white rounded-lg p-2 shadow-lg flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-lg font-medium transition ${
                      activeCategory === category ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryData[activeCategory].map((place, index) => (
              <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${place.image})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-gray-600">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-light mb-4">Ready to Start Your Adventure?</h3>
          <p className="text-gray-300 mb-8">Discover the beauty and culture of Galle with our curated experiences.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition">
            Plan Your Trip
          </button>
        </div>
      </footer>
    </div>
  );
}
