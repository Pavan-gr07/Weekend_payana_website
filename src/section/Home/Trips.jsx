import Carousel from "../../components/Carousel";
import TripCard from "../../components/TripCard";
import { upcomingTrips } from "../../data/static_data";
import MainContainer from "../../components/MainContainer";

const Trips = () => {
  return (
    <MainContainer children="space-y-4">
      <Carousel
        title="Upcoming"
        highlight="Destinations"
        description="Handpicked destinations that offer the perfect blend of adventure, culture, and relaxation"
        items={upcomingTrips.slice(0, 12)}
        renderItem={(trip) => <TripCard trip={trip} />}
      />
      <Carousel
        title="One Day"
        highlight="Trips"
        description="Perfect short escapes to refresh and recharge within a day"
        items={upcomingTrips.slice(0, 12)}
        renderItem={(trip) => <TripCard trip={trip} />}
      />
    </MainContainer>
  );
};

export default Trips;
