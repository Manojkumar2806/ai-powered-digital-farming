
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const DashboardCard = ({ title, children, className, icon }: DashboardCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl border bg-card p-6 shadow-sm transition-all",
        "hover:shadow-md hover:border-farm-green/20",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg">{title}</h3>
        {icon && <div className="text-farm-green-dark">{icon}</div>}
      </div>
      {children}
    </div>
  );
};

export default DashboardCard;
