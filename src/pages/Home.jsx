import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Banner from "../section/Home/Banner";
import CTASection from "../section/Home/CTASection";
import UpcomingTrip from "../section/Home/UpcomingTrip";
import WhyYouChoose from "../section/Home/WhyYouChoose";

const Home = () => {
  return (
    <div>
      <Banner />
      <UpcomingTrip />
      <WhyYouChoose />
      <CTASection />
    </div>
  );
};

export default Home;
