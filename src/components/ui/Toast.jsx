import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

/**
 * Toast popup component for success/error feedback.
 * Usage: <Toast type="success" | "error" message="..." onClose={() => setToast(null)} />
 */
export const Toast = ({ type = 'success', message, onClose }) => {
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === 'success';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="fixed top-6 left-1/2 z-[999] -translate-x-1/2 w-full max-w-md px-4"
      >
        <div className={`
          glass-card flex items-start gap-4 p-5 rounded-2xl border
          ${isSuccess
            ? 'border-green-500/30 shadow-[0_0_30px_rgba(74,222,128,0.15)]'
            : 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)]'
          }
        `}>
          {/* Icon */}
          <div className={`mt-0.5 shrink-0 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
            {isSuccess
              ? <CheckCircle size={28} />
              : <XCircle size={28} />
            }
          </div>

          {/* Text */}
          <div className="flex-grow">
            <p className="font-display font-semibold text-white text-base">
              {isSuccess ? 'Message Sent!' : 'Something went wrong'}
            </p>
            <p className="text-gray-400 text-sm mt-1">{message}</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors shrink-0 -mt-1 -mr-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 5, ease: 'linear' }}
          style={{ originX: 0 }}
          className={`h-0.5 mt-1 rounded-full ${isSuccess ? 'bg-green-400' : 'bg-red-400'}`}
        />
      </motion.div>
    </AnimatePresence>
  );
};
