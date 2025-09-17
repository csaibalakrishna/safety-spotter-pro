import Header from "@/components/Header";
import HazardReportForm from "@/components/HazardReportForm";
import HeatmapSection from "@/components/HeatmapSection";
import ReportedThreats from "@/components/ReportedThreats";
import SocialFeed from "@/components/SocialFeed";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-blue via-primary to-ocean-blue/80 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Protecting Our Oceans Through
              <span className="text-accent"> Collective Action</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              SurakshaNet empowers coastal communities to report ocean hazards, 
              enabling rapid response and proactive disaster management through real-time data and AI analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                Report Emergency <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ocean-blue px-8">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-ocean-blue mx-auto" />
              <h3 className="text-2xl font-bold text-ocean-blue">24/7</h3>
              <p className="text-sm text-muted-foreground">Monitoring & Alerts</p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-accent mx-auto" />
              <h3 className="text-2xl font-bold text-accent">15K+</h3>
              <p className="text-sm text-muted-foreground">Active Citizens</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 text-warning mx-auto" />
              <h3 className="text-2xl font-bold text-warning">98%</h3>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="space-y-2">
              <MapPin className="h-8 w-8 text-success mx-auto" />
              <h3 className="text-2xl font-bold text-success">12</h3>
              <p className="text-sm text-muted-foreground">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Ocean Safety Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four integrated tools working together to keep our coastal communities safe and informed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Report Hazard Form */}
            <div id="report">
              <HazardReportForm />
            </div>

            {/* Heatmap Section */}
            <div id="heatmap">
              <HeatmapSection />
            </div>

            {/* Reported Threats */}
            <div id="threats">
              <ReportedThreats />
            </div>

            {/* Social Feed */}
            <div id="feed">
              <SocialFeed />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-bold">SurakshaNet</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Empowering coastal communities through technology-driven ocean hazard reporting and real-time disaster management.
              </p>
              <p className="text-xs opacity-75">
                Developed for Smart India Hackathon 2025 by Team CodeMonk
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#report" className="hover:text-accent">Report Hazard</a></li>
                <li><a href="#heatmap" className="hover:text-accent">View Heatmap</a></li>
                <li><a href="#threats" className="hover:text-accent">Active Threats</a></li>
                <li><a href="#feed" className="hover:text-accent">Social Feed</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Emergency</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="tel:108" className="hover:text-accent">Emergency: 108</a></li>
                <li><a href="tel:1077" className="hover:text-accent">Disaster: 1077</a></li>
                <li><a href="#" className="hover:text-accent">Coast Guard</a></li>
                <li><a href="#" className="hover:text-accent">Local Authority</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 SurakshaNet. Built for the safety of our coastal communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
