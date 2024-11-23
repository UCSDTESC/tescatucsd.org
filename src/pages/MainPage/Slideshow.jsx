// Slideshow.jsx
import React, { useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  // List of images and captions to display in the slideshow
  const slides = [
    {
      image: "/images/slide1.jpg",
      caption:
        "Mini information about image and other things related and correlating to the image",
    },
    {
      image: "/images/slide2.jpg",
      caption: "Another slide with some description here.",
    },
    {
      image: "/images/slide3.jpg",
      caption: "More details about another event or council meeting.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="slide">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
          />
          <p className="caption">{slides[currentIndex].caption}</p>
        </div>
      </div>

      <div className="slideshow-container">
        <button className="arrow left-arrow" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="arrow right-arrow" onClick={goToNextSlide}>
          &gt;
        </button>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
