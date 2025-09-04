// src/sections/UpcomingTrip.jsx (adjust path as you use)
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TripCard from "../../components/TripCard";
import { upcomingTrips } from "../../data/static_data";

const UpcomingTrip = () => {
  // Autoplay plugin (kept in a ref so it’s stable across renders)
  const autoplay = useRef(
    Autoplay({
      delay: 3000,             // auto-advance every 3s
      stopOnInteraction: false,
      stopOnMouseEnter: true,  // pauses when hovered on desktop
    })
  );

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      // You can tweak more options here if needed
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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Upcoming <span className="text-yellow-500">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations that offer the perfect blend of adventure,
            culture, and relaxation
          </p>
        </div>

        <div className="relative">
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Container */}
            <div className="flex touch-pan-x">
              {upcomingTrips.slice(0, 12).map((trip) => (
                <div
                  key={trip.id}
                  // 1 slide on mobile, 2 on md, 3 on xl
                  className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.333%] px-3"
                >
                  <TripCard trip={trip} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows (hidden on small screens to avoid overlap) */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? "w-6 bg-yellow-500" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrip;
