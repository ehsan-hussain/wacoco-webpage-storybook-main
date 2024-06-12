import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Meet from './pages/meet';
import Services from './pages/services';

import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about-us" element={<About />} />
          <Route path = "/meet-the-team" element={<Meet/>} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
        

    </div>
  );
}

export default App;
