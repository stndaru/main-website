import Image from "next/image";
import { Plus_Jakarta_Sans, Borel } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
// import styles from '../../styles/modules/day1.module.css';
import { useState, useEffect } from "react";

export default function MetallicButton() {
  return (
    <div className="relative p-4 rounded-3xl flex justify-center items-center flex-row gap-3">
      <button className="flex group relative h-10 w-36 p-[1.5px] rounded-full border border-neutral-400 bg-gradient-to-b from-neutral-100/50 from-30% via-neutral-600 to-pink-200 shadow-lg shadow-pink-100 active:shadow-md active:shadow-pink-100 active:scale-[99%] active:translate-y-[0.5px] overflow-hidden">
        <div className="z-10 h-full w-full rounded-full bg-gradient-to-b from-neutral-300 to-neutral-400 items-center flex justify-center"></div>
        <div className="top-0 bg-gradient-to-r from-transparent via-white/90 to-transparent w-32 absolute h-full -translate-x-28 group-hover:translate-x-[5.5rem] transition duration-700"></div>
        <div className="z-20 top-0 bg-gradient-to-r from-transparent via-pink-100/15 to-transparent w-32 absolute h-full translate-x-28 group-hover:-translate-x-24 transition duration-700"></div>
        <div className="z-20 top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-32 absolute h-full translate-x-28 group-hover:-translate-x-24 transition duration-700"></div>
      </button>
      <button className="group relative bg-gradient-to-b h-10 w-10 rounded-full from-neutral-700 to-neutral-400 p-[0.5px] shadow-sm shadow-neutral-400 active:shadow-sm active:scale-[97%] active:translate-y-[0.5px] items-center justify-center flex transition duration-75">
        <div className="absolute z-30 h-[98%] w-[98%] rounded-full bg-gradient-to-b from-neutral-100/90 via-transparent via-40% to-neutral-100/0 p-[1.5px] group-hover:rotate-[270deg] transition-all duration-500 ease-in-out"></div>
        <div className="absolute z-30 h-[98%] w-[98%] rounded-full bg-gradient-to-b from-transparent from-90% rotate-180 to-white p-[1.5px] group-hover:rotate-[270deg] transition-all duration-500 ease-in-out"></div>
        <div className="h-full z-20 w-full relative rounded-full bg-gradient-to-b from-neutral-100 via-neutral-600 to-neutral-300 p-[1.5px]"></div>
        <div className="absolute z-40 h-[90%] w-[90%] rounded-full bg-gradient-to-b from-neutral-300 to-neutral-500/90 justify-center items-center flex"></div>
      </button>
    </div>
  );
}
