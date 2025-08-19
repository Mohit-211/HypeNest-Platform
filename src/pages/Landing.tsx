import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedCreators from "@/components/sections/FeaturedCreators";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCreators />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;