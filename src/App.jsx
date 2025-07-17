import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SriLankaTravelSite from './home/home';
import DestinationsPage from './Destination/Destination';
import Navbar from './Nav/nav';
import CityPage from './District/city';
import NewsFeed from './News/news';
import ForexPage from './Exchnage';
import WeatherPage from './Weather/weather';
import Hotels from './home/Hotels/Hotels';
import Footer from './Footer/footer';
import TravelEssential from './traveles';
import SriLankaVideos from './home/Youtbe/youtube';
import AirlinesSection from './home/Airlines/airline';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SriLankaTravelSite />} />
        
        {/* Dynamic route for cities */}
        <Route path="/city/:cityId" element={<CityPage />} />

        {/* Dynamic route for destinations */}
        <Route path="/destination/:id" element={<DestinationsPage />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/exchange-rates" element={<ForexPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/travelesenetials" element={<TravelEssential/>}/>
        <Route path="/youtube" element={<SriLankaVideos/>}/>
        <Route path="/airline" element={<AirlinesSection/>}/>

 
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
