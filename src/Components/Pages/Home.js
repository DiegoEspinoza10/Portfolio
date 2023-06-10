import React from 'react';
import '../../App.css';
import '../Skills.css';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Skills />
    </>
  );
}

export default Home;
