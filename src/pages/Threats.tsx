import Header from "@/components/Header";
import ReportedThreats from "@/components/ReportedThreats";
import { Eye, Filter, Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Threats = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-hazard-red to-destructive text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eye className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Active Threats
            </h1>
            <p className="text-lg opacity-90">
              Monitor all reported ocean hazards and threats in real-time. 
              Stay informed about conditions affecting coastal safety.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search threats by location or description..." 
                  className="pl-10"
                />
              </div>
              
              {/* Filters */}
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="cursor-pointer hover:bg-hazard-red hover:text-white">
                  High Risk
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-warning hover:text-white">
                  Medium Risk
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-success hover:text-white">
                  Low Risk
                </Badge>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-hazard-red">8</div>
                <div className="text-sm text-muted-foreground">High Risk</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-warning">23</div>
                <div className="text-sm text-muted-foreground">Medium Risk</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-success">45</div>
                <div className="text-sm text-muted-foreground">Under Review</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-ocean-blue">156</div>
                <div className="text-sm text-muted-foreground">Total Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats List Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ReportedThreats />
            
            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                Load More Threats
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Threats;