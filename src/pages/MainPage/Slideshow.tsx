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
      <div className="max-w-[100%] flex items-center justify-center relative">
        <div className="relative w-[30vw] h-[20vw] text-center bg-[#f3f8ff] p-[20px] rounded-[15px] [box-shadow:0px_4px_8px_rgba(0,_0,_0,_0.1)] ">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto rounded-[10px]"
          />
          <p className="mt-[10px] text-[14px] text-[#333] absolute bottom-[1rem]">
            {slides[currentIndex].caption}
          </p>
        </div>
      </div>

      <div className="max-w-[100%] flex items-center justify-center relative">
        <button
          className="flex m-0 h-min cursor-pointer my-0 text-[24px] bg-none border-none text-[#1c2e4a] px-[15px] pb-0 "
          onClick={goToPrevSlide}
        >
          &lt;
        </button>

        <div className="flex align-center mt-[8px]">
          {slides.map((_, index) => (
            <span
              key={index}
              className="h-[10px] w-[10px] mx-[5px] my-0 bg-[#bbb] rounded-[50%] cursor-pointer "
              style={{
                backgroundColor: `${index === currentIndex ? "#1c2e4a" : ""}`
              }}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button
          className="flex cursor-pointer m-0 h-min text-[24px] bg-none border-none text-[#1c2e4a] px-[15px] pb-0 "
          onClick={goToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
