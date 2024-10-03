import { Plus_Jakarta_Sans, Playfair } from "next/font/google";
import { HeadComponent } from "../../components/core/HeadComponent";
import styles from "../../styles/modules/day14.module.css";

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
        className={`${styles.rootElement} flex flex-col items-center border-none w-full ${plusJakartaSans.className}`}
      >
        <div className="w-full h-screen ">
          <div className={`relative w-full h-screen p-4 sm:p-12`}>
            <div className="sticky h-[95vh] sm:h-[90vh] w-full top-4 sm:top-12 overflow-hidden items-center">
              <div className="absolute inset-0 w-full h-full object-cover [filter:url(#pixelate)]">
                <div className={styles.gradientContainer}>
                  <div className={styles.gradientColor}></div>
                  <div className={styles.gradientColor}></div>
                  <div className={styles.gradientColor}></div>
                  <div className={styles.gradientColor}></div>
                  <div className={styles.gradientBackdrop}></div>
                </div>
              </div>
              <div className="absolute top-0 left-0 p-4 z-10 bg-black w-fit">
                ANSI/I3A IT10.7666-2002
              </div>
              <div className="absolute flex flex-col bottom-0 left-0 p-2 sm:p-8 md:p-16 z-10 gap-4">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl bg-black w-fit p-4">
                  PROPHOTO RGB
                </div>
                <div className="text-sm md:text-lg sm:max-w-[75%] xl:max-w-[50%] bg-black w-fit p-4">
                  The ProPhoto RGB color space, also known as ROMM RGB, or
                  Reference Output Medium Metric, is an output referred RGB
                  color space developed by Kodak. It offers an especially large
                  gamut designed for use with photographic output in mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="h-[0px]">
        <defs>
          <filter id="pixelate" x="0" y="0">
            <feFlood x="4" y="4" height="2" width="2" />
            <feComposite width="10" height="10" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="1" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
