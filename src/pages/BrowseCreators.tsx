import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, Heart, Instagram, Youtube, Camera } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BrowseCreators = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const mockCreators = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarahjohnson",
      avatar: "/placeholder.svg",
      niche: "Lifestyle",
      platforms: ["Instagram", "TikTok"],
      followers: "125K",
      engagement: "4.2%",
      price: "$250",
      rating: 4.9,
      verified: true,
      bio: "Lifestyle content creator specializing in home decor and wellness"
    },
    {
      id: 2,
      name: "Alex Chen",
      username: "@alexchen",
      avatar: "/placeholder.svg",
      niche: "Tech",
      platforms: ["YouTube", "Instagram"],
      followers: "89K",
      engagement: "3.8%",
      price: "$180",
      rating: 4.7,
      verified: true,
      bio: "Tech reviewer and gadget enthusiast"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      username: "@mariarod",
      avatar: "/placeholder.svg",
      niche: "Fashion",
      platforms: ["Instagram", "TikTok"],
      followers: "250K",
      engagement: "5.1%",
      price: "$400",
      rating: 4.8,
      verified: true,
      bio: "Fashion influencer and style consultant"
    },
    {
      id: 4,
      name: "David Kim",
      username: "@davidkim",
      avatar: "/placeholder.svg",
      niche: "Fitness",
      platforms: ["Instagram", "YouTube"],
      followers: "156K",
      engagement: "4.5%",
      price: "$300",
      rating: 4.6,
      verified: false,
      bio: "Personal trainer and fitness motivation"
    },
    {
      id: 5,
      name: "Emma Wilson",
      username: "@emmawilson",
      avatar: "/placeholder.svg",
      niche: "Food",
      platforms: ["Instagram", "TikTok"],
      followers: "93K",
      engagement: "6.2%",
      price: "$220",
      rating: 4.9,
      verified: true,
      bio: "Food blogger and recipe developer"
    },
    {
      id: 6,
      name: "James Brown",
      username: "@jamesbrown",
      avatar: "/placeholder.svg",
      niche: "Travel",
      platforms: ["YouTube", "Instagram"],
      followers: "310K",
      engagement: "3.9%",
      price: "$500",
      rating: 4.8,
      verified: true,
      bio: "Travel photographer and adventure seeker"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="h-4 w-4" />;
      case "YouTube":
        return <Youtube className="h-4 w-4" />;
      case "TikTok":
        return <Camera className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary mb-4">Browse Creators</h1>
            <p className="text-muted-foreground">Discover talented creators for your next campaign</p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-lg border p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search creators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedNiche} onValueChange={setSelectedNiche}>
                <SelectTrigger>
                  <SelectValue placeholder="Niche" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-200">$0 - $200</SelectItem>
                  <SelectItem value="200-400">$200 - $400</SelectItem>
                  <SelectItem value="400+">$400+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">{mockCreators.length} creators found</p>
          </div>

          {/* Creator Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockCreators.map((creator) => (
              <Card key={creator.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={creator.avatar} alt={creator.name} />
                        <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-foreground">{creator.name}</h3>
                          {creator.verified && (
                            <Badge variant="secondary" className="text-xs">Verified</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{creator.username}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-sm text-muted-foreground mb-3">{creator.bio}</p>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">{creator.niche}</Badge>
                    {creator.platforms.map((platform) => (
                      <div key={platform} className="flex items-center space-x-1">
                        {getPlatformIcon(platform)}
                        <span className="text-xs text-muted-foreground">{platform}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Followers</p>
                      <p className="font-semibold">{creator.followers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engagement</p>
                      <p className="font-semibold">{creator.engagement}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rating</p>
                      <p className="font-semibold">⭐ {creator.rating}</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{creator.price}</p>
                    <Button variant="hero" size="sm">
                      View Profile
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="mb-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseCreators;