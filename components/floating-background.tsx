'use client';

import { motion } from 'framer-motion';

export function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#7058e3]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-80 h-80 bg-[#5ee5b3]/8 rounded-full blur-3xl"
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#7058e3]/6 rounded-full blur-3xl"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 10,
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-96 h-96 bg-[#5ee5b3]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -35, 15, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 15,
        }}
      />
    </div>
  );
}
