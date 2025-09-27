import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DailyChallenges } from "@/components/dashboard/DailyChallenges";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            Good evening, Tanishkka! 
            <span className="text-2xl">👋</span>
          </h1>
          <p className="text-muted-foreground">Ready for today's campus adventures?</p>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Daily Challenges */}
        <DailyChallenges />

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </div>
  );
}