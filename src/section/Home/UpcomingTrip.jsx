import TripCard from "../../components/TripCard";
import { upcomingTrips } from "../../data/static_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // cleaner icons

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition-colors duration-300"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition-colors duration-300"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-gray-800" />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  // arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: true,
  centerPadding: "40px",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,   // ❌ disable centerMode on mobile
        centerPadding: "0px",
      },
    },
  ],
};


const UpcomingTrip = () => {
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
          <Slider {...settings}>
            {upcomingTrips.slice(0, 6).map((trip) => (
              <div key={trip.id} className="px-3 min-w-[250px]">
                <TripCard trip={trip} />
              </div>

            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrip;
