// Slideshow.jsx
import { useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  // List of images and captions to display in the slideshow
  const slides = [
    {
      image: "/slideshow-pictures/decaf-fa24/IMG_3802.jpg",
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
    <div className="my-[5vw]">
      <div className="max-w-[100%] flex items-center justify-center relative">
        <div className="relative w-[30vw] h-[20vw] text-center bg-[#f3f8ff] p-[20px] rounded-standard [box-shadow:0px_4px_8px_rgba(0,_0,_0,_0.1)] ">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-[90%] h-auto rounded-standard mx-auto "
          />
          <p className="mt-[10px] text-[14px] text-darkGray absolute bottom-[1rem]">
            {slides[currentIndex].caption}
          </p>
        </div>
      </div>

      <div className="max-w-[100%] flex items-center justify-center relative mt-[2vw]">
        <button
          className="flex m-0 h-min cursor-pointer my-0 text-[24px] bg-none border-none text-navy px-[15px] pb-0 "
          onClick={goToPrevSlide}
        >
          &lt;
        </button>

        <div className="flex align-center mt-[8px]">
          {slides.map((_, index) => (
            <span
              key={index}
              className="h-[10px] w-[10px] mx-[5px] my-0 bg-gray rounded-standard  cursor-pointer "
              style={{
                backgroundColor: `${
                  index === currentIndex ? "var(--color-navy)" : ""
                }`
              }}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button
          className="flex cursor-pointer m-0 h-min text-[24px] bg-none border-none text-navy px-[15px] pb-0 "
          onClick={goToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
