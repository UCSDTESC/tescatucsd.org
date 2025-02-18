// Slideshow.jsx
import { useEffect, useState } from "react";
import { animate, motion } from "motion/react";
import { left } from "@popperjs/core";
// import "./Slideshow.css";

const Slideshow = () => {
  // List of images and captions to display in the slideshow
  const slides = [
    {
      image: "/slideshow-pictures/decaf-fa24/IMG_3802.jpg",
      caption: "Disciplines of Engineering Career Fair Fall 2024"
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
      image:
        "/slideshow-pictures/council-dirty-birds-social/20250117_184343.jpg",
      caption: "TESC Council Social Winter 2025"
    },
    {
      image:
        "/slideshow-pictures/council-dirty-birds-social/20250117_184426.jpg",
      caption: "TESC Council Social Winter 2025"
    },
    {
      image: "/slideshow-pictures/decaf-wi25/IMG_4427.JPEG",
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
    // <div className="my-[5vw]">
    //   <div className="w-[100%] flex items-center justify-center relative">
    //     <div className="relative w-[50vw] h-[30vw] text-center bg-[#f3f8ff] p-[20px] rounded-standard [box-shadow:0px_4px_8px_rgba(0,_0,_0,_0.1)] ">
    //       <img
    //         src={slides[currentIndex].image}
    //         alt={`Slide ${currentIndex + 1}`}
    //         className="w-[90%] h-[80%] object-cover rounded-standard mx-auto "
    //       />
    //       <p className="mt-[10px] text-darkGray absolute bottom-[10%] text-[1vw] w-full text-center">
    //         {slides[currentIndex].caption}
    //       </p>
    //     </div>
    //   </div>

    //   <div className="max-w-[100%] flex items-center justify-center relative mt-[2vw]">
    //     <button
    //       className="flex m-0 h-min cursor-pointer my-0 text-[24px] bg-none border-none text-navy px-[15px] pb-0 "
    //       onClick={goToPrevSlide}
    //     >
    //       &lt;
    //     </button>

    //     <div className="flex align-center mt-[8px]">
    //       {slides.map((_, index) => (
    //         <span
    //           key={index}
    //           className="h-[10px] w-[10px] mx-[5px] my-0 bg-gray rounded-standard  cursor-pointer "
    //           style={{
    //             backgroundColor: `${
    //               index === currentIndex ? "var(--color-navy)" : ""
    //             }`
    //           }}
    //           onClick={() => setCurrentIndex(index)}
    //         ></span>
    //       ))}
    //     </div>
    //     <button
    //       className="flex cursor-pointer m-0 h-min text-[24px] bg-none border-none text-navy px-[15px] pb-0 "
    //       onClick={goToNextSlide}
    //     >
    //       &gt;
    //     </button>
    //   </div>
    // </div>
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
            >
              <img
                src={slide.image}
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
                backgroundColor: `${
                  index === currentIndex ? "var(--color-navy)" : ""
                }`,
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
