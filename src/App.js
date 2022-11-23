import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Screens/Home';
import Scrape from './Screens/Scrape';
import About from './Screens/About';
function App() {
  return (
    <div className="Home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrape" element={<Scrape />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <Home/> */}
      <Footer />
      </div>
  );
}

export default App;
