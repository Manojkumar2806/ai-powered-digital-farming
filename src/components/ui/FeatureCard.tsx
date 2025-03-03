
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  className?: string;
  buttonText?: string;
  buttonHref?: string;
  isMain?: boolean;
}

const FeatureCard = ({
  title,
  description,
  icon,
  image,
  className,
  buttonText = "Learn More",
  buttonHref = "#",
  isMain = false,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-300",
        "hover:shadow-lg hover:border-farm-green/30",
        isMain 
          ? "p-6 md:p-8 bg-farm-green text-white" 
          : "p-6 bg-card",
        isHovered && !isMain && "bg-gray-50 dark:bg-gray-900",
        isHovered && isMain && "bg-farm-green-dark",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="absolute inset-0 opacity-10 z-0">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="relative z-10">
        <div 
          className={cn(
            "flex items-center justify-center w-12 h-12 mb-4 rounded-lg transition-transform duration-500",
            "group-hover:scale-110",
            isMain 
              ? "bg-white text-farm-green" 
              : "bg-farm-green/10 text-farm-green"
          )}
        >
          {icon}
        </div>
        
        <h3 className={cn(
          "font-display text-xl font-medium mb-3 transition-all duration-300",
          "group-hover:translate-x-1"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "mb-6 text-balance line-clamp-3",
          isMain ? "text-white/80" : "text-muted-foreground"
        )}>
          {description}
        </p>
        
        <Button 
          asChild
          variant={isMain ? "secondary" : "outline"} 
          className={cn(
            "transition-all duration-300",
            "group-hover:translate-x-1"
          )}
        >
          <a href={buttonHref}>
            {buttonText}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
