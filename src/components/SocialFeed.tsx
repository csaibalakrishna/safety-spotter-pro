import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Share2, TrendingUp, ExternalLink } from "lucide-react";

// Mock social media data - will be replaced with NLP integration
const mockPosts = [
  {
    id: 1,
    platform: "Twitter",
    content: "Massive waves hitting the Mumbai shoreline! Stay safe everyone #OceanAlert #Mumbai",
    sentiment: "Alert",
    engagement: 142,
    time: "3m ago"
  },
  {
    id: 2,
    platform: "Facebook",
    content: "Local fishermen reporting unusual currents near Vizag port. Authorities investigating.",
    sentiment: "Warning",
    engagement: 89,
    time: "15m ago"
  },
  {
    id: 3,
    platform: "YouTube",
    content: "Live footage: High tide flooding in Kochi markets - evacuation in progress",
    sentiment: "Emergency",
    engagement: 256,
    time: "1h ago"
  }
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "Emergency": return "bg-hazard-red text-white";
    case "Alert": return "bg-warning text-white";
    case "Warning": return "bg-hazard-orange text-white";
    default: return "bg-muted";
  }
};

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "Twitter": return "🐦";
    case "Facebook": return "📘";
    case "YouTube": return "📺";
    default: return "📱";
  }
};

const SocialFeed = () => {
  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary to-ocean-blue text-white">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Social Feed Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <div key={post.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{getPlatformIcon(post.platform)}</span>
                  <span className="font-medium text-sm">{post.platform}</span>
                  <Badge variant="outline" className="text-xs">
                    {post.time}
                  </Badge>
                </div>
                <Badge className={getSentimentColor(post.sentiment)}>
                  {post.sentiment}
                </Badge>
              </div>
              
              <p className="text-sm text-foreground mb-3 leading-relaxed">{post.content}</p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {post.engagement}
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-3 w-3" />
                    Share
                  </div>
                </div>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-md text-sm text-center">
          <strong>NLP Integration:</strong> This feed analyzes social media posts using 
          natural language processing to detect ocean hazard mentions and sentiment analysis.
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialFeed;