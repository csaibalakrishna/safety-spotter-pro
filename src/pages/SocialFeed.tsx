import Header from "@/components/Header";
import SocialFeed from "@/components/SocialFeed";
import { TrendingUp, MessageCircle, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SocialFeedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-ocean-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Social Media Analytics
            </h1>
            <p className="text-lg opacity-90">
              AI-powered analysis of social media posts to detect ocean hazards 
              and track public sentiment about coastal safety.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <MessageCircle className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">1.2K</h3>
              <p className="text-sm text-muted-foreground">Posts Analyzed Today</p>
            </div>
            <div className="space-y-2">
              <BarChart3 className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold">87%</h3>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 text-warning mx-auto" />
              <h3 className="font-semibold">15</h3>
              <p className="text-sm text-muted-foreground">Trending Topics</p>
            </div>
            <div className="space-y-2">
              <Zap className="h-8 w-8 text-success mx-auto" />
              <h3 className="font-semibold">&lt;2min</h3>
              <p className="text-sm text-muted-foreground">Detection Speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="cursor-pointer hover:bg-hazard-red hover:text-white">
                  Emergency
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-warning hover:text-white">
                  Alert
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-hazard-orange hover:text-white">
                  Warning
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted hover:text-foreground">
                  All Platforms
                </Badge>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Export Data
                </Button>
                <Button variant="outline" size="sm">
                  Configure NLP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">🐦 Twitter</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">456</div>
                <div className="text-sm text-muted-foreground">Posts today</div>
              </div>
              
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">📘 Facebook</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">289</div>
                <div className="text-sm text-muted-foreground">Posts today</div>
              </div>
              
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">📺 YouTube</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">67</div>
                <div className="text-sm text-muted-foreground">Videos today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SocialFeed />
            
            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialFeedPage;