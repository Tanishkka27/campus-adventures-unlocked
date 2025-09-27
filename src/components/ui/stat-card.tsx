import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

const variants = {
  default: "bg-card-highlight border-border",
  primary: "bg-gradient-primary border-primary/20",
  success: "bg-gradient-to-br from-success/20 to-success/10 border-success/20",
  warning: "bg-gradient-to-br from-warning/20 to-warning/10 border-warning/20",
};

const iconVariants = {
  default: "text-muted-foreground",
  primary: "text-white",
  success: "text-success",
  warning: "text-warning",
};

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  variant = "default",
  className 
}: StatCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:scale-105 hover:shadow-card animate-slide-up",
      variants[variant],
      className
    )}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1 min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{title}</p>
            <p className="text-lg sm:text-2xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
            )}
          </div>
          <Icon className={cn("h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 ml-2", iconVariants[variant])} />
        </div>
      </CardContent>
    </Card>
  );
}