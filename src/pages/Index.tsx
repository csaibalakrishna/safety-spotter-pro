import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp, MapPin, Eye, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
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
              <Link to="/report">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                  Report Emergency <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/threats">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ocean-blue px-8">
                  View Dashboard
                </Button>
              </Link>
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

      {/* Platform Features */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Report Hazard */}
            <Link to="/report" className="group">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group-hover:border-accent">
                <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <AlertTriangle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">Report a Threat</h3>
                <p className="text-muted-foreground mb-4">
                  Submit detailed reports of ocean hazards with location, description, and images for immediate response.
                </p>
                <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Heatmap */}
            <Link to="/heatmap" className="group">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group-hover:border-warning">
                <div className="bg-warning/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-warning/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-warning transition-colors">Heatmap Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Visualize hazard hotspots and risk zones with real-time data aggregation and AI-powered insights.
                </p>
                <ArrowRight className="h-5 w-5 text-warning group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Active Threats */}
            <Link to="/threats" className="group">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group-hover:border-hazard-red">
                <div className="bg-hazard-red/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-hazard-red/20 transition-colors">
                  <Eye className="h-8 w-8 text-hazard-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-hazard-red transition-colors">Active Threats</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor all reported threats in real-time with status tracking, severity levels, and verification updates.
                </p>
                <ArrowRight className="h-5 w-5 text-hazard-red group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Social Feed */}
            <Link to="/social-feed" className="group">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group-hover:border-ocean-blue">
                <div className="bg-ocean-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-ocean-blue/20 transition-colors">
                  <Users className="h-8 w-8 text-ocean-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-ocean-blue transition-colors">Social Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered analysis of social media posts to detect hazard mentions and track public sentiment.
                </p>
                <ArrowRight className="h-5 w-5 text-ocean-blue group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
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
                <li><Link to="/report" className="hover:text-accent">Report Hazard</Link></li>
                <li><Link to="/heatmap" className="hover:text-accent">View Heatmap</Link></li>
                <li><Link to="/threats" className="hover:text-accent">Active Threats</Link></li>
                <li><Link to="/social-feed" className="hover:text-accent">Social Feed</Link></li>
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
