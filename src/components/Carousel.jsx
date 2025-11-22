import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ title, highlight, description, items, renderItem }) => {
  // Autoplay configuration
  const autoplay = useRef(
    Autoplay({
      delay: 4000, // Increased slightly for better readability
      stopOnInteraction: true, // Changed to true so user can swipe without it fighting back
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { align: 'start' }
      }
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
    <div className="mb-7 relative group">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">
          {title}{" "}
          {highlight && <span className="text-yellow-500">{highlight}</span>}
        </h2>
        {description && (
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Carousel Wrapper */}
      <div className="relative px-4 md:px-8">
        {/* Viewport */}
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {items.map((item, index) => (
              <div
                key={index}
                // RESPONSIVE FIX:
                // flex-[0_0_85%] on mobile allows the next card to "peek" through,
                // encouraging users to swipe.
                className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
              >
                <div className="h-full py-2">
                  {renderItem(item)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-yellow-400 shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1/2 border border-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-yellow-400 shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-1/2 border border-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${i === selectedIndex
                ? "w-8 h-2 bg-yellow-500"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;