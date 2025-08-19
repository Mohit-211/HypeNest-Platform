import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  MessageSquare, 
  FileText, 
  DollarSign, 
  Users, 
  Eye, 
  Edit3, 
  MoreHorizontal,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const BrandDashboard = () => {
  const stats = [
    { title: "Active Campaigns", value: "5", change: "+2 this month", icon: FileText },
    { title: "Total Creators", value: "23", change: "+8 this month", icon: Users },
    { title: "This Month Spend", value: "$12,450", change: "+15% vs last month", icon: DollarSign },
    { title: "Avg. Engagement", value: "4.2%", change: "+0.8% vs last month", icon: TrendingUp }
  ];

  const campaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection Launch",
      status: "Active",
      budget: "$5,000",
      creators: 8,
      applications: 24,
      deadline: "July 15, 2024",
      progress: 65
    },
    {
      id: 2,
      title: "Back to School Tech Reviews",
      status: "In Review",
      budget: "$3,200",
      creators: 5,
      applications: 18,
      deadline: "August 1, 2024",
      progress: 30
    },
    {
      id: 3,
      title: "Holiday Gift Guide 2024",
      status: "Draft",
      budget: "$8,000",
      creators: 0,
      applications: 0,
      deadline: "November 15, 2024",
      progress: 10
    }
  ];

  const recentMessages = [
    {
      id: 1,
      creator: "Sarah Johnson",
      avatar: "/placeholder.svg",
      campaign: "Summer Fashion Collection",
      message: "I've uploaded the draft content for review...",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      creator: "Alex Chen",
      avatar: "/placeholder.svg",
      campaign: "Tech Reviews",
      message: "When would you like to schedule the call?",
      time: "5 hours ago",
      unread: true
    },
    {
      id: 3,
      creator: "Maria Rodriguez",
      avatar: "/placeholder.svg",
      campaign: "Summer Fashion Collection",
      message: "The content is now live! Here are the analytics...",
      time: "1 day ago",
      unread: false
    }
  ];

  const applications = [
    {
      id: 1,
      creator: "Emma Wilson",
      avatar: "/placeholder.svg",
      campaign: "Summer Fashion Collection",
      price: "$350",
      rating: 4.8,
      followers: "125K",
      appliedAt: "2 hours ago"
    },
    {
      id: 2,
      creator: "David Kim",
      avatar: "/placeholder.svg",
      campaign: "Tech Reviews",
      price: "$280",
      rating: 4.6,
      followers: "89K",
      appliedAt: "4 hours ago"
    },
    {
      id: 3,
      creator: "James Brown",
      avatar: "/placeholder.svg",
      campaign: "Summer Fashion Collection",
      price: "$420",
      rating: 4.9,
      followers: "156K",
      appliedAt: "6 hours ago"
    }
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
                <h1 className="text-3xl font-bold text-secondary">Brand Dashboard</h1>
                <p className="text-muted-foreground">Manage your campaigns and creator collaborations</p>
              </div>
              <Button variant="hero">
                <Plus className="mr-2 h-4 w-4" />
                Create Campaign
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
          <Tabs defaultValue="campaigns" className="space-y-6">
            <TabsList>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Campaigns Tab */}
            <TabsContent value="campaigns" className="space-y-6">
              <div className="grid gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{campaign.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 mt-2">
                            <Badge variant={campaign.status === 'Active' ? 'default' : campaign.status === 'In Review' ? 'secondary' : 'outline'}>
                              {campaign.status}
                            </Badge>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Due: {campaign.deadline}
                            </span>
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-semibold">{campaign.budget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Creators</p>
                          <p className="font-semibold">{campaign.creators}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Applications</p>
                          <p className="font-semibold">{campaign.applications}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Progress</p>
                          <p className="font-semibold">{campaign.progress}%</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Campaign Progress</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} />
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit3 className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Messages
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Communicate with your creators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div key={message.id} className={`flex items-start space-x-4 p-4 rounded-lg border ${message.unread ? 'bg-muted/30' : ''}`}>
                        <Avatar>
                          <AvatarImage src={message.avatar} alt={message.creator} />
                          <AvatarFallback>{message.creator.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-foreground">{message.creator}</p>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{message.campaign}</p>
                          <p className="text-sm text-foreground mt-1">{message.message}</p>
                        </div>
                        {message.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Review creator applications for your campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications.map((application) => (
                      <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={application.avatar} alt={application.creator} />
                            <AvatarFallback>{application.creator.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground">{application.creator}</p>
                            <p className="text-sm text-muted-foreground">{application.campaign}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                              <span>⭐ {application.rating}</span>
                              <span>{application.followers} followers</span>
                              <span>{application.appliedAt}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-semibold text-foreground">{application.price}</p>
                            <p className="text-xs text-muted-foreground">Proposed rate</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button variant="hero" size="sm">
                              Accept
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Key metrics across all campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Reach</span>
                        <span className="font-semibold">2.4M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Engagement</span>
                        <span className="font-semibold">98.5K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Avg. Engagement Rate</span>
                        <span className="font-semibold">4.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Content Created</span>
                        <span className="font-semibold">47 pieces</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates and milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Campaign "Summer Fashion" completed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">3 content pieces pending review</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">5 new creator applications</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Engagement up 15% this month</span>
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

export default BrandDashboard;