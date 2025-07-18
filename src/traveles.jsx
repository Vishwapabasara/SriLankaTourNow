import React, { useState } from 'react';
import { MapPin, Calendar, Shield, FileText, Wallet, Thermometer, Droplets, Camera, Phone, AlertTriangle } from 'lucide-react';

const TravelEssentials = () => {
  const [activeTab, setActiveTab] = useState('documents');

  const tabs = [
    { id: 'documents', label: 'Documents & Visa', icon: FileText },
    { id: 'health', label: 'Health & Safety', icon: Shield },
    { id: 'money', label: 'Money & Costs', icon: Wallet },
    { id: 'weather', label: 'Weather & Packing', icon: Thermometer },
    { id: 'culture', label: 'Culture & Tips', icon: Camera }
  ];

  const TabContent = ({ tabId }) => {
    switch (tabId) {
      case 'documents':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Electronic Travel Authorization (ETA)</h3>
              <p className="text-blue-800 text-sm">Required for most tourists. Apply online at eta.gov.lk</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-3">Required Documents:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Valid passport (6+ months remaining)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    ETA approval confirmation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Return flight ticket
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Proof of accommodation
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">ETA Details:</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Tourist ETA:</strong> $25 USD</li>
                  <li><strong>Validity:</strong> 30 days</li>
                  <li><strong>Processing:</strong> 1-3 days</li>
                  <li><strong>Extensions:</strong> Possible via immigration</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'health':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Important Health Info
              </h3>
              <p className="text-red-800 text-sm">Consult your doctor 4-6 weeks before travel</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Recommended Vaccinations:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Hepatitis A & B</li>
                  <li>• Typhoid</li>
                  <li>• Japanese Encephalitis (rural areas)</li>
                  <li>• Routine vaccines (MMR, DPT, flu)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Health Precautions:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Drink bottled/boiled water</li>
                  <li>• Use mosquito repellent</li>
                  <li>• Avoid street food initially</li>
                  <li>• Carry basic medications</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Travel Insurance:</h4>
              <p className="text-sm text-gray-600">Highly recommended - covers medical emergencies, trip cancellation, and lost luggage.</p>
            </div>
          </div>
        );
      
      case 'money':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Currency: Sri Lankan Rupee (LKR)</h3>
              <p className="text-green-800 text-sm">1 USD ≈ 300-320 LKR (rates fluctuate)</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Payment Methods:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Cash:</strong> Widely accepted everywhere</li>
                  <li>• <strong>Cards:</strong> Major hotels, restaurants</li>
                  <li>• <strong>ATMs:</strong> Available in cities/towns</li>
                  <li>• <strong>Mobile Pay:</strong> Limited acceptance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Daily Budget (USD):</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Budget:</strong> $15-25</li>
                  <li>• <strong>Mid-range:</strong> $25-50</li>
                  <li>• <strong>Luxury:</strong> $50+</li>
                  <li>• <strong>Local meal:</strong> $1-3</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Money Tips:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Exchange money at banks or authorized dealers</li>
                <li>• Keep small bills for tuk-tuks and street vendors</li>
                <li>• Tipping is optional but appreciated (10%)</li>
                <li>• Bargaining is common in markets</li>
              </ul>
            </div>
          </div>
        );
      
      case 'weather':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2 flex items-center">
                <Droplets className="w-4 h-4 mr-2" />
                Tropical Climate - Two Monsoon Seasons
              </h3>
              <p className="text-yellow-800 text-sm">Weather varies by region and season</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Best Time to Visit:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>West/South:</strong> Dec-Mar</li>
                  <li>• <strong>East/North:</strong> May-Sep</li>
                  <li>• <strong>Hill Country:</strong> Jan-Mar, Jul-Sep</li>
                  <li>• <strong>Overall:</strong> Dec-Mar</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Temperature Range:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Coastal:</strong> 26-30°C (79-86°F)</li>
                  <li>• <strong>Hill Country:</strong> 16-22°C (61-72°F)</li>
                  <li>• <strong>Cultural Triangle:</strong> 25-35°C (77-95°F)</li>
                  <li>• <strong>Humidity:</strong> 70-85%</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Packing Essentials:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>• Light, breathable clothing</li>
                  <li>• Rain jacket/umbrella</li>
                  <li>• Sunscreen (SPF 30+)</li>
                  <li>• Insect repellent</li>
                  <li>• Comfortable walking shoes</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>• Modest clothing for temples</li>
                  <li>• Light sweater for hill country</li>
                  <li>• Hat/cap for sun protection</li>
                  <li>• Sandals for beaches</li>
                  <li>• Quick-dry towel</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'culture':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Cultural Sensitivity</h3>
              <p className="text-purple-800 text-sm">Sri Lanka is a diverse, multi-religious country with rich traditions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Temple Etiquette:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Remove shoes before entering</li>
                  <li>• Cover shoulders and knees</li>
                  <li>• No photos of Buddha statues</li>
                  <li>• Don't point feet toward Buddha</li>
                  <li>• Remove hats and sunglasses</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Social Customs:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Use right hand for eating/greeting</li>
                  <li>• Remove shoes when entering homes</li>
                  <li>• Dress modestly in public</li>
                  <li>• Avoid public displays of affection</li>
                  <li>• Respect religious practices</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Useful Phrases:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Hello: <strong>Ayubowan</strong></li>
                  <li>• Thank you: <strong>Istuti</strong></li>
                  <li>• Please: <strong>Karunaakara</strong></li>
                  <li>• Yes: <strong>Ow</strong></li>
                  <li>• No: <strong>Naha</strong></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Emergency Contacts:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Police: <strong>119</strong></li>
                  <li>• Fire & Ambulance: <strong>110</strong></li>
                  <li>• Tourist Police: <strong>1912</strong></li>
                  <li>• Tourist Hotline: <strong>1912</strong></li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Sri Lanka Travel Essentials
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Everything you need to know before visiting the Pearl of the Indian Ocean
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Year-round destination</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                <span>ETA required</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <Thermometer className="w-4 h-4 mr-2" />
                <span>Tropical climate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-md p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors m-1 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <TabContent tabId={activeTab} />
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
          <h3 className="font-semibold text-orange-900 mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Quick Travel Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Transportation:</strong> Tuk-tuks, buses, trains available. Uber works in Colombo.
            </div>
            <div>
              <strong>Internet:</strong> Free WiFi in hotels/cafes. Local SIM cards available at airport.
            </div>
            <div>
              <strong>Language:</strong> Sinhala & Tamil official. English widely spoken in tourist areas.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default TravelEssentials;