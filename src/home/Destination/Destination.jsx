import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock, Star } from 'lucide-react';

const DestinationsPage = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 'colombo',
      name: 'Colombo',
      description: 'The vibrant capital city where modern skyscrapers meet colonial architecture along the scenic Beira Lake.',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=300&fit=crop',
      rating: 4.5,
      duration: '2-3 days',
      highlights: ['Galle Face Green', 'National Museum', 'Pettah Markets', 'Beira Lake'],
      bestTime: 'December to March'
    },
    {
      id: 'galle',
      name: 'Galle',
      description: 'A UNESCO World Heritage site featuring the iconic Galle Fort with stunning ocean views and colonial charm.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      rating: 4.8,
      duration: '1-2 days',
      highlights: ['Galle Fort', 'Dutch Reformed Church', 'Lighthouse', 'Ramparts Walk'],
      bestTime: 'November to April'
    },
    {
      id: 'jaffna',
      name: 'Jaffna',
      description: 'The cultural heart of Tamil Sri Lanka, home to ancient temples, historic forts, and unique northern cuisine.',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&h=300&fit=crop',
      rating: 4.3,
      duration: '2-3 days',
      highlights: ['Jaffna Fort', 'Nallur Temple', 'Casuarina Beach', 'Jaffna Library'],
      bestTime: 'December to March'
    },
    {
      id: 'nuwara-eliya',
      name: 'Nuwara Eliya',
      description: 'The "Little England" of Sri Lanka, famous for its tea plantations, cool climate, and colonial architecture.',
      image: 'https://images.unsplash.com/photo-1578643463396-0325cb2daa80?w=400&h=300&fit=crop',
      rating: 4.6,
      duration: '2-3 days',
      highlights: ['Tea Plantations', 'Gregory Lake', 'Horton Plains', 'Strawberry Fields'],
      bestTime: 'April to September'
    },
    {
      id: 'anuradhapura',
      name: 'Anuradhapura',
      description: 'Ancient capital city featuring magnificent Buddhist temples, stupas, and archaeological wonders dating back over 2,000 years.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      rating: 4.7,
      duration: '1-2 days',
      highlights: ['Sri Maha Bodhi', 'Ruwanwelisaya', 'Abhayagiri Monastery', 'Isurumuniya Temple'],
      bestTime: 'May to September'
    },
    {
      id: 'polonnaruwa',
      name: 'Polonnaruwa',
      description: 'Medieval capital showcasing well-preserved ruins, intricate stone carvings, and the famous Gal Vihara Buddha statues.',
      image: 'https://images.unsplash.com/photo-1610558309-1f96e6db0edf?w=400&h=300&fit=crop',
      rating: 4.5,
      duration: '1-2 days',
      highlights: ['Gal Vihara', 'Parakrama Samudra', 'Royal Palace', 'Lotus Pond'],
      bestTime: 'May to September'
    }
  ];

  const handleViewMore = (destination) => {
    setSelectedDestination(destination);
  };

  const handleBack = () => {
    setSelectedDestination(null);
  };

  if (selectedDestination) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
            Back to Destinations
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img 
                src={selectedDestination.image} 
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{selectedDestination.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span>{selectedDestination.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>{selectedDestination.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {selectedDestination.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Must-Visit Highlights</h3>
                  <ul className="space-y-2">
                    {selectedDestination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Travel Information</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium">Best Time to Visit:</span>
                      <span className="ml-2 text-gray-600">{selectedDestination.bestTime}</span>
                    </div>
                    <div>
                      <span className="font-medium">Recommended Duration:</span>
                      <span className="ml-2 text-gray-600">{selectedDestination.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium">Rating:</span>
                      <span className="ml-2 text-gray-600">{selectedDestination.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Plan Your Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Sri Lanka
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the pearl of the Indian Ocean with its rich culture, ancient heritage, and breathtaking landscapes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {destination.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                  <Link
  to={`/city/${destination.id}`}
  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
>
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore All Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
