import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SriLankaDeals from './home/home';
import DestinationsPage from './home/Destination/Destination';
import Navbar from './home/Nav/nav';
import CityPage from './home/District/city';
import NewsFeed from './home/News/news';
import ForexPage from './home/Exchnage';
import WeatherPage from './home/Weather/weather';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SriLankaDeals />} />
        
        {/* Dynamic route for cities */}
        <Route path="/city/:cityId" element={<CityPage />} />

        {/* Dynamic route for destinations */}
        <Route path="/destination/:id" element={<DestinationsPage />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/exchange-rates" element={<ForexPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
