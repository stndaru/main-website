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
        className={`flex flex-col items-center justify-center border-none w-full h-screen ${plusJakartaSans.className} ${styles.rootelement}`}
      >
        <div
          className={`flex ${styles.borderInteraction} h-[200px] aspect-square p-[1px] rounded-3xl`}
        >
          <div className="flex w-full h-full bg-gray-200 items-center justify-center p-4 rounded-3xl border border-1 border-gray-300">
            <div className="bg-gray-100 w-full h-full rounded-2xl border border-1 border-gray-300 shadow-xl"></div>
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
      </div>
    </>
  );
}
