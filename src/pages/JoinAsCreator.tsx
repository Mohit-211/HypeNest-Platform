import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, User, Instagram, Youtube, Camera, DollarSign, CheckCircle, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const JoinAsCreator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([]);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const platforms = [
    { name: "Instagram", icon: Instagram },
    { name: "TikTok", icon: Camera },
    { name: "YouTube", icon: Youtube },
    { name: "Twitter", icon: Camera },
    { name: "LinkedIn", icon: Camera },
    { name: "Snapchat", icon: Camera }
  ];

  const niches = [
    "Fashion & Beauty", "Lifestyle", "Fitness & Health", "Food & Cooking", 
    "Travel", "Technology", "Gaming", "Parenting", "Business", "Education",
    "Art & Design", "Music", "Comedy", "DIY & Crafts", "Pets", "Other"
  ];

  const contentTypes = [
    "Posts", "Stories", "Reels/Videos", "Live Streams", "UGC Content",
    "Product Reviews", "Tutorials", "Unboxing", "Brand Collaborations"
  ];

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleNicheToggle = (niche: string) => {
    setSelectedNiches(prev =>
      prev.includes(niche)
        ? prev.filter(n => n !== niche)
        : [...prev, niche]
    );
  };

  const handleContentTypeToggle = (contentType: string) => {
    setSelectedContentTypes(prev =>
      prev.includes(contentType)
        ? prev.filter(c => c !== contentType)
        : [...prev, contentType]
    );
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-secondary mb-2">Join as Creator</h1>
            <p className="text-muted-foreground">Set up your creator profile and start collaborating with brands</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <Card>
            {/* Step 1: Basic Profile */}
            {currentStep === 1 && (
              <>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    Creator Profile
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself and your content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display/Brand Name</Label>
                    <Input id="displayName" placeholder="How you want to be known publicly" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio/Headline *</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Write a compelling bio that describes who you are and what content you create..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, Country" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages</Label>
                      <Input id="languages" placeholder="e.g., English, Spanish" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Profile Photo</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Choose File
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 2: Platforms & Following */}
            {currentStep === 2 && (
              <>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Instagram className="mr-2 h-5 w-5 text-primary" />
                    Platforms & Following
                  </CardTitle>
                  <CardDescription>
                    Connect your social media accounts and add your stats
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Select Your Platforms *</Label>
                    {platforms.map((platform) => {
                      const Icon = platform.icon;
                      const isSelected = selectedPlatforms.includes(platform.name);
                      return (
                        <Card 
                          key={platform.name} 
                          className={`cursor-pointer transition-colors ${isSelected ? 'border-primary bg-primary/5' : ''}`}
                          onClick={() => handlePlatformToggle(platform.name)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2 flex-1">
                                <Icon className="h-5 w-5" />
                                <span className="font-medium">{platform.name}</span>
                              </div>
                              {isSelected && (
                                <div className="grid grid-cols-2 gap-2 flex-1">
                                  <div>
                                    <Label className="text-xs">Username</Label>
                                    <Input 
                                      placeholder="@username" 
                                      size="sm"
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-xs">Followers</Label>
                                    <Input 
                                      placeholder="e.g., 10000" 
                                      size="sm"
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  </div>
                                </div>
                              )}
                              <Checkbox checked={isSelected} onChange={() => {}} />
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-secondary mb-2">Account Verification</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      We'll verify your accounts to show the "Verified" badge on your profile. This increases trust with brands.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verifyLater" />
                      <Label htmlFor="verifyLater" className="text-sm">
                        I'll verify my accounts later
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 3: Content & Niches */}
            {currentStep === 3 && (
              <>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="mr-2 h-5 w-5 text-primary" />
                    Content & Niches
                  </CardTitle>
                  <CardDescription>
                    What type of content do you create and what niches do you cover?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Content Niches *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {niches.map((niche) => (
                        <Badge
                          key={niche}
                          variant={selectedNiches.includes(niche) ? "default" : "outline"}
                          className="cursor-pointer justify-center p-2"
                          onClick={() => handleNicheToggle(niche)}
                        >
                          {niche}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Content Types *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {contentTypes.map((contentType) => (
                        <Badge
                          key={contentType}
                          variant={selectedContentTypes.includes(contentType) ? "default" : "outline"}
                          className="cursor-pointer justify-center p-2"
                          onClick={() => handleContentTypeToggle(contentType)}
                        >
                          {contentType}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contentStyle">Content Style Description</Label>
                    <Textarea 
                      id="contentStyle" 
                      placeholder="Describe your unique content style, voice, and what makes your content special..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postFrequency">Posting Frequency</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How often do you post?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="few-times-week">Few times a week</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="engagementRate">Average Engagement Rate</Label>
                      <Input id="engagementRate" placeholder="e.g., 3.5%" />
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 4: Pricing & Services */}
            {currentStep === 4 && (
              <>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-primary" />
                    Pricing & Services
                  </CardTitle>
                  <CardDescription>
                    Set your rates and define your services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Standard Packages</Label>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Instagram Post</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Price ($)</Label>
                            <Input placeholder="e.g., 250" />
                          </div>
                          <div className="space-y-2">
                            <Label>Delivery Time</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select delivery time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-day">1 day</SelectItem>
                                <SelectItem value="2-3-days">2-3 days</SelectItem>
                                <SelectItem value="3-5-days">3-5 days</SelectItem>
                                <SelectItem value="1-week">1 week</SelectItem>
                                <SelectItem value="2-weeks">2 weeks</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Package Description</Label>
                          <Textarea placeholder="Describe what's included in this package..." rows={2} />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Instagram Story</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Price ($)</Label>
                            <Input placeholder="e.g., 150" />
                          </div>
                          <div className="space-y-2">
                            <Label>Delivery Time</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select delivery time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-day">1 day</SelectItem>
                                <SelectItem value="2-3-days">2-3 days</SelectItem>
                                <SelectItem value="3-5-days">3-5 days</SelectItem>
                                <SelectItem value="1-week">1 week</SelectItem>
                                <SelectItem value="2-weeks">2 weeks</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Package Description</Label>
                          <Textarea placeholder="Describe what's included in this package..." rows={2} />
                        </div>
                      </CardContent>
                    </Card>

                    <Button variant="outline" className="w-full">
                      + Add Another Package
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label>Usage Rights & Licensing</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="organic" />
                        <Label htmlFor="organic" className="text-sm">
                          Organic posting rights included
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="paid" />
                        <Label htmlFor="paid" className="text-sm">
                          Paid advertising rights (+50% fee)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exclusivity" />
                        <Label htmlFor="exclusivity" className="text-sm">
                          Exclusivity available (discuss pricing)
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 5: Portfolio & Final Setup */}
            {currentStep === 5 && (
              <>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Portfolio & Final Setup
                  </CardTitle>
                  <CardDescription>
                    Upload your best work and complete your profile
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Portfolio Images/Videos</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload your best content samples</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG, MP4 up to 10MB each</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Current availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available now</SelectItem>
                          <SelectItem value="limited">Limited availability</SelectItem>
                          <SelectItem value="booked">Fully booked</SelectItem>
                          <SelectItem value="selective">Selective projects only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responseTime">Response Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How quickly do you respond?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="within-hour">Within 1 hour</SelectItem>
                          <SelectItem value="within-day">Within 24 hours</SelectItem>
                          <SelectItem value="1-2-days">1-2 days</SelectItem>
                          <SelectItem value="3-5-days">3-5 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests/Notes</Label>
                    <Textarea 
                      id="specialRequests" 
                      placeholder="Any special requirements, equipment you have access to, or additional services you offer..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="professional" />
                      <Label htmlFor="professional" className="text-sm">
                        I confirm that I create professional, high-quality content
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="guidelines" />
                      <Label htmlFor="guidelines" className="text-sm">
                        I agree to follow FTC guidelines for sponsored content disclosure
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="communication" />
                      <Label htmlFor="communication" className="text-sm">
                        I commit to professional and timely communication with brands
                      </Label>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-secondary mb-2">What happens next?</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Your profile will be reviewed by our team</li>
                      <li>• You'll receive approval within 24-48 hours</li>
                      <li>• Start browsing available campaigns</li>
                      <li>• Brands can discover and invite you to projects</li>
                      <li>• Build your portfolio and earn reviews</li>
                    </ul>
                  </div>
                </CardContent>
              </>
            )}

            {/* Navigation */}
            <div className="flex justify-between p-6 pt-0">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button onClick={nextStep} variant="hero">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button variant="hero">
                  Complete Profile
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default JoinAsCreator;