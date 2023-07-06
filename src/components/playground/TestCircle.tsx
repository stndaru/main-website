import { motion } from "framer-motion";
import React from 'react';

export default function TestCircle() {
    return (
        <div className='flex w-full h-full blur-2xl'>
            <motion.svg 
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
            >
              <motion.circle
                cx="50%"
                cy="50%"
                r="80"
                fill="white"
                fill-opacity="0.05"
                animate={{
                  scale: [1, 1, 1],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </motion.svg>
          </div>
    )
}