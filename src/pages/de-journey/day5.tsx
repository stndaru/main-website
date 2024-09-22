import Image from "next/image";
import { Plus_Jakarta_Sans, Borel } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
// import styles from '../../styles/modules/day1.module.css';
import { useState, useEffect } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`flex h-screen flex-col items-center justify-between bg-zinc-950 ${plusJakartaSans.className}`}
      >
        <div className="flex w-full h-full z-10 items-center content-center justify-center gap-4">
          <div className="relative w-full max-w-xl min-w-64 h-[50vh]">
            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 h-fit bg-zinc-900 bg-[radial-gradient(circle_at_top_left,_#27272a_20%,_transparent_90%)] p-8 rounded-lg border-2 border-zinc-800">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold">Exploration</h3>
                <p className="text-sm text-zinc-400">
                  Learning how to create a responsive and beautiful card with
                  these dotted backgrounds
                </p>
              </div>
            </div>
            <div className="absolute top-[15%] sm:top-[10%] left-[50%] w-[35%] min-w-[100px] aspect-square bg-[radial-gradient(circle_at_center,_#e4874a_20%,_transparent_30%)] bg-[length:8px_8px] bg-center [mask:radial-gradient(black_10%,transparent_70%)]"></div>
            <div className="absolute top-[40%] sm:top-[35%] left-[15%] w-[45%] min-w-[200px] aspect-square bg-[radial-gradient(circle_at_center,_#e4874a_20%,_transparent_30%)] bg-[length:8px_8px] bg-center [mask:radial-gradient(black_10%,transparent_70%)]"></div>
          </div>
        </div>

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
