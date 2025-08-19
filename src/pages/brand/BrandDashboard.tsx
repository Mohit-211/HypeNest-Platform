import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { 
  Plus, 
  MessageSquare, 
  FileText, 
  DollarSign, 
  Users, 
  Eye, 
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { mockBrandKPIs, mockCampaigns, mockProposals, mockMessages } from "@/data/mockData";

const BrandDashboard = () => {
  const kpis = mockBrandKPIs;
  const campaigns = mockCampaigns.slice(0, 3);
  const recentProposals = mockProposals.slice(0, 6);
  const recentMessages = mockMessages.slice(0, 3);

  // Group campaigns by status for pipeline view
  const campaignPipeline = {
    briefing: campaigns.filter(c => c.status === 'draft'),
    inviting: campaigns.filter(c => c.status === 'active' && c.applicants === 0),
    'in-progress': campaigns.filter(c => c.status === 'active' && c.applicants > 0),
    review: campaigns.filter(c => c.status === 'in-review'),
    completed: campaigns.filter(c => c.status === 'completed')
  };

  // Mock upcoming deadlines
  const upcomingDeadlines = [
    {
      id: '1',
      title: 'Summer Fashion - Instagram Posts',
      creator: 'Emma Wilson',
      dueDate: '2024-02-05',
      status: 'in-progress' as const,
      type: 'Draft Review'
    },
    {
      id: '2',
      title: 'Tech Review - YouTube Video',
      creator: 'David Kim',
      dueDate: '2024-02-08',
      status: 'pending' as const,
      type: 'Final Approval'
    },
    {
      id: '3',
      title: 'Holiday Guide - Content Package',
      creator: 'Sarah Martinez',
      dueDate: '2024-02-12',
      status: 'in-review' as const,
      type: 'Milestone 2'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Good morning! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your campaigns today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Invite Creators
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Campaigns</p>
                <p className="text-2xl font-bold text-secondary">{kpis.activeCampaigns}</p>
                <p className="text-xs text-primary">+2 this month</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Open Proposals</p>
                <p className="text-2xl font-bold text-secondary">{kpis.openProposals}</p>
                <p className="text-xs text-orange-600">Needs review</p>
              </div>
              <MessageSquare className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unread Messages</p>
                <p className="text-2xl font-bold text-secondary">{kpis.unreadMessages}</p>
                <p className="text-xs text-red-600">3 urgent</p>
              </div>
              <MessageSquare className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold text-secondary">{kpis.pendingApprovals}</p>
                <p className="text-xs text-blue-600">Review needed</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Escrow Balance</p>
                <p className="text-2xl font-bold text-secondary">${kpis.escrowBalance.toLocaleString()}</p>
                <p className="text-xs text-green-600">Available funds</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Campaign Pipeline */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Campaign Pipeline
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>Drag and drop campaigns between stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(campaignPipeline).map(([stage, stageCampaigns]) => (
                  <div key={stage} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm capitalize text-secondary">
                        {stage.replace('-', ' ')}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {stageCampaigns.length}
                      </Badge>
                    </div>
                    <div className="space-y-2 min-h-[200px] p-2 bg-muted/30 rounded-lg">
                      {stageCampaigns.map((campaign) => (
                        <div
                          key={campaign.id}
                          className="p-3 bg-white rounded border hover:shadow-sm transition-shadow cursor-move"
                        >
                          <p className="font-medium text-sm truncate">{campaign.title}</p>
                          <div className="flex items-center justify-between mt-2">
                            <StatusBadge status={campaign.status} />
                            <p className="text-xs text-muted-foreground">
                              ${campaign.budget.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Deadlines
              </CardTitle>
              <CardDescription>Next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {deadline.creator.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.creator}</p>
                      <div className="flex items-center justify-between mt-2">
                        <StatusBadge status={deadline.status} />
                        <p className="text-xs text-muted-foreground">
                          {new Date(deadline.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Deadlines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Recent Messages
              </span>
              <Button variant="ghost" size="sm">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3 p-3 hover:bg-muted/30 rounded-lg cursor-pointer">
                  <Avatar>
                    <AvatarImage src={message.senderAvatar} alt={message.senderName} />
                    <AvatarFallback>{message.senderName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{message.senderName}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(message.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 truncate">
                      {message.content}
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              <MessageSquare className="mr-2 h-4 w-4" />
              Quick Reply
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions & Performance */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button className="h-auto py-4 flex-col">
                  <Plus className="h-6 w-6 mb-2" />
                  <span>Post Campaign</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  <span>Invite Creators</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col">
                  <DollarSign className="h-6 w-6 mb-2" />
                  <span>Fund Escrow</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  <span>View Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Reach</span>
                  <span className="font-semibold">{(kpis.totalReach / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Engagement</span>
                  <span className="font-semibold">{(kpis.totalEngagement / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avg. Engagement Rate</span>
                  <span className="font-semibold">{kpis.avgEngagementRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Content Created</span>
                  <span className="font-semibold">{kpis.contentCreated} pieces</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;