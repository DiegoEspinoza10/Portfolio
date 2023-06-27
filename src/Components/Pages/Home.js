import React from 'react';
import '../../App.css';
import '../Skills.css';
import '../AboutMe.css';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import AboutMe from '../AboutMe'; 
import Footer from '../Footer';
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
      <Footer />
    </>
  );
}

export default Home;
