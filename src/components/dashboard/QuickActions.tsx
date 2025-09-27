import { SectionCard } from "@/components/ui/section-card";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Trophy, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      <SectionCard
        title="Explore Campus"
        subtitle="Find and complete new challenges"
        icon={Map}
        onClick={() => navigate("/map")}
      />
      
      <SectionCard
        title="View Leaderboard"
        subtitle="See how you rank against others"
        icon={Trophy}
        onClick={() => navigate("/leaderboard")}
      />
      
      <div className="lg:col-span-2">
        <SectionCard
          title="Recent Achievements"
          subtitle=""
          icon={Award}
        >
          <Card className="bg-muted/30 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex flex-col items-center justify-center h-20">
                <Award className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No achievements yet</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Complete challenges to earn your first achievement!
                </p>
              </div>
            </CardContent>
          </Card>
        </SectionCard>
      </div>
    </div>
  );
}