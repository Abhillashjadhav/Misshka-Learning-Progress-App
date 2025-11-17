import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'purple' | 'gold' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'child';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white',
    gold: 'bg-gold-400 hover:bg-gold-500 text-gray-900',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm min-w-0 min-h-0',
    medium: 'px-6 py-3 text-base min-w-0 min-h-0',
    large: 'px-8 py-4 text-lg min-w-0 min-h-0',
    child: 'btn-child' // Uses our Tailwind custom class
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${size === 'child' ? sizes.child : `${sizes[size]} rounded-xl`}
        ${variants[variant]}
        font-bold
        shadow-lg hover:shadow-xl
        transform transition-all duration-200
        active:scale-95 hover:scale-105
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {children}
    </motion.button>
  );
};
