import Image from "next/image";
import { Space_Mono, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
import styles from "../../styles/modules/day9.module.css";
import { useState, useEffect } from "react";

const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const SpaceMonoBold = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`flex flex-col items-center border-none w-full ${SpaceMono.className} ${styles.rootelement}`}
      >
        <div className="flex flex-col w-full h-[40vh] bg-white justify-center content-center text-center border-none">
          <p className={`text-lg text-rose-600 ${plusJakartaSans.className}`}>
            Mankind&apos;s Frontier
          </p>
          <h3 className="text-5xl text-zinc-900 font-bold">
            Project Andromeda
          </h3>
        </div>
        <div className="relative w-full h-fit items-center content-center justify-center">
          <div className="absolute z-10 -top-[20%] sm:-top-[15%] md:-top-[10%] lg:-top-[5%] left-1/2 -translate-x-1/2 w-[100px] h-[100px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 486.357 486.357"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  className="fill-[#010002]"
                  d="M465.093,325.805L361.079,295.9c-60.225-28.011-71.312-74.88-73.23-87.39v-86.894 c0-11.599-4.674-22.093-12.201-29.767l-12.949-46.097c0-15.274-4.251-27.653-19.525-27.653s-19.517,12.388-19.517,27.662 l-13.176,46.374c-7.381,7.649-11.973,18.013-11.973,29.49v83.659c0,0-3.682,58.404-74.157,90.886l0,0L21.272,325.805 c0,0-19.85,25.524-21.272,62.387l96.129,10.088l-10.697,50.34c-1.861,8.787,3.739,17.42,12.526,19.281 c1.138,0.244,2.276,0.358,3.39,0.358c7.511,0,14.258-5.243,15.891-12.876l11.413-53.689l33.49,3.512 c3.097-18.541,8.763-34.644,16.834-43.285c-1.878,4.641-3.642,10.153-5.235,16.347c-2.081,8.12-3.829,17.444-5.08,27.621 c-1.276,10.38-2.04,21.589-2.04,33.352h51.576c0-9.868-0.545-19.379-1.496-28.312c-0.423-3.934-0.935-7.706-1.504-11.396 c-1.398-9.112-3.211-17.411-5.284-24.638c-1.553-5.406-3.235-10.21-4.999-14.282c7.925,7.421,13.689,21.817,17.143,38.92 c0.797,3.942,1.463,8.007,2.008,12.168l19.127,2.008l18.582-1.951c0.545-4.186,1.219-8.275,2.016-12.225 c3.251-16.127,8.559-29.872,15.802-37.611c-1.878,4.641-3.642,10.153-5.235,16.347c-1.642,6.397-3.073,13.55-4.219,21.264 c-0.553,3.723-1.065,7.535-1.471,11.502c-0.91,8.909-1.439,18.379-1.439,28.206h51.576c0-11.73-0.788-22.898-2.105-33.246 c-1.479-11.665-3.633-22.199-6.186-31.1c-1.553-5.406-3.235-10.21-4.999-14.282c8.795,8.234,14.924,25.077,18.192,44.642 l31.88-3.349l11.356,53.47c1.626,7.641,8.372,12.876,15.891,12.876c1.122,0,2.252-0.114,3.39-0.358 c8.787-1.861,14.396-10.494,12.526-19.281l-10.648-50.113l98.258-10.315C484.943,351.329,465.093,325.805,465.093,325.805z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="w-full mix-blend-lighten bg-white">
            <svg
              viewBox="0 0 3950 2419"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible transform translate-y-[5px] mb-16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1906.81V2419H3950V1906.81C2811.36 1751.49 2006.46 1283.37 1975.9 0H1974.1C1943.54 1283.37 1138.64 1751.49 0 1906.81Z"
              />
            </svg>
          </div>
        </div>

        {/* Knockout Filter Starts Here */}
        <h2 className={`${styles.videomaskh2} ${SpaceMonoBold.className}`}>
          What if we roamed the galaxy?
        </h2>
        <div className="sticky inset-0 h-[100vh] w-full -z-[50] bg-[url('https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif')]">
          <section className="absolute -z-[30] h-[100vh] bg-white text-black grid place-items-center inset-0 overflow-hidden [filter:url(#knockout-filter)]">
            <h1 className={`${styles.videomaskh1} ${SpaceMonoBold.className}`}>
              EXPLORE
            </h1>
          </section>
        </div>
        <section className={styles.spacer}></section>

        <div></div>
      </div>

      <svg className="h-[0px]">
        <defs>
          <filter id="knockout-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix
              result="knocked"
              type="matrix"
              values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    1 1 1 -1 1"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
