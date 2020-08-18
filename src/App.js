import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return {
    width: innerWidth,
    height: innerHeight
  };
}
function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [])

  return (
    <div id="main">
      <Header {...windowSize} />
      <Home />
      <Work />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
