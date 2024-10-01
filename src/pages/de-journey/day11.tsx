import Image from "next/image";
import { Exo } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
import { ButtonComponent } from "../../components/playground/Day11Button";

const exo = Exo({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`flex flex-col items-center border-none w-full bg-zinc-950 ${exo.className}`}
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
          <rect width="800%" height="1200%" filter="url(#noiseFilter)" />
        </svg>
        <div className="flex flex-col w-full h-[100vh] content-center items-center justify-center z-10">
          <div
            className="h-fit w-[90%] min-[400px]:max-w-fit min-[400px]:max-w-[80%] grid grid-cols-3 max-[400px]:p-4 p-8 sm:p-12 max-[400px]:gap-4 gap-8 sm:gap-12 rounded-3xl shadow-xl
                        bg-gradient-to-br from-[#ABA9A7] via-50% via-[#85827E] to-[#93908E] 
                        [box-shadow:inset_1px_1px_1px_0_hsla(0,0%,100%,1),inset_-1px_-1px_2px_0_hsla(0,0%,0%,0.4)]
                        "
          >
            <ButtonComponent
              description={"7"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"8"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"9"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"4"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"5"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"6"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"1"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"2"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"3"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"•"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"0"}
              isNumber={true}
              onClick={() => ""}
            />
            <ButtonComponent
              description={"Enter"}
              isNumber={false}
              onClick={() => ""}
            />
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
