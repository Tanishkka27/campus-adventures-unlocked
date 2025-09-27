import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Map,
  Trophy,
  User,
  LogOut,
  Gamepad2,
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
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Campus Map", url: "/map", icon: Map },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const collapsed = state === "collapsed";

  const isActive = (path: string) => 
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);
  
  const getNavClass = (path: string) =>
    isActive(path) 
      ? "bg-sidebar-accent text-primary border-l-2 border-primary" 
      : "hover:bg-sidebar-accent/50 hover:text-foreground";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300`} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg animate-glow">
            <Gamepad2 className="h-6 w-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-foreground">CampusQuest</h2>
              <p className="text-xs text-muted-foreground">Adventure Awaits</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground mb-2">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`${getNavClass(item.url)} flex items-center p-3 rounded-lg transition-all duration-200`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3 font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/40/40" />
            <AvatarFallback className="bg-primary text-primary-foreground font-bold">
              T
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">Tanishkka</p>
              <p className="text-xs text-muted-foreground">Level 2</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}