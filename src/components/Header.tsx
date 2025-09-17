import { Button } from "@/components/ui/button";
import { Waves, Shield, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Waves className="h-8 w-8 text-ocean-blue" />
              <Shield className="h-4 w-4 text-accent absolute -bottom-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-ocean-blue">SurakshaNet</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Ocean Hazard Reporting Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#report" className="text-sm font-medium hover:text-ocean-blue transition-colors">
              Report Threat
            </a>
            <a href="#heatmap" className="text-sm font-medium hover:text-ocean-blue transition-colors">
              Heatmap
            </a>
            <a href="#threats" className="text-sm font-medium hover:text-ocean-blue transition-colors">
              Active Threats
            </a>
            <a href="#feed" className="text-sm font-medium hover:text-ocean-blue transition-colors">
              Social Feed
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white">
              Login
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Emergency Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#report" className="block px-4 py-2 text-sm font-medium hover:bg-ocean-light/10 rounded">
              Report Threat
            </a>
            <a href="#heatmap" className="block px-4 py-2 text-sm font-medium hover:bg-ocean-light/10 rounded">
              Heatmap
            </a>
            <a href="#threats" className="block px-4 py-2 text-sm font-medium hover:bg-ocean-light/10 rounded">
              Active Threats
            </a>
            <a href="#feed" className="block px-4 py-2 text-sm font-medium hover:bg-ocean-light/10 rounded">
              Social Feed
            </a>
            <div className="flex gap-2 px-4 pt-2">
              <Button variant="outline" size="sm" className="flex-1">Login</Button>
              <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">Emergency</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;