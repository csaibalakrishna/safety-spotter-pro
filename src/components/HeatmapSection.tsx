import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, MapPin } from "lucide-react";

const HeatmapSection = () => {
  return (
    <Card className="border-warning/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-warning to-hazard-orange text-white">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Heatmap Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-ocean-light/10 border-2 border-dashed border-ocean-blue/30 rounded-lg p-8 text-center">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-ocean-blue" />
          <h3 className="text-lg font-semibold mb-2">Interactive Heatmap</h3>
          <p className="text-muted-foreground mb-4">
            Real-time visualization of hazard hotspots and risk zones
          </p>
          <div className="bg-muted/50 rounded-md p-4 text-sm">
            <strong>Integration Ready:</strong> This component will display an interactive heatmap
            showing hazard density, severity levels, and risk zones based on reported incidents.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeatmapSection;