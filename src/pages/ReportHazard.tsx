import Header from "@/components/Header";
import HazardReportForm from "@/components/HazardReportForm";
import { AlertTriangle, Shield, Users } from "lucide-react";

const ReportHazard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-accent to-hazard-orange text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Report Ocean Hazard
            </h1>
            <p className="text-lg opacity-90">
              Help keep our coastal communities safe by reporting ocean hazards, unusual tides, 
              or dangerous conditions you observe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-ocean-blue" />
              <div>
                <div className="font-bold text-ocean-blue">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <div>
                <div className="font-bold text-accent">15K+</div>
                <div className="text-sm text-muted-foreground">Active Citizens</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-warning" />
              <div>
                <div className="font-bold text-warning">&lt;5min</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <HazardReportForm />
            
            {/* Additional Information */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-3 text-ocean-blue">What to Report:</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Unusual tidal patterns or unexpected high/low tides</li>
                <li>• Coastal erosion or unexpected shoreline changes</li>
                <li>• Dangerous currents or rip tides</li>
                <li>• Marine debris or oil spills</li>
                <li>• Unusual wave patterns or storm surge</li>
                <li>• Any immediate threats to coastal infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportHazard;