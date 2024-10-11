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
        <div className="relative flex h-[70vh] -translate-y-[10%] w-full lg:max-w-[700px] items-center justify-center">
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
            <div className="absolute top-[35%] left-[18%] -translate-y-[35%] -translate-x-[18%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[130%] -left-[15%] -top-[8%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div
                className={`${styles.optimizedContainer} absolute -top-[10%] left-[50%] -translate-x-[50%] z-20 flex flex-row p-1 rounded-[999px] opacity-0`}
              >
                <div className="w-[20px] aspect-square bg-[hsla(170,63%,60%,1)] rounded-[999px] p-[2px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p
                  className={`${styles.optimizedText} text-sm text-[hsla(170,63%,60%,1)] leading-[18px] p-0 w-0 opacity-0`}
                >
                  Optimized
                </p>
              </div>
              <div
                className={`${styles.greenGlowShadowAnimation} flex w-full aspect-square rounded-[999px] bg-gray-100 p-2`}
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z"
                      fill="#5865F2"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col w-full items-center align-center py-6">
                <p className="text-gray-400">Discord</p>
              </div>
            </div>
            <div className="absolute top-[69%] left-[27%] -translate-y-[69%] -translate-x-[27%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[130%] -left-[15%] -top-[8%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div
                className={`${styles.optimizedContainer} absolute -top-[10%] left-[50%] -translate-x-[50%] z-20 flex flex-row p-1 rounded-[999px] opacity-0`}
              >
                <div className="w-[20px] aspect-square bg-[hsla(170,63%,60%,1)] rounded-[999px] p-[2px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p
                  className={`${styles.optimizedText} text-sm text-[hsla(170,63%,60%,1)] leading-[18px] p-0 w-0 opacity-0`}
                >
                  Optimized
                </p>
              </div>
              <div
                className={`${styles.greenGlowShadowAnimation} flex w-full aspect-square rounded-[999px] bg-gray-100 p-4`}
              >
                <svg
                  viewBox="-1.5 0 259 259"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="w-full h-full"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z"
                        fill="#00E676"
                      ></path>
                      <path
                        d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col w-full items-center align-center py-6">
                <p className="text-gray-400">WhatsApp</p>
              </div>
            </div>
            <div className="absolute top-[87%] left-[50%] -translate-y-[87%] -translate-x-[50%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[130%] -left-[15%] -top-[8%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div
                className={`${styles.optimizedContainer} absolute -top-[10%] left-[50%] -translate-x-[50%] z-20 flex flex-row p-1 rounded-[999px] opacity-0`}
              >
                <div className="w-[20px] aspect-square bg-[hsla(170,63%,60%,1)] rounded-[999px] p-[2px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p
                  className={`${styles.optimizedText} text-sm text-[hsla(170,63%,60%,1)] leading-[18px] p-0 w-0 opacity-0`}
                >
                  Optimized
                </p>
              </div>
              <div
                className={`${styles.greenGlowShadowAnimation} flex w-full aspect-square rounded-[999px] bg-gray-100 p-4`}
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M30 14.4979C30 8.15792 23.7199 3 15.9999 3C8.28094 3 2 8.15792 2 14.4979C2 20.1817 6.98063 24.9417 13.7084 25.8418C14.1644 25.9412 14.7849 26.146 14.9419 26.5404C15.0831 26.8986 15.0342 27.4598 14.987 27.8216C14.987 27.8216 14.8227 28.8214 14.7873 29.0343C14.7264 29.3926 14.5061 30.4353 15.9999 29.7981C17.4942 29.1609 24.0626 24.9935 26.9998 21.572C29.0287 19.3204 30 17.0353 30 14.4979Z"
                      fill="#2CCF54"
                    ></path>
                    <path
                      d="M13.1553 11.4244H12.1733C12.0228 11.4244 11.9004 11.5478 11.9004 11.6995V17.866C11.9004 18.0179 12.0228 18.1411 12.1733 18.1411H13.1553C13.3059 18.1411 13.428 18.0179 13.428 17.866V11.6995C13.428 11.5478 13.3059 11.4244 13.1553 11.4244Z"
                      fill="white"
                    ></path>
                    <path
                      d="M19.9147 11.4244H18.9327C18.7821 11.4244 18.66 11.5478 18.66 11.6995V15.3631L15.8645 11.5467C15.8128 11.4683 15.729 11.4295 15.6375 11.4244H14.6558C14.5052 11.4244 14.3828 11.5478 14.3828 11.6995V17.866C14.3828 18.0179 14.5052 18.1411 14.6558 18.1411H15.6375C15.7883 18.1411 15.9104 18.0179 15.9104 17.866V14.2035L18.7094 18.0247C18.7597 18.0967 18.845 18.1411 18.9327 18.1411H19.9147C20.0655 18.1411 20.1874 18.0179 20.1874 17.866V11.6995C20.1874 11.5478 20.0655 11.4244 19.9147 11.4244Z"
                      fill="white"
                    ></path>
                    <path
                      d="M10.7884 16.5969H8.12013V11.6998C8.12013 11.5476 7.99802 11.4241 7.84773 11.4241H6.86545C6.71489 11.4241 6.59277 11.5476 6.59277 11.6998V17.8652C6.59277 18.0149 6.71435 18.1411 6.86518 18.1411H10.7884C10.9389 18.1411 11.0605 18.0174 11.0605 17.8652V16.8725C11.0605 16.7203 10.9389 16.5969 10.7884 16.5969Z"
                      fill="white"
                    ></path>
                    <path
                      d="M25.3372 12.9683C25.4878 12.9683 25.6094 12.8452 25.6094 12.6927V11.7C25.6094 11.5478 25.4878 11.4241 25.3372 11.4241H21.4143C21.2636 11.4241 21.1416 11.5501 21.1416 11.6998V17.8655C21.1416 18.0147 21.2633 18.1411 21.4137 18.1411H25.3372C25.4878 18.1411 25.6094 18.0174 25.6094 17.8655V16.8725C25.6094 16.7206 25.4878 16.5969 25.3372 16.5969H22.6692V15.5546H25.3372C25.4878 15.5546 25.6094 15.4311 25.6094 15.2789V14.2863C25.6094 14.1341 25.4878 14.0104 25.3372 14.0104H22.6692V12.9683H25.3372Z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col w-full items-center align-center py-6">
                <p className="text-gray-400">Line</p>
              </div>
            </div>
            <div className="absolute top-[69%] left-[73%] -translate-y-[69%] -translate-x-[73%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[130%] -left-[15%] -top-[8%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div
                className={`${styles.optimizedContainer} absolute -top-[10%] left-[50%] -translate-x-[50%] z-20 flex flex-row p-1 rounded-[999px] opacity-0`}
              >
                <div className="w-[20px] aspect-square bg-[hsla(170,63%,60%,1)] rounded-[999px] p-[2px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p
                  className={`${styles.optimizedText} text-sm text-[hsla(170,63%,60%,1)] leading-[18px] p-0 w-0 opacity-0`}
                >
                  Optimized
                </p>
              </div>
              <div
                className={`${styles.greenGlowShadowAnimation} flex w-full aspect-square rounded-[999px] bg-gray-100 p-4`}
              >
                <svg
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                        fill="#40B3E0"
                      ></path>
                      <path
                        d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                        fill="#D2E5F1"
                      ></path>
                      <path
                        d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                        fill="#B5CFE4"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col w-full items-center align-center py-6">
                <p className="text-gray-400">Telegram</p>
              </div>
            </div>
            <div className="absolute top-[35%] left-[82%] -translate-y-[35%] -translate-x-[82%] w-[80px] aspect-square bg-gray-200">
              <div
                className={`absolute -z-10 flex ${styles.circleInteraction} w-[130%] -left-[15%] -top-[8%] aspect-square p-[1px] rounded-[999px]`}
              >
                <div className="relative w-full h-full bg-gray-200 items-center justify-center p-2 rounded-[999px] border border-1 border-gray-300"></div>
              </div>
              <div
                className={`${styles.optimizedContainer} absolute -top-[10%] left-[50%] -translate-x-[50%] z-20 flex flex-row p-1 rounded-[999px] opacity-0`}
              >
                <div className="w-[20px] aspect-square bg-[hsla(170,63%,60%,1)] rounded-[999px] p-[2px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p
                  className={`${styles.optimizedText} text-sm text-[hsla(170,63%,60%,1)] leading-[18px] p-0 w-0 opacity-0`}
                >
                  Optimized
                </p>
              </div>
              <div
                className={`${styles.greenGlowShadowAnimation} flex w-full aspect-square rounded-[999px] bg-gray-100 p-4`}
              >
                <svg
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="w-full h-full"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>Messenger-color</title>
                    <desc>Created with Sketch.</desc> <defs> </defs>
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-301.000000, -860.000000)"
                        fill="#007FFF"
                      >
                        <path
                          d="M325,860 C311.745143,860 301,869.949185 301,882.222222 C301,889.215556 304.489988,895.453481 309.944099,899.526963 L309.944099,908 L318.115876,903.515111 C320.296745,904.118667 322.607155,904.444444 325,904.444444 C338.254857,904.444444 349,894.495259 349,882.222222 C349,869.949185 338.254857,860 325,860 L325,860 Z M327.385093,889.925926 L321.273292,883.407407 L309.347826,889.925926 L322.465839,876 L328.726708,882.518519 L340.503106,876 L327.385093,889.925926 L327.385093,889.925926 Z"
                          id="Messenger"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col w-full items-center align-center py-6">
                <p className="text-gray-400">Messenger</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center -translate-y-[40%] lg:-translate-y-[50%] max-w-[70%] lg:max-w-[40%]">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl text-gray-600 font-medium text-center">
              Optimize your Social Media
            </h1>
            <p className="text-gray-400 text-center tracking-wide">
              Easily reduce memory usage of your favorite messaging app by up to{" "}
              <span className="text-bold text-green-500 px-1">70%</span>,
              increasing your shareholder value significantly
            </p>
          </div>

          <button className="border-1 border-gray-300 bg-gray-100 shadow-sm px-4 py-2 text-gray-400 text-center rounded-md tracking-wide">
            Learn More
          </button>
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
