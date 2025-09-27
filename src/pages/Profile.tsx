import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Trophy, Target, Flame } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-background p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <User className="h-8 w-8 text-primary" />
            Profile
          </h1>
          <p className="text-muted-foreground">Your campus adventure progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 bg-gradient-primary border-primary/20">
            <CardContent className="p-6 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="/api/placeholder/96/96" />
                <AvatarFallback className="bg-white text-primary text-2xl font-bold">
                  T
                </AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-white mb-2">Tanishkka</h2>
              <Badge className="bg-white/20 text-white border-white/20 mb-4">
                Level 2 Explorer
              </Badge>
              <div className="space-y-2 text-white/90">
                <p className="text-sm">Campus: University Demo</p>
                <p className="text-sm">Member since: September 2025</p>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-card-highlight border-border">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-warning" />
                  <p className="text-2xl font-bold text-foreground">300</p>
                  <p className="text-sm text-muted-foreground">Total XP</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card-highlight border-border">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 mx-auto mb-2 text-success" />
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card-highlight border-border">
                <CardContent className="p-4 text-center">
                  <Flame className="h-8 w-8 mx-auto mb-2 text-warning" />
                  <p className="text-2xl font-bold text-foreground">0</p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card className="bg-card-highlight border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">No achievements unlocked yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete challenges to start earning achievements!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}