import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-gradient-light px-4 py-2 rounded-full border border-primary/20">
                <span className="text-primary font-medium text-sm">🚀 Launch campaigns 10x faster</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Book creators.{" "}
              <span className="text-primary">Launch campaigns.</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Grow faster.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Hypenest connects brands with vetted creators for UGC and paid collaborations. 
              Find the perfect match for your campaign in minutes, not weeks.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Verified creators</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span>5-star reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>10k+ campaigns</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Join as Brand
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="creator" size="lg">
                Join as Creator
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Browse Creators
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Creators collaborating with brands"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-background rounded-xl p-4 shadow-medium animate-glow-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-secondary">Campaign Success</p>
                    <p className="text-xs text-muted-foreground">+127% engagement</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background rounded-xl p-4 shadow-medium">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-secondary">Active Creators</p>
                    <p className="text-xs text-muted-foreground">2,847 online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;