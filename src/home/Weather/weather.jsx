import React, { useEffect, useState } from 'react';
import { Cloud, MapPin, Thermometer, Eye, Wind, Droplets } from 'lucide-react';

const cities = [
  'Colombo',
  'Kandy',
  'Galle',
  'Jaffna',
  'Anuradhapura',
  'Nuwara Eliya',
  'Batticaloa',
  'Trincomalee',
  'Kurunegala',
  'Matara',
];

const apiKey = '028a2b358f874453b6060142250707';

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllWeather = async () => {
      try {
        setLoading(true);
        const promises = cities.map((city) =>
          fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
            .then((res) => {
              if (!res.ok) throw new Error('Failed to fetch weather data');
              return res.json();
            })
            .then((data) => ({
              name: data.location.name,
              temp: data.current.temp_c,
              condition: data.current.condition.text,
              icon: data.current.condition.icon,
              humidity: data.current.humidity,
              windSpeed: data.current.wind_kph,
              visibility: data.current.vis_km,
              feelsLike: data.current.feelslike_c,
            }))
        );

        const results = await Promise.all(promises);
        setWeatherData(results);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to load weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllWeather();
  }, []);

  const formatTime = () => {
    return new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <Cloud className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Error Loading Weather</h2>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         
          
        </div>
      </div>

      {/* Weather Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {weatherData.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{city.name}</h3>
                    <p className="text-blue-100 text-sm mt-1">Sri Lanka</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{city.temp}°</div>
                    <div className="text-sm text-blue-100">
                      Feels like {city.feelsLike}°
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Weather Condition */}
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={city.icon}
                    alt={city.condition}
                    className="h-16 w-16 mr-3"
                  />
                  <div className="text-center">
                    <p className="text-slate-700 font-medium">{city.condition}</p>
                  </div>
                </div>

                {/* Weather Details */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <Droplets className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-slate-600">Humidity</div>
                    <div className="font-semibold text-slate-800">{city.humidity}%</div>
                  </div>
                  <div className="text-center">
                    <Wind className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-slate-600">Wind</div>
                    <div className="font-semibold text-slate-800">{city.windSpeed} km/h</div>
                  </div>
                  <div className="text-center">
                    <Eye className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-slate-600">Visibility</div>
                    <div className="font-semibold text-slate-800">{city.visibility} km</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-slate-500 text-sm">
            <p>Weather data provided by WeatherAPI • Updated every 10 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}