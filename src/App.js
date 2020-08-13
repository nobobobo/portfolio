import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div id="main">
      <Header />
      <Home />
      <Work />
      <Profile />
      <Contact />
    </div>
  );
}

export default App;
