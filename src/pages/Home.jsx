import { useEffect, useState } from "react";
import ToTop from "../components/ToTop";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Banner from "../section/Home/Banner";
import CTASection from "../section/Home/CTASection";
import Trips from "../section/Home/Trips";
import WhyYouChoose from "../section/Home/WhyYouChoose";
import Testimonials from "../section/Home/Testimonials";
import FAQ from "../section/Home/FAQ";
import Gallery from "../section/Home/Gallery";
import Contact from "../section/Home/Contact";

const Home = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <Banner />
      <Trips />
      <WhyYouChoose />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <CTASection />
      <ToTop toTop={toTop} setToTop={setToTop} />
    </div>
  );
};

export default Home;
