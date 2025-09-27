import { ChallengeCard } from "@/components/ui/challenge-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const challenges = [
  {
    id: 1,
    title: "Chaiadda Adventure",
    description: "Figure out which cardio equipment is being described",
    points: 50,
    difficulty: "easy" as const,
    location: "Chaiadda",
    href: "https://p4rths1105.github.io/chai-adda-game/",
  },
  {
    id: 2,
    title: "Chess",
    description: "Test your knowledge about the library's resources",
    points: 80,
    difficulty: "medium" as const,
    location: "Learners Arena",
    href: "https://tanishkka27.github.io/Riddle/",
  },
  {
    id: 3,
    title: "Dorm Life Mystery",
    description: "A riddle about residence hall living",
    points: 70,
    difficulty: "medium" as const,
    location: "Residence Halls",
    href: "/challenges/3",
  },
];

export function DailyChallenges() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-secondary border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">
                Daily Challenges
              </CardTitle>
            </div>
            <Badge variant="outline" className="flex items-center gap-1 text-primary border-primary">
              <Clock className="h-3 w-3" />
              Resets in 12h
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            points={challenge.points}
            difficulty={challenge.difficulty}
            location={challenge.location}
            onStart={() => window.open(challenge.href, '_blank')}
          />
        ))}
      </div>
    </div>
  );
}