import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Plus, 
  Search, 
  Filter, 
  Eye,
  Edit,
  MoreHorizontal,
  Calendar,
  DollarSign,
  Users,
  Target,
  Share2,
  CheckCircle
} from "lucide-react";
import { mockCampaigns } from "@/data/mockData";

const BrandCampaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    title: '',
    objectives: [],
    platforms: [],
    deliverables: [],
    budget: '',
    budgetType: 'fixed',
    usageRights: '',
    exclusivity: '',
    timeline: '',
    description: '',
    targetAudience: ''
  });

  const filteredCampaigns = mockCampaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePublish = () => {
    // Mock campaign creation
    console.log('Publishing campaign:', campaignData);
    setIsWizardOpen(false);
    setCurrentStep(1);
    setCampaignData({
      title: '',
      objectives: [],
      platforms: [],
      deliverables: [],
      budget: '',
      budgetType: 'fixed',
      usageRights: '',
      exclusivity: '',
      timeline: '',
      description: '',
      targetAudience: ''
    });
  };

  const WizardStep1 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="title">Campaign Title</Label>
        <Input
          id="title"
          value={campaignData.title}
          onChange={(e) => setCampaignData({...campaignData, title: e.target.value})}
          placeholder="e.g., Summer Fashion Collection Launch"
        />
      </div>
      
      <div>
        <Label>Objectives</Label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {['Brand Awareness', 'UGC Creation', 'Product Reviews', 'Sales Conversion'].map((obj) => (
            <div key={obj} className="flex items-center space-x-2">
              <Checkbox 
                id={obj}
                checked={campaignData.objectives.includes(obj)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCampaignData({...campaignData, objectives: [...campaignData.objectives, obj]});
                  } else {
                    setCampaignData({...campaignData, objectives: campaignData.objectives.filter(o => o !== obj)});
                  }
                }}
              />
              <Label htmlFor={obj}>{obj}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Platforms</Label>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {['Instagram', 'TikTok', 'YouTube', 'Twitter', 'LinkedIn', 'UGC Only'].map((platform) => (
            <div key={platform} className="flex items-center space-x-2">
              <Checkbox 
                id={platform}
                checked={campaignData.platforms.includes(platform)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCampaignData({...campaignData, platforms: [...campaignData.platforms, platform]});
                  } else {
                    setCampaignData({...campaignData, platforms: campaignData.platforms.filter(p => p !== platform)});
                  }
                }}
              />
              <Label htmlFor={platform}>{platform}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WizardStep2 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="description">Campaign Description</Label>
        <Textarea
          id="description"
          value={campaignData.description}
          onChange={(e) => setCampaignData({...campaignData, description: e.target.value})}
          placeholder="Describe your campaign goals, brand message, and key points..."
          rows={4}
        />
      </div>

      <div>
        <Label>Deliverables</Label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {['Instagram Post', 'Instagram Stories', 'Instagram Reel', 'TikTok Video', 'YouTube Video', 'UGC Video'].map((deliverable) => (
            <div key={deliverable} className="flex items-center space-x-2">
              <Checkbox 
                id={deliverable}
                checked={campaignData.deliverables.includes(deliverable)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCampaignData({...campaignData, deliverables: [...campaignData.deliverables, deliverable]});
                  } else {
                    setCampaignData({...campaignData, deliverables: campaignData.deliverables.filter(d => d !== deliverable)});
                  }
                }}
              />
              <Label htmlFor={deliverable}>{deliverable}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Textarea
          id="targetAudience"
          value={campaignData.targetAudience}
          onChange={(e) => setCampaignData({...campaignData, targetAudience: e.target.value})}
          placeholder="Describe your target audience demographics, interests, etc."
          rows={3}
        />
      </div>
    </div>
  );

  const WizardStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Budget ($)</Label>
          <Input
            id="budget"
            type="number"
            value={campaignData.budget}
            onChange={(e) => setCampaignData({...campaignData, budget: e.target.value})}
            placeholder="5000"
          />
        </div>
        <div>
          <Label htmlFor="budgetType">Budget Type</Label>
          <Select value={campaignData.budgetType} onValueChange={(value) => setCampaignData({...campaignData, budgetType: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fixed">Fixed Budget</SelectItem>
              <SelectItem value="negotiable">Negotiable</SelectItem>
              <SelectItem value="gifting">Gifting Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="usageRights">Usage Rights Duration</Label>
        <Select value={campaignData.usageRights} onValueChange={(value) => setCampaignData({...campaignData, usageRights: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="organic-only">Organic Use Only</SelectItem>
            <SelectItem value="1-month">1 Month Paid Usage</SelectItem>
            <SelectItem value="3-months">3 Months Paid Usage</SelectItem>
            <SelectItem value="6-months">6 Months Paid Usage</SelectItem>
            <SelectItem value="1-year">1 Year Paid Usage</SelectItem>
            <SelectItem value="perpetual">Perpetual Rights</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="exclusivity">Exclusivity Window</Label>
        <Select value={campaignData.exclusivity} onValueChange={(value) => setCampaignData({...campaignData, exclusivity: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select exclusivity period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Exclusivity</SelectItem>
            <SelectItem value="1-month">1 Month</SelectItem>
            <SelectItem value="3-months">3 Months</SelectItem>
            <SelectItem value="6-months">6 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const WizardStep4 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="timeline">Campaign Timeline</Label>
        <Input
          id="timeline"
          value={campaignData.timeline}
          onChange={(e) => setCampaignData({...campaignData, timeline: e.target.value})}
          placeholder="e.g., 4 weeks"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Summary</CardTitle>
          <CardDescription>Review your campaign details before publishing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Title:</p>
            <p className="text-muted-foreground">{campaignData.title || 'Not specified'}</p>
          </div>
          <div>
            <p className="font-medium">Platforms:</p>
            <div className="flex gap-2 mt-1">
              {campaignData.platforms.map(platform => (
                <Badge key={platform} variant="outline">{platform}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium">Budget:</p>
            <p className="text-muted-foreground">${campaignData.budget} ({campaignData.budgetType})</p>
          </div>
          <div>
            <p className="font-medium">Deliverables:</p>
            <div className="flex gap-2 mt-1">
              {campaignData.deliverables.map(deliverable => (
                <Badge key={deliverable} variant="secondary">{deliverable}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Campaigns</h1>
          <p className="text-muted-foreground">Manage and create your influencer campaigns</p>
        </div>
        <Dialog open={isWizardOpen} onOpenChange={setIsWizardOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
              <DialogDescription>
                Step {currentStep} of 4: {
                  currentStep === 1 ? 'Objectives & Platforms' :
                  currentStep === 2 ? 'Deliverables & Details' :
                  currentStep === 3 ? 'Budget & Rights' :
                  'Timeline & Review'
                }
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              {currentStep === 1 && <WizardStep1 />}
              {currentStep === 2 && <WizardStep2 />}
              {currentStep === 3 && <WizardStep3 />}
              {currentStep === 4 && <WizardStep4 />}
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <div className="flex gap-2">
                {currentStep < 4 ? (
                  <Button onClick={nextStep}>Next</Button>
                ) : (
                  <Button onClick={handlePublish}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Publish Campaign
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Platform(s)</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Creators</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Last Update</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{campaign.title}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                      {campaign.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {campaign.platform.map(p => (
                      <Badge key={p} variant="outline" className="text-xs">{p}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium">${campaign.budget.toLocaleString()}</span>
                </TableCell>
                <TableCell>
                  <StatusBadge status={campaign.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{campaign.acceptedCreators}</span>
                    <span className="text-muted-foreground">
                      ({campaign.applicants} applied)
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{campaign.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {new Date(campaign.createdAt).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default BrandCampaigns;