
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4">
      <motion.div
        className="relative w-full max-w-sm aspect-[4/3] bg-gradient-to-br from-red-100 to-pink-100 shadow-2xl rounded-lg cursor-pointer flex items-center justify-center"
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        animate={isOpen ? { scale: 1.5, opacity: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 border-4 border-red-300 rounded-lg" />

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-300 to-red-200 origin-top z-20 rounded-t-lg"
          style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
          animate={isOpen ? { rotateX: 180 } : {}}
          transition={{ duration: 0.6 }}
        />

        {/* Wax Seal - Using inline SVG */}
        <motion.div
          className="absolute z-30"
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-700 to-red-900 shadow-xl flex items-center justify-center border-4 border-red-800">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-red-200" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <div className="text-white font-serif text-2xl z-10 mt-8 drop-shadow-lg">
        For You ❤️
      </div>

      {!isOpen && (
        <motion.p
          className="mt-6 text-white text-lg font-serif italic drop-shadow-md text-center max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Tap the seal to open your surprise...
        </motion.p>
      )}
    </div>
  );
};

export default Envelope;
