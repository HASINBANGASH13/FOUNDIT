import Hero from "../../components/hero/Hero";
import HeroStats from "../../components/hero/HeroStats";
import FeaturedCategories from "../../components/categories/FeaturedCategories";
import FeaturedPosts from "../../components/posts/FeaturedPosts";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import WhyChoose from "../../components/whyChoose/WhyChoose";
import Testimonials from "../../components/testimonials/Testimonials";
import Statistics from "../../components/stats/Statistics";
import CTA from "../../components/cta/CTA";
function Home() {
    return (
        <>
            < Hero/>
             <HeroStats />
             <FeaturedCategories />
             <FeaturedPosts />
             <HowItWorks />
             <WhyChoose />
              <Testimonials />
                <Statistics />
                <CTA />


        </>
    );
}

export default Home;