import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { HeadComponent } from "../../components/core/HeadComponent";
import styles from "../../styles/modules/day17.module.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`flex flex-col items-center justify-center border-none w-full h-screen ${plusJakartaSans.className} ${styles.rootElement}`}
      >
        <div className="relative flex h-[70vh] w-full lg:max-w-[700px] items-center justify-center">
          <div className="flex p-4">
            <div
              className={`flex ${styles.borderInteraction} h-[100px] aspect-square p-[1px] rounded-2xl`}
            >
              <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-2xl border border-1 border-gray-300">
                <div className="flex bg-gray-100 w-full h-full rounded-xl border border-1 border-gray-300 shadow-xl">
                  <svg
                    height="10"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[22%] left-[22%]"
                  >
                    <circle r="3" cx="5" cy="5" fill="url(#circleGradient)" />
                  </svg>
                  <svg
                    height="10"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[22%] left-[70%]"
                  >
                    <circle r="3" cx="5" cy="5" fill="url(#circleGradient)" />
                  </svg>
                  <svg
                    height="10"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[70%] left-[22%]"
                  >
                    <circle r="3" cx="5" cy="5" fill="url(#circleGradient)" />
                  </svg>
                  <svg
                    height="10"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[70%] left-[70%]"
                  >
                    <circle r="3" cx="5" cy="5" fill="url(#circleGradient)" />
                  </svg>
                  <div className="w-full h-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 480"
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                    >
                      <defs>
                        <clipPath id="cut-off-bottom">
                          <circle cx="20%" cy="50%" r="7%" fill="#D9D9D9" />
                          <circle cx="50%" cy="20%" r="7%" fill="#D9D9D9" />
                          <circle cx="50%" cy="50%" r="7%" fill="#D9D9D9" />
                          <circle cx="50%" cy="80%" r="7%" fill="#D9D9D9" />
                          <circle cx="80%" cy="50%" r="7%" fill="#D9D9D9" />
                        </clipPath>
                      </defs>
                      <circle
                        cx="50%"
                        cy="50%"
                        r="100%"
                        clip-path="url(#cut-off-bottom)"
                        className="fill-gray-300"
                      />
                      <rect
                        width="100%"
                        height="150%"
                        clip-path="url(#cut-off-bottom)"
                        className={`${styles.svgClipBackground} fill-gray-500 blur-3xl`}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="absolute top-[40%] left-[18%] -translate-y-[40%] -translate-x-[18%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[120%] -left-[10%] -top-[5.5%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div
                className={`${styles.greenGlowShadowAnimation} flex w-full aspect-square rounded-[999px] bg-gray-100`}
              ></div>
              <div className="flex flex-col w-full items-center align-center p-4">
                <p className="text-gray-400">Discord</p>
              </div>
            </div>
            <div className="absolute top-[70%] left-[27%] -translate-y-[70%] -translate-x-[27%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[120%] -left-[10%] -top-[5.5%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div className="flex w-full aspect-square rounded-[999px] bg-gray-100"></div>
              <div className="flex flex-col w-full items-center align-center p-4">
                <p className="text-gray-400">WhatsApp</p>
              </div>
            </div>
            <div className="absolute top-[85%] left-[50%] -translate-y-[85%] -translate-x-[50%] w-[80px] aspect-square bg-gray-200">
              <div className="flex w-full aspect-square rounded-[999px] bg-gray-100"></div>
              <div className="flex flex-col w-full items-center align-center p-4">
                <p className="text-gray-400">Line</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Only */}
      <div className="absolute -z-30 top-0 w-full h-full bg-gray-200">
        <motion.div
          className="bg-repeat bg-fixed w-full h-full heropattern-graphpaper-gray-300"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        <svg className="h-[0px]">
          <defs>
            <linearGradient id="circleGradient" gradientTransform="rotate(90)">
              <stop offset="5%" stop-color="#d1d5db" />
              <stop offset="95%" stop-color="#e5e7eb" />
            </linearGradient>
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
      </div>
    </>
  );
}
