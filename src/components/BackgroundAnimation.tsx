import { motion } from "framer-motion";
import React from 'react';

export function TriangleAnimation() {
    return (
        <div className="flex w-full h-full">
            <motion.svg 
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
            >
              <motion.polygon
                points="50,0 100,80 0,80"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: [0,0,1,1,1], pathOffset: [1,0,0,0,1] }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                    times: [0, 0.1, 0.3, 0.8, 1]
                }}
                strokeWidth={1}
                strokeDasharray="0 1"
                stroke="white"
                fill="none"
              />
            </motion.svg>
        </div>
    )
}

export function HorizontalLine() {
    return (
        <div className="w-full pt-2">
            <motion.svg 
                height="100%"
                width="100%"
                viewBox="0 0 100 1"
            >
            <motion.line
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: [0,0,1,1,1], pathOffset: [1,0,0,0,1] }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                    times: [0, 0.1, 0.3, 0.8, 1]
                }}
                strokeWidth={1}
                strokeDasharray="0 1"
                stroke="white"
                fill="none"
            />
            </motion.svg>
        </div>
    )
}


