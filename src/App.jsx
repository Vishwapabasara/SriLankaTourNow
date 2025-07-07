import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SriLankaDeals from './home/home';
import DestinationsPage from './home/Destination/Destination';
import Navbar from './home/Nav/nav';
import CityPage from './home/District/city'; // ✅ This is your dynamic component

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
      </Routes>
    </Router>
  );
}

export default App;
