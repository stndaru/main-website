import Image from "next/image";
import { Plus_Jakarta_Sans, Playfair } from "next/font/google";
import { HeadComponent } from "../../components/core/HeadComponent";
import styles from "../../styles/modules/day12.module.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const playfair = Playfair({
  subsets: ["latin"],
});

const playfairItalic = Playfair({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`${styles.bodyElement} flex flex-col items-center border-none w-full ${plusJakartaSans.className}`}
      >
        <div className="w-full h-[200vh] rounded-xl">
          <div
            className={`${styles.videoContent} relative w-full h-[200vh] p-4 sm:p-12`}
          >
            <div className="sticky h-[95vh] sm:h-[90vh] w-full top-4 sm:top-12 overflow-hidden rounded-xl items-center">
              <svg
                viewBox="0 0 2000 2000"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles.noiseFilter} absolute z-10 w-full h-full pointer-events-none`}
              >
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <filter id="blurFilter">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                </filter>
                <rect
                  width="1000%"
                  height="1000%"
                  filter="url(#noiseFilter) url(#blurFilter)"
                />
              </svg>
              <video
                muted
                autoPlay
                loop
                className={`${styles.videoFilter} absolute opacity-100 inset-0 w-full h-full object-cover`}
                src="/videos/2000Gtdownscaled.mp4"
              ></video>
              <div className="absolute top-0 left-0 p-4 sm:p-8 md:p-16 z-10">
                SEPTEMBER 2024
              </div>
              <div className="absolute flex flex-col w-full bottom-0 left-0 p-4 sm:p-8 md:p-16 z-10 gap-4">
                <div
                  className={`flex ${styles.textDisplay} text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${playfairItalic.className}`}
                >
                  Timeless Classics.
                </div>
                <div className="text-sm md:text-lg sm:max-w-[75%] xl:max-w-[50%]">
                  The 2000GT revolutionized the automotive world&apos;s view of
                  Japan, then viewed as a producer of imitative and stodgily
                  practical vehicles. As a sleek, high-performance fastback
                  coupé, it demonstrated its auto makers could produce a sports
                  car to rival the better marques of Europe.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-4 p-16">
          <div className="relative h-full w-full">
            <Image
              src="/images/p1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Picture from the website's creator, Stefanus Ndaru"
              className="w-full h-full"
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/images/p2.jpg"
              layout="fill"
              objectFit="cover"
              alt="Picture from the website's creator, Stefanus Ndaru"
              className="w-full h-full"
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/images/p3.jpg"
              layout="fill"
              objectFit="cover"
              alt="Picture from the website's creator, Stefanus Ndaru"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <svg className="h-[0px]">
        <defs></defs>
      </svg>
    </>
  );
}
