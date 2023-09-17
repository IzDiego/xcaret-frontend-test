import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CarouselCard from "./CarouselCard";

interface CarouselProps {
  title: string;
  direction: "left" | "right";
  carouselItems: string[];
  text: string;
  buttonBook: string;
  autoSlide: boolean;
  autoSlideInterval?: number;
  imagePromo:string
}

const CarouselWithText: React.FC<CarouselProps> = ({
  title,
  direction,
  carouselItems,
  text,
  autoSlide = false,
  buttonBook,
  autoSlideInterval = 3000,
  imagePromo
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1,
    );
  const goNext = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1,
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(goNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex flex-row items-center space-x-4">
      {direction === "left" && (
        <div className={`relative flex-1 p-4`}>
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((slide, index) => (
                <div key={index} className="w-full flex-none">
                  <Image
                    src={slide}
                    alt={`Carousel item ${index + 1}`}
                    width={380}
                    height={480}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-10 transform rounded-full bg-black bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105"
            >
              <FaArrowLeft className="text-xl text-white" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 z-10 transform rounded-full bg-black bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105"
            >
              <FaArrowRight className="text-xl text-white" />
            </button>
          </div>
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {carouselItems.map((_, index) => (
                <div
                  key={index}
                  className={`mb-4 h-3 w-3 rounded-full bg-white transition-all
                            ${
                              currentIndex === index ? "p-2" : "bg-opacity-50"
                            }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 p-6">
        <CarouselCard
          imageSrc={imagePromo}
          title={title}
          description={text}
          action={[buttonBook]}
          justify={direction === "left" ? "start" : "end"}
        />
      </div>
      {direction === "right" && (
        <div className={`relative flex-1 p-4`}>
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((slide, index) => (
                <div key={index} className="w-full flex-none">
                  <Image
                    src={slide}
                    alt={`Carousel item ${index + 1}`}
                    width={380}
                    height={480}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-10 transform rounded-full bg-black bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105"
            >
              <FaArrowLeft className="text-xl text-white" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 z-10 transform rounded-full bg-black bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105"
            >
              <FaArrowRight className="text-xl text-white" />
            </button>
          </div>
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {carouselItems.map((_, index) => (
                <div
                  key={index}
                  className={`mb-4 h-3 w-3 rounded-full bg-white transition-all
                          ${currentIndex === index ? "p-2" : "bg-opacity-50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselWithText;
