import { useEffect, useState } from "react";
import useImagePreloader from "../../Hooks/useImagePreload";

// List of images and captions to display in the slideshow
const slides = [
  {
    image: "/slideshow-pictures/slideshow_1.webp",
    caption: "Disciplines of Engineering Career Fair Fall 2024",
    object: [0, 60]
  },
  {
    image: "/slideshow-pictures/slideshow_2.webp",
    caption: "Engineers on the Green Winter 2025",
    object: [10, 66]
  },
  {
    image: "/slideshow-pictures/slideshow_3.webp",
    caption: "Engineers on the Green Winter 2025",
    object: [10, 10]
  },
  {
    image: "/slideshow-pictures/slideshow_4.webp",
    caption: "TESC Council Social Winter 2025",
    object: [10, 80]
  },
  {
    image: "/slideshow-pictures/slideshow_5.webp",
    caption: "TESC Council Social Winter 2025",
    object: [10, 60]
  },
  {
    image: "/slideshow-pictures/slideshow_6.webp",
    caption: "Disciplines of Engineering Career Fair Winter 2025",
    object: [10, 70]
  },
  {
    image: "/slideshow-pictures/slideshow_7.webp",
    caption: "Disciplines of Engineering Career Fair Winter 2025",
    object: [10, 10]
  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstSlidePreloader = useImagePreloader([slides[0].image]);
  const remainingSlidePreloader = useImagePreloader(slides.slice(1).map((slide) => slide.image));
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
    if (!remainingSlidePreloader.imagesPreloaded) return;
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
        <div className="absolute w-full h-full">
          {firstSlidePreloader.imagesPreloaded && (
            <img
              srcSet={slides[0].image}
              alt=""
              className="w-full h-full object-cover animate-[slide-animate-in_1s]"
              style={{ objectPosition: `${slides[0].object[0]}% ${slides[0].object[1]}%` }}
            />
          )}
          <img
            srcSet="/slideshow-pictures/slideshow_1_small.webp"
            alt=""
            className="-z-1 absolute top-0 left-0 w-full h-full object-cover object-[25%_35%] animate-[soft-pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]"
          />
        </div>

        {remainingSlidePreloader.imagesPreloaded &&
          slides.slice(1).map((slide, index) => {
            return (
              <div
                className="absolute w-full h-full"
                style={{
                  left: `${(index + 1) * 100}vw`
                }}
                key={index}
              >
                <img
                  srcSet={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ objectPosition: `${slide.object[0]}% ${slide.object[1]}%` }}
                />
              </div>
            );
          })}
      </div>

      {remainingSlidePreloader.imagesPreloaded && (
        <div className="w-[100%] flex items-center justify-center mt-[2vw] absolute bottom-0 animate-[animate-in_1s]">
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
      )}
    </div>
  );
};

export default Slideshow;
