import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../types';
import { ChevronDown } from 'lucide-react';

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-10 bottom-0 left-6 w-px bg-neutral-200"></div>
      )}
      
      {/* Timeline content */}
      <motion.div 
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo/bullet */}
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex items-center justify-center">
            <img 
              src={experience.logo} 
              alt={experience.company} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Content */}
        <motion.div 
          className={`flex-1 bg-white rounded-lg p-5 shadow-sm mb-8 cursor-pointer ${isExpanded ? 'ring-2 ring-primary/10' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-display font-bold text-lg text-neutral-800">{experience.role}</h3>
              <p className="text-accent font-medium">{experience.company}</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-neutral-500 mr-2">{experience.duration}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} className="text-neutral-400" />
              </motion.div>
            </div>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-neutral-600">{experience.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;