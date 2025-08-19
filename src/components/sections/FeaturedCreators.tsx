import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Instagram, Users, Heart, MessageCircle } from "lucide-react";

const creators = [
  {
    id: 1,
    name: "Sarah Chen",
    handle: "@sarahstyle",
    niche: "Fashion & Lifestyle",
    location: "Los Angeles, CA",
    followers: "125K",
    engagement: "8.2%",
    rating: 4.9,
    reviews: 47,
    price: "$500",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&h=100&fit=crop&crop=face",
    verified: true,
    platforms: ["Instagram", "TikTok"],
    recentWork: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&h=150&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    handle: "@techmarkus",
    niche: "Tech & Gadgets",
    location: "Austin, TX",
    followers: "89K",
    engagement: "12.1%",
    rating: 5.0,
    reviews: 32,
    price: "$750",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    verified: true,
    platforms: ["YouTube", "Instagram"],
    recentWork: [
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Emma Thompson",
    handle: "@emmasfood",
    niche: "Food & Wellness",
    location: "Portland, OR",
    followers: "203K",
    engagement: "6.8%",
    rating: 4.8,
    reviews: 68,
    price: "$650",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    verified: true,
    platforms: ["Instagram", "TikTok", "YouTube"],
    recentWork: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=150&h=150&fit=crop"
    ]
  }
];

const FeaturedCreators = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Featured Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover top-performing creators across all niches. Vetted, verified, and ready to elevate your brand.
          </p>
        </div>

        {/* Creator Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {creators.map((creator) => (
            <div key={creator.id} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth group">
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {creator.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-primary-foreground fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-card-foreground truncate">
                      {creator.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {creator.handle}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {creator.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {creator.niche}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-primary fill-current" />
                      <span className="text-sm font-medium">{creator.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({creator.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-card-foreground">
                        {creator.followers}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">Followers</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-card-foreground">
                        {creator.engagement}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">Engagement</span>
                  </div>
                </div>
              </div>

              {/* Recent Work */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-medium text-card-foreground mb-3">
                  Recent Work
                </h4>
                <div className="flex gap-2">
                  {creator.recentWork.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Work ${index + 1}`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <div className="font-bold text-xl text-primary">
                      {creator.price}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="default" size="sm" className="group-hover:shadow-medium">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Browse All Creators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;