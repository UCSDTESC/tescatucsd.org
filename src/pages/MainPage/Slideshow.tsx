// Slideshow.jsx
import { useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  // List of images and captions to display in the slideshow
  const slides = [
    {
      image: "/HomePage/Slideshow/slide1.jpg",
      caption:
        "Mini information about image and other things related and correlating to the image"
    },
    {
      image: "/HomePage/Slideshow/slide2.jpg",
      caption: "Another slide with some description here."
    },
    {
      image: "/HomePage/Slideshow/slide3.jpg",
      caption: "More details about another event or council meeting."
    }
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
