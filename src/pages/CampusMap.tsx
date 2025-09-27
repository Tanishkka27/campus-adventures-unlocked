import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, MapPin } from "lucide-react";

export default function CampusMap() {
  return (
    <div className="min-h-screen bg-gradient-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Map className="h-8 w-8 text-primary" />
            Campus Map
          </h1>
          <p className="text-muted-foreground">Explore your campus and discover new challenges</p>
        </div>

        <Card className="bg-card-highlight border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Interactive Campus Map
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center text-muted-foreground">
              <Map className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Map Coming Soon</h3>
              <p>Interactive campus map with challenge locations will be available soon.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}