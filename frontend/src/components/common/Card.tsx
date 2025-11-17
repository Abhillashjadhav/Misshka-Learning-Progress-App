import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'activity' | 'achievement';
  hoverable?: boolean;
}

export const Card = ({
  children,
  onClick,
  className = '',
  variant = 'default',
  hoverable = true
}: CardProps) => {
  const variants = {
    default: 'bg-white rounded-2xl shadow-lg',
    activity: 'activity-card',
    achievement: 'bg-white rounded-4xl shadow-achievement'
  };

  return (
    <motion.div
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverable ? 'hover:shadow-2xl transition-shadow duration-300' : ''}
        ${className}
      `}
      whileHover={hoverable ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};
