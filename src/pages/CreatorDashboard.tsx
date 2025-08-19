import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  Users, 
  FileText, 
  TrendingUp,
  Eye, 
  MessageSquare, 
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Upload,
  Edit3
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const CreatorDashboard = () => {
  const stats = [
    { title: "Active Projects", value: "3", change: "+1 this week", icon: FileText },
    { title: "Total Earnings", value: "$2,850", change: "+$650 this month", icon: DollarSign },
    { title: "Pending Payout", value: "$420", change: "Available in 3 days", icon: Clock },
    { title: "Profile Views", value: "156", change: "+24 this week", icon: Eye }
  ];

  const activeProjects = [
    {
      id: 1,
      brand: "Fashion Nova",
      title: "Summer Fashion Collection",
      type: "Instagram Post + Story",
      price: "$350",
      deadline: "July 20, 2024",
      status: "In Progress",
      progress: 60,
      milestone: "Content creation"
    },
    {
      id: 2,
      brand: "TechGadgets",
      title: "Back to School Reviews",
      type: "YouTube Video",
      price: "$280",
      deadline: "August 5, 2024",
      status: "Awaiting Approval",
      progress: 90,
      milestone: "Content review"
    },
    {
      id: 3,
      brand: "FitLife",
      title: "Workout Routine Showcase",
      type: "TikTok Video",
      price: "$220",
      deadline: "July 25, 2024",
      status: "Just Started",
      progress: 20,
      milestone: "Brief review"
    }
  ];

  const availableOpportunities = [
    {
      id: 1,
      brand: "BeautyBrand",
      title: "Skincare Routine Video",
      budget: "$400-600",
      deadline: "August 10, 2024",
      platform: "Instagram",
      applicants: "12",
      posted: "2 hours ago"
    },
    {
      id: 2,
      brand: "TravelCo",
      title: "Weekend Getaway Content",
      budget: "$800-1200",
      deadline: "September 1, 2024",
      platform: "TikTok + Instagram",
      applicants: "8",
      posted: "5 hours ago"
    },
    {
      id: 3,
      brand: "FoodieApp",
      title: "Restaurant Review Series",
      budget: "$300-500",
      deadline: "August 15, 2024",
      platform: "YouTube",
      applicants: "15",
      posted: "1 day ago"
    }
  ];

  const recentMessages = [
    {
      id: 1,
      brand: "Fashion Nova",
      message: "The content looks great! Just a few minor revisions needed...",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 2,
      brand: "TechGadgets", 
      message: "Payment has been processed and will be available in 2-3 business days",
      time: "3 hours ago",
      unread: false
    },
    {
      id: 3,
      brand: "FitLife",
      message: "Thank you for accepting our collaboration offer!",
      time: "1 day ago",
      unread: false
    }
  ];

  const earnings = [
    { month: "June 2024", amount: "$1,850", projects: 4, status: "Paid" },
    { month: "May 2024", amount: "$2,200", projects: 5, status: "Paid" },
    { month: "April 2024", amount: "$1,650", projects: 3, status: "Paid" },
    { month: "March 2024", amount: "$2,950", projects: 6, status: "Paid" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-secondary">Creator Dashboard</h1>
                <p className="text-muted-foreground">Manage your collaborations and grow your creator business</p>
              </div>
              <Button variant="hero">
                <Edit3 className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                        <p className="text-xs text-primary">{stat.change}</p>
                      </div>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList>
              <TabsTrigger value="projects">Active Projects</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            {/* Active Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="grid gap-6">
                {activeProjects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 mt-2">
                            <span className="font-medium">{project.brand}</span>
                            <Badge variant={project.status === 'In Progress' ? 'default' : project.status === 'Awaiting Approval' ? 'secondary' : 'outline'}>
                              {project.status}
                            </Badge>
                          </CardDescription>
                        </div>
                        <span className="text-lg font-bold text-primary">{project.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Type</p>
                          <p className="font-semibold">{project.type}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Deadline</p>
                          <p className="font-semibold">{project.deadline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Current Milestone</p>
                          <p className="font-semibold">{project.milestone}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Project Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} />
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View Brief
                        </Button>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Content
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message Brand
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Opportunities Tab */}
            <TabsContent value="opportunities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Opportunities</CardTitle>
                  <CardDescription>Browse and apply to new collaboration opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableOpportunities.map((opportunity) => (
                      <div key={opportunity.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{opportunity.title}</h3>
                            <p className="text-sm text-muted-foreground">{opportunity.brand}</p>
                          </div>
                          <Badge variant="outline">{opportunity.platform}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Budget</p>
                            <p className="font-semibold">{opportunity.budget}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Deadline</p>
                            <p className="font-semibold">{opportunity.deadline}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Applicants</p>
                            <p className="font-semibold">{opportunity.applicants}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Posted</p>
                            <p className="font-semibold">{opportunity.posted}</p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="hero" size="sm">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Communication with your brand partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div key={message.id} className={`p-4 rounded-lg border ${message.unread ? 'bg-muted/30' : ''}`}>
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-semibold text-foreground">{message.brand}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                            {message.unread && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-foreground">{message.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earnings Tab */}
            <TabsContent value="earnings" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Overview</CardTitle>
                    <CardDescription>Your earnings and payout history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground">Available for Payout</p>
                          <p className="text-2xl font-bold text-primary">$420.00</p>
                        </div>
                        <Button variant="hero">
                          Request Payout
                        </Button>
                      </div>
                      
                      <div className="space-y-3">
                        {earnings.map((earning, index) => (
                          <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                            <div>
                              <p className="font-semibold">{earning.month}</p>
                              <p className="text-sm text-muted-foreground">{earning.projects} projects</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">{earning.amount}</p>
                              <Badge variant={earning.status === 'Paid' ? 'default' : 'secondary'} className="text-xs">
                                {earning.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>Track your creator performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Average Rating</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-semibold">4.8</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Projects Completed</span>
                        <span className="font-semibold">18</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">On-time Delivery</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Repeat Clients</span>
                        <span className="font-semibold">67%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Response Time</span>
                        <span className="font-semibold">< 2 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CreatorDashboard;