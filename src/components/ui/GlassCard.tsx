
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderEffect?: boolean;
}

const GlassCard = ({
  children,
  className,
  hoverEffect = true,
  borderEffect = true,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative backdrop-blur-card overflow-hidden",
        "bg-white/10 dark:bg-black/20",
        "shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
        borderEffect && "border border-white/20 dark:border-white/10",
        hoverEffect && [
          "transition-all duration-300",
          "hover:shadow-[0_10px_40px_rgb(0,0,0,0.1)]",
          "hover:border-white/30 dark:hover:border-white/20",
          "hover:-translate-y-1"
        ],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
