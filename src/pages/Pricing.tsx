import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with creator collaborations",
      popular: false,
      features: [
        { name: "5 campaign posts per month", included: true },
        { name: "Basic creator search", included: true },
        { name: "10 direct messages per month", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Unlimited creator applications", included: false },
        { name: "Advanced filters & search", included: false },
        { name: "Priority support", included: false },
        { name: "Campaign management tools", included: false },
        { name: "Team collaboration", included: false },
        { name: "Custom contracts", included: false },
        { name: "API access", included: false }
      ],
      cta: "Get Started Free",
      variant: "outline" as const
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "Everything you need to scale your influencer marketing",
      popular: true,
      features: [
        { name: "Unlimited campaign posts", included: true },
        { name: "Advanced creator search & filters", included: true },
        { name: "Unlimited direct messages", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Unlimited creator applications", included: true },
        { name: "Campaign management tools", included: true },
        { name: "Team collaboration (up to 5 users)", included: true },
        { name: "Custom contracts & templates", included: true },
        { name: "API access", included: true },
        { name: "White-label options", included: false },
        { name: "Dedicated account manager", included: false }
      ],
      cta: "Start Pro Trial",
      variant: "hero" as const
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate your billing accordingly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also support PayPal for your convenience."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No contracts required! You can cancel your subscription at any time. Your plan will remain active until the end of your current billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund within 14 days of your purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-secondary mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="pb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button variant={plan.variant} className="w-full" size="lg">
                    {plan.popular && <Zap className="mr-2 h-4 w-4" />}
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground">
              Here are some of the most common questions about our pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of brands and creators already using Hypenest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;