import Image from 'next/image'
import { Plus_Jakarta_Sans, Borel } from 'next/font/google';
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent"
// import styles from '../../styles/modules/day1.module.css';
import { useState, useEffect } from 'react';


const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin']
  });

  const borel = Borel({
    subsets: ['latin'],
    weight: ['400']
  });

export default function Home() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
        setX(event.clientX);
        setY(event.clientY);
        };

        // Attach the event listener to the entire window
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component is unmounted
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };

    }, []); // Empty array means this effect runs once on mount and cleanup on unmount


    return (
    <>
        <HeadComponent />
        <div className={`flex h-screen flex-col items-center justify-between bg-zinc-950 ${plusJakartaSans.className}`}>

            
            <div className='flex w-full h-full z-10 items-center content-center justify-center gap-4'>
                <div className={`text-5xl/loose ${borel.className}`}>
                    <div className='relative w-[121px] h-[80px] pointer-events-none'>
                        <span className='absolute z-20 shine-text'>hello</span>
                        <span className='absolute z-10 text-[hsl(0_0%_12%)]'>hello</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .shine-text {
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    background-image:
                        radial-gradient(circle at calc(${x}px) calc(${y}px), hsl(0 0% 100% / 0.5), transparent 5vmin);
                    background-attachment: fixed;
                }
                `}
            </style>
            
            {/* Background Only */}
            <div className='absolute top-0 w-full h-full'>
                <motion.div 
                    className="bg-repeat bg-fixed w-full h-full heropattern-graphpaper-zinc-900"
                    animate={{
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                />
            </div>

        </div>
    </>
    )
}
