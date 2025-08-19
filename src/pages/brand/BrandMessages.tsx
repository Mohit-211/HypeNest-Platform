import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { 
  Send, 
  Paperclip, 
  Smile, 
  Search,
  MoreVertical,
  CheckCircle,
  Edit3,
  AlertCircle,
  Clock
} from "lucide-react";
import { mockMessages, mockCreators, mockCampaigns } from "@/data/mockData";

const BrandMessages = () => {
  const [selectedThread, setSelectedThread] = useState("campaign-1-creator-1");
  const [newMessage, setNewMessage] = useState("");
  
  // Mock conversation threads
  const conversations = [
    {
      id: "campaign-1-creator-1",
      creatorId: "1",
      campaignId: "1",
      lastMessage: "I've uploaded the draft content for review. Let me know your thoughts!",
      timestamp: "2024-01-28T10:30:00Z",
      unread: true,
      status: "in-progress" as const
    },
    {
      id: "campaign-2-creator-2",
      creatorId: "2",
      campaignId: "2",
      lastMessage: "When would you like to schedule the product demo call?",
      timestamp: "2024-01-28T15:45:00Z",
      unread: true,
      status: "proposed" as const
    },
    {
      id: "campaign-1-creator-3",
      creatorId: "1",
      campaignId: "1",
      lastMessage: "The content is now live! Here are the analytics results.",
      timestamp: "2024-01-27T09:20:00Z",
      unread: false,
      status: "completed" as const
    }
  ];

  // Mock thread messages
  const threadMessages = [
    {
      id: "1",
      senderId: "brand-1",
      senderName: "TechCorp Team",
      content: "Hi Emma! We loved your proposal for our summer campaign. Could you provide some more details about the timeline?",
      timestamp: "2024-01-28T08:00:00Z",
      isCurrentUser: true
    },
    {
      id: "2",
      senderId: "creator-1",
      senderName: "Emma Wilson",
      content: "Hi! Thank you for considering my proposal. I can deliver the Instagram posts within 2 weeks and the TikTok content within 3 weeks. Would that work for your timeline?",
      timestamp: "2024-01-28T08:30:00Z",
      isCurrentUser: false,
      avatar: "/placeholder.svg"
    },
    {
      id: "3",
      senderId: "brand-1",
      senderName: "TechCorp Team",
      content: "That sounds perfect! Let's move forward with your proposal. I'll send over the brand guidelines and product details.",
      timestamp: "2024-01-28T09:00:00Z",
      isCurrentUser: true
    },
    {
      id: "4",
      senderId: "creator-1",
      senderName: "Emma Wilson",
      content: "I've uploaded the draft content for review. Let me know your thoughts!",
      timestamp: "2024-01-28T10:30:00Z",
      isCurrentUser: false,
      avatar: "/placeholder.svg",
      attachments: ["draft_post_1.jpg", "draft_post_2.jpg"]
    },
    {
      id: "5",
      senderId: "system",
      senderName: "System",
      content: "Milestone approved: Draft Content Review",
      timestamp: "2024-01-28T11:00:00Z",
      isSystemMessage: true,
      messageType: "milestone"
    }
  ];

  const getCreatorName = (creatorId: string) => {
    const creator = mockCreators.find(c => c.id === creatorId);
    return creator?.name || "Unknown Creator";
  };

  const getCampaignName = (campaignId: string) => {
    const campaign = mockCampaigns.find(c => c.id === campaignId);
    return campaign?.title || "Unknown Campaign";
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Mock sending message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedThread);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-secondary">Messages</h1>
        <p className="text-muted-foreground">Communicate with your creators</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversation List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Conversations</span>
              <Badge variant="outline">{conversations.filter(c => c.unread).length} unread</Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                    selectedThread === conversation.id ? 'bg-muted/50 border-l-4 border-l-primary' : ''
                  }`}
                  onClick={() => setSelectedThread(conversation.id)}
                >
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Creator" />
                      <AvatarFallback>
                        {getCreatorName(conversation.creatorId).split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm truncate">
                          {getCreatorName(conversation.creatorId)}
                        </p>
                        <div className="flex items-center gap-2">
                          {conversation.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {new Date(conversation.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {getCampaignName(conversation.campaignId)}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <StatusBadge status={conversation.status} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-2">
          {selectedConversation ? (
            <>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Creator" />
                      <AvatarFallback>
                        {getCreatorName(selectedConversation.creatorId).split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{getCreatorName(selectedConversation.creatorId)}</p>
                      <p className="text-sm text-muted-foreground">
                        {getCampaignName(selectedConversation.campaignId)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={selectedConversation.status} />
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              
              {/* Messages */}
              <ScrollArea className="h-[350px] p-4">
                <div className="space-y-4">
                  {threadMessages.map((message) => (
                    <div key={message.id}>
                      {message.isSystemMessage ? (
                        <div className="flex justify-center">
                          <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs">
                            {message.messageType === 'milestone' && <CheckCircle className="h-3 w-3 text-green-500" />}
                            <span>{message.content}</span>
                          </div>
                        </div>
                      ) : (
                        <div className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-start space-x-2 max-w-[70%] ${message.isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            {!message.isCurrentUser && (
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={message.avatar} alt={message.senderName} />
                                <AvatarFallback className="text-xs">
                                  {message.senderName.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div>
                              <div className={`p-3 rounded-lg ${
                                message.isCurrentUser 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted'
                              }`}>
                                <p className="text-sm">{message.content}</p>
                                {message.attachments && (
                                  <div className="mt-2 space-y-1">
                                    {message.attachments.map((attachment) => (
                                      <div key={attachment} className="flex items-center gap-2 text-xs opacity-80">
                                        <Paperclip className="h-3 w-3" />
                                        <span>{attachment}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1 px-3">
                                {new Date(message.timestamp).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Quick Actions */}
              <div className="p-4 border-t">
                <div className="flex gap-2 mb-3">
                  <Button variant="outline" size="sm">
                    <Edit3 className="mr-2 h-3 w-3" />
                    Propose Change
                  </Button>
                  <Button variant="outline" size="sm">
                    <AlertCircle className="mr-2 h-3 w-3" />
                    Request Revision
                  </Button>
                  <Button variant="outline" size="sm">
                    <CheckCircle className="mr-2 h-3 w-3" />
                    Approve Deliverable
                  </Button>
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="pr-20"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Paperclip className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Smile className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default BrandMessages;