import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Clock, AlertTriangle } from "lucide-react";

// Mock data - will be replaced with backend integration
const mockThreats = [
  {
    id: 1,
    location: "Mumbai Coastline",
    description: "Unusual tidal activity observed near Marine Drive",
    severity: "High",
    time: "2 hours ago",
    status: "Verified"
  },
  {
    id: 2,
    location: "Chennai Beach",
    description: "Strong undercurrents reported by local fishermen",
    severity: "Medium",
    time: "5 hours ago",
    status: "Under Review"
  },
  {
    id: 3,
    location: "Goa Shores",
    description: "Erosion patterns accelerating due to heavy waves",
    severity: "Medium",
    time: "1 day ago",
    status: "Verified"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High": return "bg-hazard-red text-white";
    case "Medium": return "bg-warning text-white";
    case "Low": return "bg-success text-white";
    default: return "bg-muted";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Verified": return "bg-success text-white";
    case "Under Review": return "bg-warning text-white";
    default: return "bg-muted";
  }
};

const ReportedThreats = () => {
  return (
    <Card className="border-hazard-red/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-hazard-red to-destructive text-white">
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Reported Threats
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {mockThreats.map((threat) => (
            <div key={threat.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ocean-blue" />
                  <span className="font-medium text-sm">{threat.location}</span>
                </div>
                <div className="flex gap-2">
                  <Badge className={getSeverityColor(threat.severity)}>
                    {threat.severity}
                  </Badge>
                  <Badge className={getStatusColor(threat.status)}>
                    {threat.status}
                  </Badge>
                </div>
              </div>
              
              <p className="text-sm text-foreground mb-3">{threat.description}</p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {threat.time}
                </div>
                <div className="flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  ID: #{threat.id.toString().padStart(4, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-md text-sm text-center">
          <strong>Backend Integration:</strong> This section will display real-time threats 
          fetched from your API endpoint with live updates and filtering capabilities.
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportedThreats;