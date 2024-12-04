import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Movie from './Components/Movie';
import About from './Components/About';
import Nav from './Components/Nav';

function App() {
  return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  
  );
}
export default App;
