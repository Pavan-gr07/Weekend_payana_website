import Carousel from "../../components/Carousel";
import TripCard from "../../components/TripCard";
import { upcomingTrips } from "../../data/static_data";
import MainContainer from "../../components/MainContainer";

const Trips = () => {
  return (
    // FIXED: Passed "space-y-12" as className, not children.
    // Increased spacing to space-y-12 for better visual separation between sections
    <MainContainer className="space-y-12">
      <section id="upcoming">
        <Carousel
          title="Upcoming"
          highlight="Destinations"
          description="Handpicked destinations that offer the perfect blend of adventure, culture, and relaxation"
          items={upcomingTrips.slice(0, 12)}
          renderItem={(trip) => <TripCard trip={trip} />}
        />
      </section>

      <section id="oneday">
        <Carousel
          title="One Day"
          highlight="Trips"
          description="Perfect short escapes to refresh and recharge within a day"
          items={upcomingTrips.slice(0, 12)}
          renderItem={(trip) => <TripCard trip={trip} />}
        />
      </section>

    </MainContainer>
  );
};

export default Trips;