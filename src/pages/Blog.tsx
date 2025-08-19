import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Influencer Marketing ROI in 2024",
    excerpt: "Learn how to measure and maximize your influencer marketing return on investment with proven strategies and metrics that actually matter.",
    content: "Full blog post content...",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      role: "Marketing Director"
    },
    publishedAt: "March 15, 2024",
    readTime: "8 min read",
    category: "Strategy",
    featured: true,
    image: "/placeholder.svg"
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Creator Collaboration Mistakes to Avoid",
      excerpt: "Common pitfalls brands make when working with creators and how to avoid them for successful campaigns.",
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg",
        role: "Creator Relations"
      },
      publishedAt: "March 12, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "How to Write the Perfect Creator Brief",
      excerpt: "A step-by-step guide to creating briefs that inspire creators and drive results for your brand.",
      author: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg",
        role: "Content Strategy"
      },
      publishedAt: "March 10, 2024",
      readTime: "6 min read",
      category: "Tutorial",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "TikTok vs Instagram: Which Platform is Right for Your Brand?",
      excerpt: "Compare the strengths and audience of each platform to make the best choice for your marketing goals.",
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg",
        role: "Platform Analyst"
      },
      publishedAt: "March 8, 2024",
      readTime: "7 min read",
      category: "Platforms",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Negotiating with Creators: A Win-Win Approach",
      excerpt: "Build lasting relationships with creators through fair and transparent negotiation practices.",
      author: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg",
        role: "Partnership Manager"
      },
      publishedAt: "March 5, 2024",
      readTime: "4 min read",
      category: "Relationships",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "The Rise of Micro-Influencers: Why Smaller is Sometimes Better",
      excerpt: "Discover why micro-influencers often deliver better engagement and ROI than mega-influencers.",
      author: {
        name: "James Brown",
        avatar: "/placeholder.svg",
        role: "Research Lead"
      },
      publishedAt: "March 3, 2024",
      readTime: "6 min read",
      category: "Trends",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Strategy", "Best Practices", "Tutorial", "Platforms", "Relationships", "Trends"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Hypenest Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Insights, tips, and strategies for successful influencer marketing campaigns
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-muted">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                      <AvatarFallback>{featuredPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{featuredPost.author.name}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.publishedAt}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="hero" asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-secondary line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback className="text-xs">{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{post.author.role}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-16">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-6">
              Get the latest insights and tips delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-white text-foreground border-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;