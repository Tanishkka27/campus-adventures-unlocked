import { StatCard } from "@/components/ui/stat-card";
import { Trophy, Target, Flame, Hash } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Level"
        value="2"
        subtitle="300 Total XP"
        icon={Trophy}
        variant="primary"
      />
      
      <StatCard
        title="Completed"
        value="2"
        subtitle="Challenges"
        icon={Target}
        variant="success"
      />
      
      <StatCard
        title="Streak"
        value="0 days"
        subtitle="Daily challenge streak"
        icon={Flame}
        variant="warning"
      />
      
      <StatCard
        title="Rank"
        value="#12"
        subtitle="Global Ranking"
        icon={Hash}
        variant="default"
      />
    </div>
  );
}