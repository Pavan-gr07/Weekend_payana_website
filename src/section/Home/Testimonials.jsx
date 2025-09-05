import TestimonialCard from "../../components/cards/TestimonialCard";
import Carousel from "../../components/Carousel";
import MainContainer from "../../components/MainContainer";
import { testimonials } from "../../data/static_data";


const Testimonials = () => {
    return (

        <MainContainer>
            <Carousel
                title=""
                highlight="Testimonials"
                description="Hear what our travelers say about their unforgettable journeys"
                items={testimonials}
                renderItem={(data) => <TestimonialCard data={data} />}
            />
        </MainContainer>

    );
};

export default Testimonials;
