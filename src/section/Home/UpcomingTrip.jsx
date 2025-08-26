import TripCard from "../../components/TripCard";
import { upcomingTrips } from "../../data/static_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 text-black text-4xl cursor-pointer"
    onClick={onClick}
  >
    ▶
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 text-black text-4xl cursor-pointer"
    onClick={onClick}
  >
    ◀
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // default (desktop)
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // tablet & small laptop
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const UpcomingTrip = () => {
  return (
    <div>
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
              {upcomingTrips.slice(0, 4).map((trip) => (
                <div key={trip.id} className="p-3">
                  <TripCard trip={trip} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingTrip;
