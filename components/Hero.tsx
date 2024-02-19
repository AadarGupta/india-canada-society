import React, { useState, useEffect } from "react";
import { SLIDES } from "@/constants";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === SLIDES.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section
      style={{ height: "calc(100vh - 100px)" }}
      className="flex flex-col gap-20 h-[100%] md:gap-28 xl:flex-row"
    >
      <div className="relative w-full h-[100%]">
        {SLIDES.map((image, index) => (
          <div
            key={image.key}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.image}
              alt={image.key}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
