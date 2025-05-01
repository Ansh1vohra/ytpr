import React, { useState } from 'react';
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

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (sliderData.length - 2));
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button onClick={prevSlide} className="nav-btn">←</button>
        <div className="slides-group">
          {[index, index + 1, index + 2].map((slideIndex) => {
            const item = sliderData[slideIndex % sliderData.length];
            return (
              <div key={slideIndex} className="slide">
                <img src={item.image} alt={item.title} />
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link}>→</a>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={nextSlide} className="nav-btn">→</button>
      </div>
    </div>
  );
};

export default ImageSlider;