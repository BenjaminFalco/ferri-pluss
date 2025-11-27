import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BoschPromo from "@/components/BoschPromo";
import Categories from "@/components/Categories";
import WeeklyOffers from "@/components/WeeklyOffers";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <BoschPromo />
      <Categories />
      <WeeklyOffers />
      <Services />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
