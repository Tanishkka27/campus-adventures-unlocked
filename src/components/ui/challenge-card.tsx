import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  points: number;
  difficulty: "easy" | "medium" | "hard";
  location: string;
  className?: string;
  onStart?: () => void;
}

const difficultyColors = {
  easy: "bg-difficulty-easy text-white",
  medium: "bg-difficulty-medium text-black",
  hard: "bg-difficulty-hard text-white",
};

const difficultyGradients = {
  easy: "from-difficulty-easy/20 to-difficulty-easy/5",
  medium: "from-difficulty-medium/20 to-difficulty-medium/5", 
  hard: "from-difficulty-hard/20 to-difficulty-hard/5",
};

export function ChallengeCard({
  title,
  description,
  points,
  difficulty,
  location,
  className,
  onStart
}: ChallengeCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:scale-[1.02] hover:shadow-card group animate-slide-up",
      `bg-gradient-to-br ${difficultyGradients[difficulty]} border-border/50`,
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge className={cn("text-xs font-semibold", difficultyColors[difficulty])}>
                {difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-warning">
                <Star className="h-3 w-3 fill-current" />
                <span className="text-sm font-semibold">{points}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>
        
        <Button 
          onClick={onStart}
          variant="default"
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          Start Challenge →
        </Button>
      </CardContent>
    </Card>
  );
}