import React, { useState } from 'react';
import { Star, Sun, Cloud, Zap, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Nav/nav';
import FAQPage from './FAQ/faq';
import Hotels from './Hotels/Hotels';
import SriLankaVideos from './Youtbe/youtube';
import AirlinesSection from './Airlines/airline';


export default function SriLankaTravelSite() {
  const [openIndex, setOpenIndex] = useState(null);

  const destinations = [
    { name: 'Colombo', image: '/assets/home/colomni.webp' },
    { name: 'Kandy', image: '/assets/home/kandy.jpg' },
    { name: 'Galle', image: '/assets/home/galle.jpg' },
    { name: 'Ella', image: '/assets/home/ella.jpg' }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[28rem] bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="absolute inset-0">
          <img src="/assets/heroSL.png" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
            Your One-Stop Guide to Sri Lanka
          </h1>
          <p className="text-white text-lg md:text-xl font-light mt-4 max-w-2xl">
            Discover, Plan, and Experience the Island Like Never Before.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ✅ Full-width Hotels above 2-column layout */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Sri Lanka with Confidence</h2>
  <p className="text-gray-700 text-lg leading-relaxed">
    Planning a trip to Sri Lanka? You're in the right place. This site is your personal travel companion — 
    packed with curated guides, destination highlights, cultural insights, local travel tips, and the latest deals. 
    Whether you're looking for hidden gems, must-see landmarks, or essential travel information, 
    we've got you covered. Start your journey with confidence and discover the best of the island.
  </p>
</section>


        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 space-y-12">
            {/* Destinations */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Destinations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {destinations.map((d, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-1">
                    <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${d.image})` }} />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{d.name}</h3>
                      <Link
                        to={`/District/${d.name.toLowerCase()}`}
                        className="mt-2 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg text-center"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Plan Your Journey */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Plan Your Journey</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                  <img src="/assets/home/vehicles.png" alt="Vehicle Hire" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Vehicle Hire in Sri Lanka</h3>
                    <p className="text-gray-600 mb-4">Cars, vans, and tuk-tuks available. With or without drivers.</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">View Rental Options</button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                  <img src="/assets/home/essentaila.png" alt="Travel Essentials" className="w-full h-56 object-cover" />
                  <div className="p-6">
                  
                    <h3 className="text-xl font-semibold mb-2">Travel Essentials</h3>
                    
                    <p className="text-gray-600 mb-4">Visas, SIM cards, vaccines, currency tips, weather and culture.</p>
                    <Link to="travelesenetials" className="text-blue-600 underline"><button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">Learn More</button></Link>
                  </div>
                  
                </div>
              </div>
            </section>

            

            
            
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 space-y-8">
            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Latest Travel News</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-semibold text-blue-600">Aptiral</span>
                  <a href="#" className="underline ml-2 text-blue-600">Sarlana:</a>
                  <span className="ml-1">2024</span>
                  <p>Sri Lanka Welcomes Record Tourists in 2024</p>
                </div>
                <p>Temples of the Cultural Triangle</p>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Weather</h3>
              <div className="space-y-2 text-sm">
                {weatherData.map((weather, i) => {
                  const Icon = weather.icon;
                  return (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${weather.color}`} />
                        <span>{weather.city}</span>
                      </div>
                      <span className="font-semibold">{weather.temp}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Exchange Rates</h3>
              <div className="space-y-2 text-sm">
                {exchangeRates.map((rate, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{rate.currency}</span>
                    <span className="font-semibold">{rate.rate}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
        </div>
      </div>
      <Hotels />
      {/* FAQ still inside left column */}
      
      <SriLankaVideos/>
      <AirlinesSection/>
      <FAQPage />
      
    </div>
  );
}
