import React, { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Colombo() {
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Cultural Sites');

  const hotels = [
    {
      name: 'Shangri-La Colombo',
      rating: 5,
      price: '$150',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
    },
    {
      name: 'Cinnamon Grand',
      rating: 5,
      price: '$120',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
    },
    {
      name: 'Galle Face Hotel',
      rating: 4,
      price: '$95',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
    },
    {
      name: 'Hilton Colombo',
      rating: 5,
      price: '$110',
      period: 'night',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
    }
  ];

  const categories = ['Cultural Sites', 'Shopping Places', 'Museums'];

  const categoryData = {
    'Cultural Sites': [
      {
        name: 'Gangaramaya Temple',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
        description: 'A magnificent Buddhist temple showcasing modern architecture and cultural heritage.'
      },
      {
        name: 'Galle Face Green',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
        description: 'Historic oceanside promenade perfect for evening strolls and street food.'
      },
      {
        name: 'Red Mosque',
        image: 'https://images.unsplash.com/photo-1564769625392-651b8bb44952?w=800',
        description: 'Beautiful Indo-Saracenic architecture mosque in the heart of Pettah.'
      }
    ],
    'Shopping Places': [
      {
        name: 'Odel Department Store',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        description: 'Premier shopping destination for fashion, accessories, and local designer brands.'
      },
      {
        name: 'Pettah Market',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        description: 'Bustling traditional market with spices, textiles, and authentic local goods.'
      },
      {
        name: 'One Galle Face Mall',
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
        description: 'Modern luxury shopping mall with international brands and fine dining.'
      }
    ],
    Museums: [
      {
        name: 'Colombo National Museum',
        image: 'https://images.unsplash.com/photo-1629795815383-17de897bf8b4?w=800',
        description: 'Sri Lanka\'s largest museum featuring ancient artifacts, royal regalia, and cultural exhibits.'
      },
      {
        name: 'Dutch Period Museum',
        image: 'https://images.unsplash.com/photo-1587923579033-51c77bfb6e0e?w=800',
        description: 'Showcases colonial Dutch heritage and artifacts from the 17th-18th centuries.'
      },
      {
        name: 'Independence Memorial Museum',
        image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=800',
        description: 'Commemorates Sri Lanka\'s independence with historical documents and exhibits.'
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920)' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Discover Vibrant<br />Colombo
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 font-light">
            Where tradition meets modernity in Sri Lanka's bustling capital.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            Explore the City
          </button>
        </div>
      </div>

      {/* Hotels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Luxury Hotels</h2>
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
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Explore Colombo</h2>
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
          <h3 className="text-2xl font-light mb-4">Ready to Explore Colombo?</h3>
          <p className="text-gray-300 mb-8">Experience the perfect blend of history, culture, and modern city life.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition">
            Start Your Journey
          </button>
        </div>
      </footer>
    </div>
  );
}