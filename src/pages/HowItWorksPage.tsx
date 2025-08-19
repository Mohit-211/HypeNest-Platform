import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <PlusCircle className="h-12 w-12 text-primary" />,
      title: "Post a Campaign",
      description: "Create your campaign brief with goals, deliverables, budget, and target audience. Our platform guides you through every step.",
      details: [
        "Define your campaign objectives",
        "Set deliverables and timeline",
        "Choose your target creator criteria",
        "Set budget and payment terms"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Connect with Creators",
      description: "Browse our vetted creator marketplace or let creators apply to your campaign. Review proposals and select the best fit.",
      details: [
        "Browse creator profiles and portfolios",
        "Receive applications from interested creators",
        "Review proposals and negotiate terms",
        "Select creators and finalize agreements"
      ]
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Launch Content",
      description: "Collaborate with creators through our platform. Track progress, approve content, and launch your campaign to the world.",
      details: [
        "Collaborate through built-in messaging",
        "Review and approve content deliverables",
        "Track campaign progress and milestones",
        "Launch and measure campaign performance"
      ]
    }
  ];

  const benefits = [
    "Vetted creator network",
    "Secure payment protection",
    "Built-in collaboration tools",
    "Campaign performance tracking",
    "Dedicated support team",
    "Rights and usage management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            How Hypenest Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Launch successful influencer campaigns in three simple steps. 
            From campaign creation to content launch, we make it seamless.
          </p>
          <Button variant="hero" size="lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Steps Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-2">
                        {index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-secondary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Why Choose Hypenest?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We provide everything you need for successful influencer campaigns
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center bg-background rounded-lg p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Join as Brand
              </Button>
              <Button variant="outline" size="lg">
                Join as Creator
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Launch Your First Campaign?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of brands already using Hypenest to grow their business
            </p>
            <Button variant="secondary" size="lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;