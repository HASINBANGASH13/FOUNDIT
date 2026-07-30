import Hero from "../../components/hero/Hero";
import FeaturedPosts from "../../components/posts/FeaturedPosts";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Testimonials from "../../components/testimonials/Testimonials";

function Home() {
    return (
        <>
            < Hero/>
             <FeaturedPosts />
             <HowItWorks />
              <Testimonials />


        </>
    );
}

export default Home;