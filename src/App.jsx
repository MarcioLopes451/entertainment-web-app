import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';
import TVSeries from './components/TVSeries';
import Bookmarked from './components/Bookmarked';

function App() {
  
  return (
    <div>
      <Nav />
    <div>
    <Routes>
      <Route path='/entertainment-web-app' element={<Home />} />
    </Routes>
    </div>
    <Routes>
      <Route path='/entertainment-web-app/movies' element={<Movie />} />
      <Route path='/entertainment-web-app/tvseries' element={<TVSeries />} />
      <Route path='/entertainment-web-app/bookmarked' element={<Bookmarked />} />
    </Routes>
    </div>
    
    
  )
}

export default App

