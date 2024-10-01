import { useState } from "react";
import { Exo } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
import { IndicatorComponent } from "../../components/playground/Day13Indicator";
import { ButtonComponent } from "../../components/playground/Day11Button";

const exo = Exo({
  subsets: ["latin"],
});

export default function Home() {
  const [indicators, setIndicators] = useState<{ [key: string]: boolean }>({
    "1": false,
  });

  function indicatorTurnOn(indicatorID: string) {
    // Update the state for the specific indicator
    setIndicators((prevState) => ({
      ...prevState,
      [indicatorID]: !prevState[indicatorID],
    }));
  }

  return (
    <>
      <HeadComponent />
      <div
        className={`flex flex-col items-center h-screen border-none w-full bg-zinc-950 ${exo.className} overflow-hidden`}
      >
        <svg
          viewBox="0 0 2000 2000"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-40 opacity-[0.1] w-full h-full pointer-events-none"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="1000%" height="1000%" filter="url(#noiseFilter)" />
        </svg>
        <div className="flex flex-col w-full h-screen md:h-full content-center items-center justify-center z-10">
          <div
            className="h-fit w-[90%] min-[400px]:max-w-fit grid grid-cols-3 max-[400px]:p-4 p-8 sm:p-12 max-[400px]:gap-4 gap-8 sm:gap-12 rounded-3xl shadow-xl
                        bg-gradient-to-br from-[#ABA9A7] via-50% via-[#85827E] to-[#93908E] 
                        [box-shadow:inset_1px_1px_1px_0_hsla(0,0%,100%,1),inset_-1px_-1px_2px_0_hsla(0,0%,0%,0.4)]
                        "
          >
            <div>
              <IndicatorComponent
                objID={"1"}
                description={"LEVEL"}
                state={indicators["1"]}
              />
              <ButtonComponent
                description={"1"}
                onClick={() => indicatorTurnOn("1")}
              />
            </div>

            <div>
              <IndicatorComponent
                objID={"2"}
                description={"PITCH"}
                state={indicators["2"]}
              />
              <ButtonComponent
                description={"2"}
                onClick={() => indicatorTurnOn("2")}
              />
            </div>

            <div>
              <IndicatorComponent
                objID={"3"}
                description={"TIME"}
                state={indicators["3"]}
              />
              <ButtonComponent
                description={"3"}
                onClick={() => indicatorTurnOn("3")}
              />
            </div>
            <div>
              <IndicatorComponent
                objID={"4"}
                description={"LPF"}
                state={indicators["4"]}
              />
              <ButtonComponent
                description={"4"}
                onClick={() => indicatorTurnOn("4")}
              />
            </div>
            <div>
              <IndicatorComponent
                objID={"5"}
                description={"HPF"}
                state={indicators["5"]}
              />
              <ButtonComponent
                description={"5"}
                onClick={() => indicatorTurnOn("5")}
              />
            </div>
            <div>
              <IndicatorComponent
                objID={"6"}
                description={"FX"}
                state={indicators["6"]}
              />
              <ButtonComponent
                description={"6"}
                onClick={() => indicatorTurnOn("6")}
              />
            </div>

            <div>
              <IndicatorComponent
                objID={"7"}
                description={"ATK"}
                state={indicators["7"]}
              />
              <ButtonComponent
                description={"7"}
                onClick={() => indicatorTurnOn("7")}
              />
            </div>

            <div>
              <IndicatorComponent
                objID={"8"}
                description={"REL"}
                state={indicators["8"]}
              />
              <ButtonComponent
                description={"8"}
                onClick={() => indicatorTurnOn("8")}
              />
            </div>

            <div>
              <IndicatorComponent
                objID={"9"}
                description={"PAN"}
                state={indicators["9"]}
              />
              <ButtonComponent
                description={"9"}
                onClick={() => indicatorTurnOn("9")}
              />
            </div>
            <div>
              <IndicatorComponent
                objID={"10"}
                description={"TUNE"}
                state={indicators["10"]}
              />
              <ButtonComponent
                description={"•"}
                onClick={() => indicatorTurnOn("10")}
              />
            </div>
            <div>
              <IndicatorComponent
                objID={"11"}
                description={"VEL"}
                state={indicators["11"]}
              />
              <ButtonComponent
                description={"0"}
                onClick={() => indicatorTurnOn("11")}
              />
            </div>
            <div>
              <IndicatorComponent
                objID={"12"}
                description={"MODE"}
                state={indicators["12"]}
              />
              <ButtonComponent
                description={"ENTER"}
                isNumber={false}
                onClick={() => indicatorTurnOn("12")}
              />
            </div>
          </div>
        </div>
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
