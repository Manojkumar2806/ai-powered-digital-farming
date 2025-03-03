
import { useEffect, useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from 'recharts';
import { cn } from '@/lib/utils';

interface ChartDisplayProps {
  data: any[];
  type?: 'area' | 'bar' | 'line';
  dataKey?: string;
  stroke?: string;
  fill?: string;
  height?: number;
  gradientFrom?: string;
  gradientTo?: string;
  xAxisDataKey?: string;
  className?: string;
  animate?: boolean;
}

const ChartDisplay = ({
  data,
  type = 'area',
  dataKey = 'value',
  stroke = '#4CAF50',
  fill = '#E7F3EF',
  height = 300,
  gradientFrom = '#4CAF50',
  gradientTo = 'rgba(76, 175, 80, 0.1)',
  xAxisDataKey = 'name',
  className,
  animate = true
}: ChartDisplayProps) => {
  const [animatedData, setAnimatedData] = useState<any[]>([]);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimatedData(data);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setAnimatedData(data);
    }
  }, [data, animate]);

  const renderChart = () => {
    const chartProps = {
      data: animatedData,
      margin: { top: 10, right: 10, left: 0, bottom: 0 },
    };

    switch (type) {
      case 'area':
        return (
          <AreaChart {...chartProps}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={gradientFrom} stopOpacity={0.8} />
                <stop offset="95%" stopColor={gradientTo} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey={xAxisDataKey} 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#888' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '0.5rem', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '10px 14px'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={stroke} 
              fillOpacity={1} 
              fill="url(#colorGradient)" 
              strokeWidth={2}
            />
          </AreaChart>
        );
      
      case 'bar':
        return (
          <BarChart {...chartProps}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={gradientFrom} stopOpacity={0.8} />
                <stop offset="100%" stopColor={gradientTo} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey={xAxisDataKey} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '0.5rem', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '10px 14px'
              }}
            />
            <Bar 
              dataKey={dataKey} 
              fill="url(#barGradient)" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        );
      
      case 'line':
        return (
          <LineChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey={xAxisDataKey} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '0.5rem', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '10px 14px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={stroke} 
              strokeWidth={2}
              dot={{ stroke: stroke, strokeWidth: 2, fill: 'white', r: 4 }}
              activeDot={{ stroke: stroke, strokeWidth: 2, fill: stroke, r: 6 }}
            />
          </LineChart>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartDisplay;
