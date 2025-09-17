import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Upload, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HazardReportForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    image: null as File | null
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.location || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Integrate with backend API
    toast({
      title: "Report Submitted",
      description: "Your hazard report has been submitted for review.",
    });
    
    setFormData({ location: "", description: "", image: null });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  return (
    <Card className="border-accent/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-ocean-blue to-primary text-white">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Report a Threat
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="location" className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4" />
              Location *
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter location or address"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-sm font-medium">
              Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe the hazard in detail..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 min-h-[100px]"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="image" className="flex items-center gap-2 text-sm font-medium">
              <Upload className="h-4 w-4" />
              Upload Image (Optional)
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1"
            />
            {formData.image && (
              <p className="text-sm text-muted-foreground mt-1">
                Selected: {formData.image.name}
              </p>
            )}
          </div>
          
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HazardReportForm;