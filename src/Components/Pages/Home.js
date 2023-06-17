import React from 'react';
import '../../App.css';
import '../Skills.css';
import '../AboutMe.css';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import AboutMe from '../AboutMe'; 
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
    </>
  );
}

export default Home;
