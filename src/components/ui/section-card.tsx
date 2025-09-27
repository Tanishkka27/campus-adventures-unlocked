import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, ChevronRight } from "lucide-react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function SectionCard({
  title,
  subtitle,
  icon: Icon,
  onClick,
  className,
  children
}: SectionCardProps) {
  const isClickable = !!onClick;
  
  return (
    <Card className={cn(
      "transition-all duration-300 animate-slide-up",
      isClickable && "hover:scale-[1.02] hover:shadow-card cursor-pointer group",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          {isClickable && (
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </CardHeader>
      
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  );
}