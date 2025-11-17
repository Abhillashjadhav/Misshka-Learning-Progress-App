import { motion } from 'framer-motion';

interface NovaProps {
  emotion?: 'happy' | 'excited' | 'thinking' | 'celebrating';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Nova = ({ emotion = 'happy', size = 'medium', className = '' }: NovaProps) => {
  const sizes = {
    small: 'w-24 h-24',
    medium: 'w-40 h-40',
    large: 'w-56 h-56'
  };

  const getAnimation = () => {
    switch (emotion) {
      case 'happy':
        return { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity } };
      case 'excited':
        return { y: [0, -20, 0], rotate: [0, 5, -5, 0], transition: { duration: 1, repeat: Infinity } };
      case 'thinking':
        return { x: [0, 5, -5, 0], transition: { duration: 1.5, repeat: Infinity } };
      case 'celebrating':
        return { scale: [1, 1.1, 1], rotate: [0, 10, -10, 0], transition: { duration: 0.8, repeat: Infinity } };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`${sizes[size]} ${className} relative flex items-center justify-center`}
      animate={getAnimation()}
    >
      {/* Nova's Body */}
      <div className="relative w-full h-full">
        {/* Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-nova" />

        {/* Horn */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[40px] border-b-gold-400 filter drop-shadow-lg" />
          {/* Sparkles on horn */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-star-pulse" />
          <div className="absolute top-4 right-0 w-1.5 h-1.5 bg-white rounded-full animate-star-pulse animation-delay-200" />
        </div>

        {/* Mane */}
        <div className="absolute -top-2 -right-2 w-12 h-12">
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-80" />
          <div className="absolute top-2 -right-1 w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60" />
        </div>

        {/* Eyes */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-gray-900 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-900 rounded-full" />

        {/* Happy mouth */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-gray-900 rounded-full" />

        {/* Sparkles around Nova */}
        <motion.div
          className="absolute -top-2 -left-2 w-3 h-3 bg-gold-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 -right-3 w-2 h-2 bg-gold-300 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-3 w-2.5 h-2.5 bg-gold-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.div>
  );
};
