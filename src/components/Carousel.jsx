// src/components/Carousel.jsx
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ title, highlight, description, items, renderItem }) => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (

    <div className="mb-7">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {title}{" "}
          {highlight && <span className="text-yellow-500">{highlight}</span>}
        </h2>
        {description && (
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-x">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.333%] p-3"
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="hidden md:flex items-center cursor-pointer justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next"
          className="hidden md:flex items-center cursor-pointer justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${i === selectedIndex ? "w-6 bg-yellow-500" : "w-2 bg-gray-300"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


