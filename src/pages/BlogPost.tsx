import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would fetch based on ID
  const post = {
    id: 1,
    title: "The Ultimate Guide to Influencer Marketing ROI in 2024",
    content: `
      <p>Influencer marketing has evolved significantly over the past few years, and measuring return on investment (ROI) has become more crucial than ever. In this comprehensive guide, we'll walk you through everything you need to know about calculating, tracking, and maximizing your influencer marketing ROI.</p>

      <h2>Understanding Influencer Marketing ROI</h2>
      <p>ROI in influencer marketing isn't just about immediate sales. It encompasses brand awareness, engagement, reach, and long-term customer value. Here's how to approach it strategically:</p>

      <h3>Key Metrics to Track</h3>
      <ul>
        <li><strong>Engagement Rate:</strong> Comments, likes, shares, and saves relative to follower count</li>
        <li><strong>Reach and Impressions:</strong> How many unique users saw your content</li>
        <li><strong>Click-through Rate (CTR):</strong> Traffic driven to your website or landing pages</li>
        <li><strong>Conversion Rate:</strong> Percentage of visitors who completed desired actions</li>
        <li><strong>Cost Per Acquisition (CPA):</strong> Total campaign cost divided by new customers acquired</li>
      </ul>

      <h2>Setting Up Proper Tracking</h2>
      <p>Before launching any influencer campaign, establish proper tracking mechanisms:</p>

      <h3>UTM Parameters</h3>
      <p>Use unique UTM parameters for each influencer to track traffic sources accurately. This allows you to see which creators are driving the most valuable traffic to your site.</p>

      <h3>Promo Codes</h3>
      <p>Assign unique discount codes to each influencer. This provides direct attribution and helps measure immediate sales impact.</p>

      <h3>Affiliate Links</h3>
      <p>Consider using affiliate tracking links that automatically attribute sales to specific influencers.</p>

      <h2>Calculating ROI: The Formula</h2>
      <p>The basic ROI formula is: <strong>(Revenue Generated - Campaign Cost) / Campaign Cost × 100</strong></p>

      <p>However, for influencer marketing, consider these additional factors:</p>
      <ul>
        <li>Content creation costs</li>
        <li>Platform fees</li>
        <li>Internal team time</li>
        <li>Tools and software costs</li>
      </ul>

      <h2>Beyond Immediate Sales</h2>
      <p>Don't limit your ROI calculations to immediate conversions. Consider:</p>

      <h3>Brand Awareness Value</h3>
      <p>Calculate the cost of equivalent reach through traditional advertising channels. Influencer content often provides better engagement rates than traditional ads.</p>

      <h3>User-Generated Content (UGC)</h3>
      <p>Factor in the value of content you can repurpose across your marketing channels. Quality UGC can be worth thousands in production costs.</p>

      <h3>Long-term Customer Value</h3>
      <p>Track customers acquired through influencer campaigns over 6-12 months to understand their lifetime value.</p>

      <h2>Optimization Strategies</h2>
      <p>To improve your influencer marketing ROI:</p>

      <ol>
        <li><strong>Choose the Right Influencers:</strong> Prioritize engagement rate and audience alignment over follower count</li>
        <li><strong>Negotiate Performance-Based Deals:</strong> Include bonuses for hitting specific KPIs</li>
        <li><strong>Repurpose Content:</strong> Use influencer content across multiple channels</li>
        <li><strong>Build Long-term Relationships:</strong> Ongoing partnerships often deliver better ROI than one-off campaigns</li>
        <li><strong>Test and Iterate:</strong> Continuously test different content formats, posting times, and call-to-actions</li>
      </ol>

      <h2>Common ROI Mistakes to Avoid</h2>
      <ul>
        <li>Focusing only on immediate sales</li>
        <li>Not tracking the right metrics</li>
        <li>Ignoring brand awareness value</li>
        <li>Not accounting for all campaign costs</li>
        <li>Comparing influencer ROI directly to other channels without context</li>
      </ul>

      <h2>Tools for Measuring ROI</h2>
      <p>Consider using these tools to streamline your ROI tracking:</p>
      <ul>
        <li>Google Analytics for website traffic and conversions</li>
        <li>Platform native analytics (Instagram Insights, TikTok Analytics)</li>
        <li>Influencer marketing platforms with built-in tracking</li>
        <li>Customer survey tools to measure brand lift</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Measuring influencer marketing ROI requires a holistic approach that goes beyond immediate sales. By tracking the right metrics, setting up proper attribution, and considering long-term value, you can make data-driven decisions that maximize your influencer marketing investment.</p>

      <p>Remember that ROI measurement is an ongoing process. Continuously refine your tracking methods and adjust your strategy based on what the data tells you.</p>
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      role: "Marketing Director",
      bio: "Sarah has 8+ years of experience in digital marketing and has helped dozens of brands optimize their influencer marketing strategies."
    },
    publishedAt: "March 15, 2024",
    readTime: "8 min read",
    category: "Strategy",
    image: "/placeholder.svg",
    tags: ["ROI", "Analytics", "Strategy", "Measurement"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Author and Meta */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.publishedAt}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Share Actions */}
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="leading-relaxed text-foreground"
            />
          </article>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-secondary mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Author Bio */}
          <div className="bg-muted/30 rounded-lg p-6 mb-12">
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">About {post.author.name}</h3>
                <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                <Button variant="outline" size="sm">
                  View All Posts
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-lg opacity-90 mb-6">
              Subscribe to get more insights delivered to your inbox
            </p>
            <Button variant="secondary" size="lg">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;