
import React from 'react';
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { BarChart3, Shield, Search, Folder, Settings, AlertTriangle, Users, LogOut, HelpCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          {/* Sidebar */}
          <Sidebar>
            <SidebarContent className="py-2">
              <div className="mb-10">
                <div className="flex items-center px-3 h-12 mb-4">
                  <Shield className="h-6 w-6 text-chainwatch-blue mr-2" />
                  <span className="font-bold text-lg">
                    Chain<span className="text-chainwatch-blue">Watch</span>
                  </span>
                </div>
                <Separator />
              </div>
              
              <div className="px-3 py-1">
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Main
                </h2>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Explorer
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Alerts
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Folder className="h-4 w-4 mr-2" />
                    Cases
                  </Button>
                </div>
                
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground mt-8 mb-3">
                  Admin
                </h2>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Team
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help
                  </Button>
                </div>
              </div>
            </SidebarContent>
            <SidebarFooter>
              <Button variant="ghost" className="w-full justify-start text-chainwatch-red border-t border-border rounded-none h-12">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            <Navbar />
            <div className="flex items-center justify-between px-4 py-2 border-b border-border">
              <div>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Overview of all blockchain monitoring activities
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="hidden md:flex">
                  <Bell className="h-4 w-4 mr-2" />
                  Alerts
                </Button>
                <Button size="sm">Generate Report</Button>
              </div>
            </div>
            <main className="flex-1 overflow-auto">
              <Dashboard />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
