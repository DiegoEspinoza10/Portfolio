import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import MeImage from '../Img/Me.png';

const words = ['Hola, soy', "Hello, I am", 'Oi, eu sou', 'Ciao, sono','Slt, je suis'];

const WordCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[currentIndex]);
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsVisible(true);
        }, 500);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      setCurrentWord(words[currentIndex]);
    }, [currentIndex]);
  
    return (
      <h3 className={`WordCarousel ${isVisible ? 'visible' : 'hidden'}`}>
        {currentWord}
      </h3>
    );
};

function HeroSection() {
  return (
    <div className="hero-container">
      <WordCarousel />
      <h1>Diego Espinoza</h1>
      <img src={MeImage} alt="Diego Espinoza" className="profile-image" />
    </div>
  );
}

export default HeroSection;

