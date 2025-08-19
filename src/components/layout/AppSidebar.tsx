import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  Megaphone,
  Lightbulb,
  Calendar,
  Wallet,
  Image,
  LogOut,
  User
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";

const brandNavItems = [
  { title: "Dashboard", url: "/brand/dashboard", icon: LayoutDashboard },
  { title: "Campaigns", url: "/brand/campaigns", icon: Megaphone },
  { title: "Messages", url: "/brand/messages", icon: MessageSquare },
  { title: "Billing", url: "/brand/billing", icon: CreditCard },
  { title: "Settings", url: "/brand/settings", icon: Settings },
];

const creatorNavItems = [
  { title: "Dashboard", url: "/creator/dashboard", icon: LayoutDashboard },
  { title: "Leads", url: "/creator/leads", icon: Lightbulb },
  { title: "Bookings", url: "/creator/bookings", icon: Calendar },
  { title: "Payouts", url: "/creator/payouts", icon: Wallet },
  { title: "Portfolio", url: "/creator/portfolio", icon: Image },
  { title: "Settings", url: "/creator/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const navItems = user?.role === 'brand' ? brandNavItems : creatorNavItems;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <span className="text-primary-foreground font-bold text-sm">H</span>
          </div>
          {!collapsed && (
            <span className="font-heading font-bold text-lg text-secondary">Hypenest</span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            {user?.role === 'brand' ? 'Brand Tools' : 'Creator Tools'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback>{user?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{user?.name}</p>
                <p className="text-muted-foreground text-xs truncate">{user?.email}</p>
              </div>
            )}
          </div>
          {!collapsed && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={logout}
              className="w-full justify-start"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}