import { Status } from "@/components/shared/StatusBadge";

export interface Campaign {
  id: string;
  title: string;
  platform: string[];
  budget: number;
  status: Status;
  createdAt: string;
  deadline: string;
  description: string;
  targetAudience: string;
  deliverables: string[];
  applicants: number;
  acceptedCreators: number;
  progress: number;
  brandId: string;
}

export interface Creator {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  platforms: string[];
  followers: number;
  engagement: number;
  rating: number;
  responseTime: string;
  location: string;
  categories: string[];
  baseRate: number;
  verified: boolean;
  lastActive: string;
}

export interface Proposal {
  id: string;
  campaignId: string;
  creatorId: string;
  brandId: string;
  status: Status;
  price: number;
  deliverables: string[];
  timeline: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  attachments?: string[];
  systemMessage?: boolean;
  messageType?: 'proposal' | 'milestone' | 'revision' | 'approval';
}

export interface Booking {
  id: string;
  campaignId: string;
  creatorId: string;
  brandId: string;
  status: Status;
  price: number;
  deliverables: string[];
  deadline: string;
  milestones: Milestone[];
  createdAt: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: Status;
  deliveredAt?: string;
  approvedAt?: string;
  revisionCount: number;
  maxRevisions: number;
}

// Mock Creators Data
export const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    username: '@emmawilson',
    avatar: '/placeholder.svg',
    bio: 'Fashion & lifestyle content creator with 8+ years experience. Specializing in authentic brand storytelling.',
    platforms: ['Instagram', 'TikTok'],
    followers: 125000,
    engagement: 4.8,
    rating: 4.9,
    responseTime: '< 2 hours',
    location: 'Los Angeles, CA',
    categories: ['Fashion', 'Lifestyle', 'Beauty'],
    baseRate: 350,
    verified: true,
    lastActive: '2 hours ago'
  },
  {
    id: '2',
    name: 'David Kim',
    username: '@davidtech',
    avatar: '/placeholder.svg',
    bio: 'Tech reviewer and gadget enthusiast. Known for in-depth reviews and honest opinions.',
    platforms: ['YouTube', 'Instagram'],
    followers: 89000,
    engagement: 4.6,
    rating: 4.7,
    responseTime: '< 4 hours',
    location: 'San Francisco, CA',
    categories: ['Technology', 'Gaming', 'Reviews'],
    baseRate: 280,
    verified: true,
    lastActive: '1 day ago'
  },
  // Add more creators...
];

// Mock Campaigns Data
export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Summer Fashion Collection Launch',
    platform: ['Instagram', 'TikTok'],
    budget: 5000,
    status: 'active',
    createdAt: '2024-01-15',
    deadline: '2024-02-15',
    description: 'Launch our new summer collection with authentic lifestyle content.',
    targetAudience: 'Women 18-35 interested in sustainable fashion',
    deliverables: ['3 Instagram Posts', '5 Instagram Stories', '2 TikTok Videos'],
    applicants: 24,
    acceptedCreators: 8,
    progress: 65,
    brandId: '1'
  },
  {
    id: '2',
    title: 'Tech Product Review Campaign',
    platform: ['YouTube', 'Instagram'],
    budget: 3200,
    status: 'in-review',
    createdAt: '2024-01-20',
    deadline: '2024-02-20',
    description: 'Honest reviews of our latest smartphone accessories.',
    targetAudience: 'Tech enthusiasts 20-40',
    deliverables: ['1 YouTube Review Video', '3 Instagram Posts'],
    applicants: 18,
    acceptedCreators: 5,
    progress: 30,
    brandId: '1'
  },
  {
    id: '3',
    title: 'Holiday Gift Guide 2024',
    platform: ['Instagram', 'TikTok', 'YouTube'],
    budget: 8000,
    status: 'draft',
    createdAt: '2024-01-25',
    deadline: '2024-03-15',
    description: 'Create engaging gift guides featuring our products.',
    targetAudience: 'Gift buyers 25-45',
    deliverables: ['Gift Guide Video', '10 Instagram Stories', '5 TikTok Videos'],
    applicants: 0,
    acceptedCreators: 0,
    progress: 10,
    brandId: '1'
  }
];

// Mock Proposals Data
export const mockProposals: Proposal[] = [
  {
    id: '1',
    campaignId: '1',
    creatorId: '1',
    brandId: '1',
    status: 'proposed',
    price: 350,
    deliverables: ['3 Instagram Posts', '5 Stories'],
    timeline: '2 weeks',
    message: 'I\'d love to work on this campaign! I have experience with similar fashion brands.',
    createdAt: '2024-01-16',
    updatedAt: '2024-01-16'
  },
  {
    id: '2',
    campaignId: '2',
    creatorId: '2',
    brandId: '1',
    status: 'accepted',
    price: 280,
    deliverables: ['1 YouTube Video', '3 Instagram Posts'],
    timeline: '3 weeks',
    message: 'I can provide authentic tech reviews with detailed analysis.',
    createdAt: '2024-01-21',
    updatedAt: '2024-01-22'
  }
];

// Mock Messages Data
export const mockMessages: Message[] = [
  {
    id: '1',
    threadId: 'campaign-1-creator-1',
    senderId: '1',
    senderName: 'Emma Wilson',
    senderAvatar: '/placeholder.svg',
    content: 'I\'ve uploaded the draft content for review. Let me know your thoughts!',
    timestamp: '2024-01-28T10:30:00Z'
  },
  {
    id: '2',
    threadId: 'campaign-2-creator-2',
    senderId: '2',
    senderName: 'David Kim',
    senderAvatar: '/placeholder.svg',
    content: 'When would you like to schedule the product demo call?',
    timestamp: '2024-01-28T15:45:00Z'
  }
];

// Mock Bookings Data
export const mockBookings: Booking[] = [
  {
    id: '1',
    campaignId: '2',
    creatorId: '2',
    brandId: '1',
    status: 'in-progress',
    price: 280,
    deliverables: ['YouTube Review Video', '3 Instagram Posts'],
    deadline: '2024-02-20',
    milestones: [
      {
        id: '1',
        title: 'Script & Storyboard',
        description: 'Create detailed script and visual storyboard',
        dueDate: '2024-02-05',
        status: 'completed',
        deliveredAt: '2024-02-04',
        approvedAt: '2024-02-05',
        revisionCount: 0,
        maxRevisions: 2
      },
      {
        id: '2',
        title: 'Video Production',
        description: 'Film and edit the review video',
        dueDate: '2024-02-15',
        status: 'in-progress',
        revisionCount: 0,
        maxRevisions: 3
      },
      {
        id: '3',
        title: 'Instagram Content',
        description: 'Create accompanying Instagram posts',
        dueDate: '2024-02-18',
        status: 'pending',
        revisionCount: 0,
        maxRevisions: 2
      }
    ],
    createdAt: '2024-01-22'
  }
];

// Mock KPI Data
export const mockBrandKPIs = {
  activeCampaigns: 5,
  openProposals: 12,
  unreadMessages: 8,
  pendingApprovals: 3,
  escrowBalance: 12450,
  totalReach: 2400000,
  totalEngagement: 98500,
  avgEngagementRate: 4.2,
  contentCreated: 47
};

export const mockCreatorKPIs = {
  newInvites: 4,
  openLeads: 8,
  inProgressJobs: 3,
  pendingPayouts: 1250,
  avgResponseTime: 2,
  monthToDate: 3200,
  pending: 850,
  lifetime: 24500,
  completedJobs: 28,
  avgRating: 4.8
};