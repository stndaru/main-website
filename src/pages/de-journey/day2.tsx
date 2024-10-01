import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
// import styles from '../../styles/modules/day1.module.css';
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setX(event.clientX);
      setY(event.clientY);
    };

    // Attach the event listener to the entire window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      <HeadComponent />
      <div
        className={`flex h-screen flex-col items-center justify-between bg-zinc-950 ${inter.className}`}
      >
        <div className="flex w-full h-full z-10 items-center content-center justify-center gap-4">
          <div className="flex flex-col relative bg-gradient-to-b from-[hsl(0_0%_12%)] to-[hsl(0_0%_8%)] w-20% h-fit transition-[background 0.1s] rounded-[12px] p-8 gap-4 group shadow-inner shadow-slate-500/10">
            {/* <div className='absolute -z-10 inset-0 w-[102%] h-[103%] -top-[1.5%] -left-[1%] rounded-[14px] bg-transparent group-hover:bg-[hsla(0,0%,50%,0.5)] transition-colors duration-300'></div> */}
            <div className="absolute -z-20 inset-0 w-[102%] h-[103%] -top-[1.5%] -left-[1%] rounded-[14px] pointer-events-none blud-md shine"></div>
            <h3 className="text-lg font-bold">Card with Shining Border</h3>
            <div>
              <p>Mouse X: {x}</p>
              <p>Mouse Y: {y}</p>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .shine {
              background: radial-gradient(
                  circle at calc(${x} * 1px) calc(${y} * 1px),
                  hsl(0 0% 100% / 0.5),
                  transparent 15vmin
                ),
                transparent;
              background-attachment: fixed;
              pointer-events: none;
            }
          `}
        </style>

        {/* Background Only */}
        <div className="absolute top-0 w-full h-full">
          <motion.div
            className="bg-repeat bg-fixed w-full h-full heropattern-graphpaper-zinc-900"
            animate={{
              opacity: [0.3, 0.6, 0.3],
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
  );
}
