// Slideshow.jsx
import { useEffect, useState } from "react";
// import "./Slideshow.css";

const Slideshow = () => {
  // List of images and captions to display in the slideshow
  const slides = [
    {
      image: "/slideshow-pictures/decaf-fa24/IMG_3802.webp",
      caption: "Disciplines of Engineering Career Fair Fall 2024"
    },
    {
      image: "/slideshow-pictures/eotg-wi25/IMG_4351.webp",
      caption: "Engineers on the Green Winter 2025"
    },
    {
      image: "/slideshow-pictures/eotg-wi25/IMG_4354.webp",
      caption: "Engineers on the Green Winter 2025"
    },
    {
      image: "/slideshow-pictures/council-dirty-birds-social/20250117_184343.webp",
      caption: "TESC Council Social Winter 2025"
    },
    {
      image: "/slideshow-pictures/council-dirty-birds-social/20250117_184426.webp",
      caption: "TESC Council Social Winter 2025"
    },
    {
      image: "/slideshow-pictures/decaf-wi25/IMG_4427_25.webp",
      caption: "Disciplines of Engineering Career Fair Winter 2025"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };
  const dotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div className="max-w-screen  h-[80vh] relative overflow-x-hidden m-0">
      <div
        className="w-screen h-full relative duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {slides.map((slide, index) => {
          return (
            <div
              className="absolute w-full h-full"
              style={{
                left: `${index * 100}vw`
              }}
              key={index}
            >
              <img
                srcSet={slide.image}
                alt=""
                className="w-full h-full object-cover  object-[25%_35%]"
              />
              {/* <p className="text-black text-[5vh] absolute top-0 left-0 w-full bg-[#f3f8ff]">
                {slide.caption}
              </p> */}
            </div>
          );
        })}
      </div>

      <div className="w-[100%] flex items-center justify-center mt-[2vw] absolute bottom-0">
        <button
          className="flex m-0 h-min cursor-pointer my-0 text-[8vh] bg-none border-none text-white px-[15px] pb-0 "
          onClick={goToPrevSlide}
        >
          &lt;
        </button>

        <div className="flex align-center mt-[8px]">
          {slides.map((_, index) => (
            <span
              key={index}
              className="h-[2vh] mx-[5px] my-0 bg-white rounded-standard  cursor-pointer duration-500"
              style={{
                backgroundColor: `${index === currentIndex ? "var(--color-navy)" : ""}`,
                width: `${index === currentIndex ? "4vh" : "2vh"}`
              }}
              onClick={() => dotClick(index)}
            ></span>
          ))}
        </div>
        <button
          className="flex cursor-pointer m-0 h-min text-[8vh] bg-none border-none text-white px-[15px] pb-0 "
          onClick={goToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
