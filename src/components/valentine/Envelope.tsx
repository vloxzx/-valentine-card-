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
        className="relative w-full max-w-sm aspect-[4/3] cursor-pointer flex items-center justify-center"
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        animate={isOpen ? { scale: 1.5, opacity: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Envelope Body */}
        <div 
          className="absolute inset-0 rounded-lg shadow-2xl"
          style={{ 
            background: 'linear-gradient(135deg, #f8cdcd 0%, #fce4ec 100%)',
            border: '3px solid #e57373'
          }}
        />

        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 origin-top z-20 rounded-t-lg"
          style={{ 
            clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            background: 'linear-gradient(to bottom, #ef5350 0%, #f48fb1 100%)',
            border: '2px solid #e57373'
          }}
          animate={isOpen ? { rotateX: 180 } : {}}
          transition={{ duration: 0.6 }}
        />

        {/* Wax Seal */}
        <motion.div
          className="absolute z-30"
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '120px', height: '120px' }}
        >
          <div 
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #c62828 0%, #d32f2f 50%, #b71c1c 100%)',
              border: '5px solid #8b0000',
              boxShadow: '0 8px 24px rgba(139, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: '60px', height: '60px' }} fill="#ffcdd2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <div 
        className="font-serif text-2xl md:text-3xl z-10 mt-8"
        style={{ 
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        For You ❤️
      </div>

      {!isOpen && (
        <motion.p
          className="mt-6 text-lg md:text-xl font-serif italic text-center max-w-md px-4"
          style={{ 
            color: '#fff',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
          }}
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
