import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/shared/ProtectedRoute";
import { AppLayout } from "./components/layout/AppLayout";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import BrowseCreators from "./pages/BrowseCreators";
import HowItWorksPage from "./pages/HowItWorksPage";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import JoinAsBrand from "./pages/JoinAsBrand";
import JoinAsCreator from "./pages/JoinAsCreator";
import BrandDashboard from "./pages/brand/BrandDashboard";
import BrandCampaigns from "./pages/brand/BrandCampaigns";
import BrandMessages from "./pages/brand/BrandMessages";
import CreatorDashboard from "./pages/CreatorDashboard";
import VerifyOtp from "@/pages/VerifyOtp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/browse" element={<BrowseCreators />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/join-brand" element={<JoinAsBrand />} />
            <Route path="/join-creator" element={<JoinAsCreator />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />

            {/* Protected Brand Routes */}
            <Route
              path="/brand/*"
              element={
                <ProtectedRoute allowedRoles={["brand"]}>
                  <AppLayout>
                    <Routes>
                      <Route path="dashboard" element={<BrandDashboard />} />
                      <Route path="campaigns" element={<BrandCampaigns />} />
                      <Route path="messages" element={<BrandMessages />} />
                      <Route
                        path="billing"
                        element={<div>Brand Billing (Coming Soon)</div>}
                      />
                      <Route
                        path="settings"
                        element={<div>Brand Settings (Coming Soon)</div>}
                      />
                      <Route
                        index
                        element={<Navigate to="/brand/dashboard" replace />}
                      />
                    </Routes>
                  </AppLayout>
                </ProtectedRoute>
              }
            />

            {/* Protected Creator Routes */}
            <Route
              path="/creator/*"
              element={
                <ProtectedRoute allowedRoles={["creator"]}>
                  <AppLayout>
                    <Routes>
                      <Route path="dashboard" element={<CreatorDashboard />} />
                      <Route
                        path="leads"
                        element={<div>Creator Leads (Coming Soon)</div>}
                      />
                      <Route
                        path="bookings"
                        element={<div>Creator Bookings (Coming Soon)</div>}
                      />
                      <Route
                        path="payouts"
                        element={<div>Creator Payouts (Coming Soon)</div>}
                      />
                      <Route
                        path="portfolio"
                        element={<div>Creator Portfolio (Coming Soon)</div>}
                      />
                      <Route
                        path="settings"
                        element={<div>Creator Settings (Coming Soon)</div>}
                      />
                      <Route
                        index
                        element={<Navigate to="/creator/dashboard" replace />}
                      />
                    </Routes>
                  </AppLayout>
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
