import { motion } from 'framer-motion';
import { Nova } from './Nova';

interface NovaDialogProps {
  message: string;
  emotion?: 'happy' | 'excited' | 'thinking' | 'celebrating';
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const NovaDialog = ({
  message,
  emotion = 'happy',
  onClose,
  showCloseButton = false
}: NovaDialogProps) => {
  return (
    <motion.div
      className="flex items-start gap-6 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Nova Character */}
      <Nova emotion={emotion} size="medium" />

      {/* Speech Bubble */}
      <div className="flex-1">
        <motion.div
          className="nova-speech max-w-md"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
            {message}
          </p>

          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="mt-4 btn-child-purple px-6 py-3 min-w-0 min-h-0 text-lg"
            >
              Got it!
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
