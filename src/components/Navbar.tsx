
import React from 'react';
import { Shield, Bell, Settings, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Shield className="h-6 w-6 text-chainwatch-blue" />
          <span>Chain<span className="text-chainwatch-blue">Watch</span></span>
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
          <div className="border-l pl-2 ml-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
