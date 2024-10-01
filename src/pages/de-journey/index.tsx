import { Plus_Jakarta_Sans, Square_Peg } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
import { PreviewCard } from "@/components/DEJPreviewCard";
import Day2 from "./day6";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const squarePeg = Square_Peg({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`relative h-fit items-center justify-between ${plusJakartaSans.className}`}
      >
        <div className="flex flex-col p-4 sm:p-12 items-center">
          <div className="flex flex-col gap-8 md:gap-12 p-4 sm:p-12 md:items-center">
            <h1 className={`text-5xl md:text-8xl ${squarePeg.className}`}>
              Design Engineering Journey
            </h1>
            <div className="flex flex-col gap-4 md:items-center">
              <p>
                This is my personal collection of works during the process of me
                learning frontend styling and design in code
              </p>
              <p className="text-zinc-500 italic">
                Note: This site works best in desktop
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
            <PreviewCard hrefLink="/" details="Design Progress Day 1" />
            <PreviewCard
              hrefLink="/de-journey/day2"
              details="Design Progress Day 2"
            />
            <PreviewCard
              hrefLink="/de-journey/day3"
              details="Design Progress Day 3"
            />
            <PreviewCard
              hrefLink="/de-journey/day4"
              details="Design Progress Day 4"
            />
            <PreviewCard
              hrefLink="/de-journey/day5"
              details="Design Progress Day 5"
            />
            <PreviewCard
              hrefLink="/de-journey/day6"
              details="Design Progress Day 6"
            />
            <PreviewCard
              hrefLink="/de-journey/day7"
              details="Design Progress Day 7"
            />
            <PreviewCard
              hrefLink="/de-journey/day9"
              details="Design Progress Day 8 and 9"
            />
            <PreviewCard
              hrefLink="/de-journey/day10"
              details="Design Progress Day 10"
            />
            <PreviewCard
              hrefLink="/de-journey/day11"
              details="Design Progress Day 11"
            />
            <PreviewCard
              hrefLink="/de-journey/day12"
              details="Design Progress Day 12"
            />
            <PreviewCard
              hrefLink="/de-journey/day13"
              details="Design Progress Day 13"
            />
          </div>
        </div>

        {/* Background Only */}
        <div className="absolute top-0 w-full h-full -z-10 bg-zinc-950">
          <motion.div
            className="absolute top-0 -z-10 bg-repeat bg-fixed w-full h-full heropattern-graphpaper-zinc-900"
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
