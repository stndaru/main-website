import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
import { useState, useEffect } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`relative h-screen items-center justify-between ${plusJakartaSans.className} overflow-hidden`}
      >
        <svg
          viewBox="0 0 2000 2000"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-40 opacity-[0.2] w-full h-full pointer-events-none"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="1000%" height="1200%" filter="url(#noiseFilter)" />
        </svg>
        <div className="flex flex-col w-full h-full content-center items-center justify-center z-10 p-6 sm:p-16">
          <div className="flex items-center bg-gradient-to-br from-[#E8E4E3] to-[#D8D2CF] [box-shadow:inset_2px_2px_0px_0px_#FFF,0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] w-fit h-fit rounded-lg p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4px] bg-black rounded-lg p-[4px]">
              <div className="flex items-center bg-[#E2DEDC] [box-shadow:inset_1px_1px_0px_0px_#FFF] w-[160px] md:w-[200px] aspect-square rounded-lg p-4 md:p-6">
                <div className="bg-gradient-to-br from-[#EFECEB] to-40% to-[hsl(17,12%,94%,0)] rounded-[999px] w-full aspect-square p-[2px]">
                  <div
                    className="[background-image:linear-gradient(to_bottom_right,hsla(12,12%,92%,0.2)_0%,hsla(20,9%,87%,0.2)_36%),radial-gradient(circle_at_top_left,#FBFAFA,#ECE9E7_20%,#E2DEDC_42%,#E2DEDC_87%)] 
                            [box-shadow:-3px_-3px_5px_-3px_hsla(0,0%,100%,0.5)]
                            rounded-[999px] w-full aspect-square p-4"
                  >
                    <div
                      className="[background-image:linear-gradient(to_bottom_right,#E2DEDC_0%,#D8D0CD_74%,#E2DDDB_100%)]
                              [box-shadow:inset_-12px_-12px_16px_0px_hsla(0,0%,100%,0.3),inset_2px_2px_8px_0px_hsla(0,0%,93%,0.3),inset_-1px_-1px_2px_0px_#A89E9B,inset_-1px_-1px_2px_0px_hsla(0,0%,0%,0.25),inset_1px_1px_2px_0px_hsla(0,0%,100%,0.3),10px_10px_40px_0px_hsla(0,0%,0%,0.25),8px_8px_17px_0px_hsla(0,0%,0%,0.25)]
                              rounded-[999px] w-full aspect-square active:scale-[0.9] transition ease-in-out"
                    >
                      <div>
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-[#F54E03] scale-[0.3]"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <circle cx="8" cy="8" r="8"></circle>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-[#E2DEDC] [box-shadow:inset_1px_1px_0px_0px_#FFF] w-[160px] md:w-[200px] spect-square rounded-lg p-4 md:p-6">
                <div className="bg-gradient-to-br from-[#EFECEB] to-40% to-[hsl(17,12%,94%,0)] rounded-[999px] w-full aspect-square p-[2px]">
                  <div
                    className="[background-image:linear-gradient(to_bottom_right,hsla(12,12%,92%,0.2)_0%,hsla(20,9%,87%,0.2)_36%),radial-gradient(circle_at_top_left,#FBFAFA,#ECE9E7_20%,#E2DEDC_42%,#E2DEDC_87%)] 
                            [box-shadow:-3px_-3px_5px_-3px_hsla(0,0%,100%,0.5)]
                            rounded-[999px] w-full aspect-square p-4"
                  >
                    <div
                      className="[background-image:linear-gradient(to_bottom_right,#E2DEDC_0%,#D8D0CD_74%,#E2DDDB_100%)]
                              [box-shadow:inset_-12px_-12px_16px_0px_hsla(0,0%,100%,0.3),inset_2px_2px_8px_0px_hsla(0,0%,93%,0.3),inset_-1px_-1px_2px_0px_#A89E9B,inset_-1px_-1px_2px_0px_hsla(0,0%,0%,0.25),inset_1px_1px_2px_0px_hsla(0,0%,100%,0.3),10px_10px_40px_0px_hsla(0,0%,0%,0.25),8px_8px_17px_0px_hsla(0,0%,0%,0.25)]
                              rounded-[999px] w-full aspect-square active:scale-[0.9] transition ease-in-out"
                    >
                      <div>
                        <svg
                          fill="#000000"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-[#464C52] scale-[0.7]"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M10.968 23V9l12.762 7-12.762 7z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-[#E2DEDC] [box-shadow:inset_1px_1px_0px_0px_#FFF] w-[160px] md:w-[200px] aspect-square rounded-lg p-4 md:p-6">
                <div className="bg-gradient-to-br from-[#EFECEB] to-40% to-[hsl(17,12%,94%,0)] rounded-[999px] w-full aspect-square p-[2px]">
                  <div
                    className="[background-image:linear-gradient(to_bottom_right,hsla(12,12%,92%,0.2)_0%,hsla(20,9%,87%,0.2)_36%),radial-gradient(circle_at_top_left,#FBFAFA,#ECE9E7_20%,#E2DEDC_42%,#E2DEDC_87%)] 
                            [box-shadow:-3px_-3px_5px_-3px_hsla(0,0%,100%,0.5)]
                            rounded-[999px] w-full aspect-square p-4"
                  >
                    <div
                      className="[background-image:linear-gradient(to_bottom_right,#E2DEDC_0%,#D8D0CD_74%,#E2DDDB_100%)]
                              [box-shadow:inset_-12px_-12px_16px_0px_hsla(0,0%,100%,0.3),inset_2px_2px_8px_0px_hsla(0,0%,93%,0.3),inset_-1px_-1px_2px_0px_#A89E9B,inset_-1px_-1px_2px_0px_hsla(0,0%,0%,0.25),inset_1px_1px_2px_0px_hsla(0,0%,100%,0.3),10px_10px_40px_0px_hsla(0,0%,0%,0.25),8px_8px_17px_0px_hsla(0,0%,0%,0.25)]
                              rounded-[999px] w-full aspect-square active:scale-[0.9] transition ease-in-out"
                    >
                      <div>
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-[#464C52] scale-[0.35]"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M7 1H2V15H7V1Z"></path>
                            <path d="M14 1H9V15H14V1Z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-[#E2DEDC] [box-shadow:inset_1px_1px_0px_0px_#FFF] w-[160px] md:w-[200px] aspect-square rounded-lg p-4 md:p-6">
                <div className="bg-gradient-to-br from-[#EFECEB] to-40% to-[hsl(17,12%,94%,0)] rounded-[999px] w-full aspect-square p-[2px]">
                  <div
                    className="[background-image:linear-gradient(to_bottom_right,hsla(12,12%,92%,0.2)_0%,hsla(20,9%,87%,0.2)_36%),radial-gradient(circle_at_top_left,#FBFAFA,#ECE9E7_20%,#E2DEDC_42%,#E2DEDC_87%)] 
                            [box-shadow:-3px_-3px_5px_-3px_hsla(0,0%,100%,0.5)]
                            rounded-[999px] w-full aspect-square p-4"
                  >
                    <div
                      className="[background-image:linear-gradient(to_bottom_right,#E2DEDC_0%,#D8D0CD_74%,#E2DDDB_100%)]
                              [box-shadow:inset_-12px_-12px_16px_0px_hsla(0,0%,100%,0.3),inset_2px_2px_8px_0px_hsla(0,0%,93%,0.3),inset_-1px_-1px_2px_0px_#A89E9B,inset_-1px_-1px_2px_0px_hsla(0,0%,0%,0.25),inset_1px_1px_2px_0px_hsla(0,0%,100%,0.3),10px_10px_40px_0px_hsla(0,0%,0%,0.25),8px_8px_17px_0px_hsla(0,0%,0%,0.25)]
                              rounded-[999px] w-full aspect-square active:scale-[0.9] transition ease-in-out"
                    >
                      <div>
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-[#F03737] scale-[0.3]"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <rect x="1" y="1" width="14" height="14"></rect>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 -z-10 w-full h-full bg-zinc-950">
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
