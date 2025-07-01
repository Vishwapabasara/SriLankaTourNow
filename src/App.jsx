import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SriLankaDeals from './home/home';
import Galle from './home/District/galle';
import DestinationsPage from './home/Destination/Destination';
import Navbar from './home/Nav/nav';
import Colombo from './home/District/colombo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SriLankaDeals />} />
        <Route path="/District/galle" element={<Galle />} />
        <Route path="/District/colombo" element={<Colombo />} />
        {/* Add more district routes as needed */}
        
        {/* Dynamic route for destinations */}
        <Route path="/destination/:id" element={<DestinationsPage />} />
        {/* You can add other districts like this */}
        {/* <Route path="/destination/colombo" element={<Colombo />} /> */}
      </Routes>
      
    </Router>
  );
}

export default App;
