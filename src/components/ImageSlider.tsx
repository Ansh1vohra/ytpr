"use client";

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CustomCursor from './CustomCursor';
import './ImageSlider.css';

const sliderData = [
  {
    category: 'DoStartup',
    title: 'DoStartup',
    description: 'Crazy Good tackles college football',
    image: './dostartup.jpeg',
    link: '#',
  },
  {
    category: 'CTax',
    title: 'CTax',
    description: 'Turn 10% of your lawn into a pollinator sanctuary',
    image: './ctax.jpeg',
    link: '#',
  },
  {
    category: 'URE HR',
    title: 'URE HR',
    description: 'Turn 10% of your lawn into a pollinator sanctuary',
    image: './urehr.jpeg',
    link: '#',
  },
  {
    category: 'URE Posh',
    title: 'URE Posh',
    description: 'Turn 10% of your lawn into a pollinator sanctuary',
    image: './ureposh.jpeg',
    link: '#',
  }
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (sliderData.length - 2));
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 3 : prevIndex - 1
    );
  };

  return (
    <div 
      className="slider-container"
    >
      {!isMobile && <CustomCursor isHovered={isHovered} />}

      <div className="slider">
        {!isMobile && (
          <button 
            onClick={prevSlide} 
            className="nav-btn left-4 hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
        )}

        <div className="slides-group">
          {[index, index + 1, index + 2].map((slideIndex) => {
            const item = sliderData[slideIndex % sliderData.length];
            return (
              <div key={slideIndex} className="slide group" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="content">
                  <span className="category-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} className="link-arrow">→</a>
                </div>
              </div>
            );
          })}
        </div>

        {!isMobile && (
          <button 
            onClick={nextSlide} 
            className="nav-btn right-4 hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Mobile touch controls */}
      {isMobile && (
        <div className="mobile-controls">
          <div className="touch-area left" onClick={prevSlide} />
          <div className="touch-area right" onClick={nextSlide} />
        </div>
      )}

      {/* Dots indicator */}
      <div className="dots-container">
        {sliderData.slice(0, sliderData.length - 2).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;