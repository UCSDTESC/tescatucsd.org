// Slideshow.jsx
import { useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  // List of images and captions to display in the slideshow
  const slides = [
    {
      image: "/slideshow-pictures/decaf-fa24/IMG_3802.png",
      caption:
        "Disciplines of Engineering Career Fair Fall 2024"
    },
    {
      image: "/slideshow-pictures/eotg-wi25/IMG_4351.JPEG",
      caption: "Engineers on the Green Winter 2025"
    },
    {
      image: "/slideshow-pictures/eotg-wi25/IMG_4354.JPEG",
      caption: "Engineers on the Green Winter 2025"
    },
    {
      image: "/slideshow-pictures/council-dirty-birds-social/20250117_184343.jpg",
      caption: "TESC Council Social Winter 2025"
    },
    {
      image: "/slideshow-pictures/council-dirty-birds-social/20250117_184426.jpg",
      caption: "TESC Council Social Winter 2025"
    },
    {
      image: "/slideshow-pictures/decaf-wi25/IMG_4427.JPEG",
      caption: "Disciplines of Engineering Career Fair Winter 2025"
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
    <div className="mt-5">
      <div className="slideshow-container d-flex align-content-center justify-content-center position-relative">
        <div className="slide">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
          />
          <p className="caption">{slides[currentIndex].caption}</p>
        </div>
      </div>

      <div className="slideshow-container d-flex align-content-center justify-content-center position-relative">
        <button className="arrow left-arrow" onClick={goToPrevSlide}>
          &lt;
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
        <button className="arrow right-arrow" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
