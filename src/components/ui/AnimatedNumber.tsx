
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  formatFn?: (value: number) => string;
  className?: string;
}

const AnimatedNumber = ({
  value,
  duration = 1500,
  formatFn = (value) => value.toLocaleString(),
  className,
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);
  
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      
      const percentage = Math.min(progress / duration, 1);
      const easedPercentage = easeOutCubic(percentage);
      
      const currentValue = Math.floor(easedPercentage * value);
      setDisplayValue(currentValue);
      
      if (percentage < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [value, duration]);
  
  // Easing function
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };
  
  return (
    <span className={cn("tabular-nums", className)}>
      {formatFn(displayValue)}
    </span>
  );
};

export default AnimatedNumber;
