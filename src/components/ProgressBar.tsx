import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  label: string;
  max?: number;
  className?: string;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  max = 100,
  className = '',
  color = 'bg-primary',
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs font-medium">{percentage.toFixed(0)}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;