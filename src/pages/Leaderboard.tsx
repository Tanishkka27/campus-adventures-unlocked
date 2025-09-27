import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gradient-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="h-8 w-8 text-warning" />
            Leaderboard
          </h1>
          <p className="text-muted-foreground">See how you rank against other campus explorers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-card-highlight border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Daily Rankings
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-8">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">Coming Soon</p>
            </CardContent>
          </Card>

          <Card className="bg-card-highlight border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-accent" />
                Weekly Rankings
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-8">
              <Medal className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">Coming Soon</p>
            </CardContent>
          </Card>

          <Card className="bg-card-highlight border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                All-Time Rankings
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-8">
              <Award className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">Coming Soon</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}