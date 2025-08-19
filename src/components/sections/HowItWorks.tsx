import { ArrowRight, Search, MessageSquare, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Match",
    description: "Browse vetted creators or post your campaign brief. Our smart matching connects you with creators that align with your brand values and target audience.",
    color: "bg-gradient-primary"
  },
  {
    icon: MessageSquare,
    title: "Collaborate Seamlessly",
    description: "Communicate directly with creators, negotiate terms, and manage your campaign through our intuitive platform. Real-time messaging keeps everyone aligned.",
    color: "bg-gradient-secondary"
  },
  {
    icon: Zap,
    title: "Launch & Scale",
    description: "Approve content, track performance, and scale successful campaigns. Built-in analytics help you measure ROI and optimize future collaborations.",
    color: "bg-gradient-primary"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How Hypenest Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch your next campaign in 3 simple steps. From discovery to delivery, 
            we make creator partnerships effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0 transform translate-x-8"></div>
              )}
              
              {/* Card */}
              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth group">
                {/* Step number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-6 flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-light rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of brands and creators already growing with Hypenest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-hero text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-medium transition-smooth">
                Start Your Campaign
              </button>
              <button className="bg-background text-primary border border-primary/20 px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;