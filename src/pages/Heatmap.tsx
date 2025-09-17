import Header from "@/components/Header";
import HeatmapSection from "@/components/HeatmapSection";
import { TrendingUp, MapPin, Zap } from "lucide-react";

const Heatmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-warning to-hazard-orange text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hazard Heatmap
            </h1>
            <p className="text-lg opacity-90">
              Real-time visualization of ocean hazard hotspots and risk zones 
              based on reported incidents and AI analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <MapPin className="h-8 w-8 text-warning mx-auto" />
              <h3 className="font-semibold">Risk Zones</h3>
              <p className="text-sm text-muted-foreground">Identify high-risk coastal areas</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 text-hazard-orange mx-auto" />
              <h3 className="font-semibold">Trend Analysis</h3>
              <p className="text-sm text-muted-foreground">Track hazard patterns over time</p>
            </div>
            <div className="space-y-2">
              <Zap className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground">Live data from citizen reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heatmap Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <HeatmapSection />
            
            {/* Legend and Instructions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold mb-3 text-warning">Risk Level Legend</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-hazard-red rounded"></div>
                    <span>High Risk - Immediate attention required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-warning rounded"></div>
                    <span>Medium Risk - Monitor closely</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-success rounded"></div>
                    <span>Low Risk - Normal conditions</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold mb-3 text-ocean-blue">How It Works</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Aggregates citizen reports in real-time</li>
                  <li>• AI algorithms analyze hazard patterns</li>
                  <li>• Historical data improves predictions</li>
                  <li>• Updates every 5 minutes automatically</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heatmap;