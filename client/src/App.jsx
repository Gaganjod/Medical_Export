/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FirstAid from './components/FirstAid';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hospitals from './components/Hospitals';
import Login from './components/Login';
import Register from './components/Register';
import Emergency from './components/Emergency';
import CompleteFirstAidGuide from './components/CompleteFirstAidGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <FirstAid />
              <Hospitals />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/first-aid-guide" element={<CompleteFirstAidGuide />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
