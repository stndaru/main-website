import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { HeadComponent } from "../../components/core/HeadComponent";
import styles from "../../styles/modules/day9.module.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div
        className={`flex flex-col items-center border-none w-full ${plusJakartaSans.className} ${styles.rootelement}`}
      >
        <div className="flex flex-col md:grid md:grid-cols-3 w-full p-4 md:p-24 gap-4 md:gap-8 min-[1280px]:max-w-[75%]">
          <div className="flex flex-col bg-zinc-800 p-8 rounded-md gap-8">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-[32px] h-[32px] rounded-md bg-zinc-800 border border-1 border-white">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full fill-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"></path>
                  </g>
                </svg>
              </div>
              <h3>Tailwind CSS</h3>
            </div>
            <div>
              <p>
                Utility-first CSS framework for rapidly building modern websites
                without ever leaving your HTML
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-zinc-800 p-8 rounded-md gap-8 col-span-2">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-[32px] h-[32px] rounded-md bg-zinc-800 ">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="nonzero"
                      clip-rule="nonzero"
                      d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      clip-rule="nonzero"
                      d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      clip-rule="nonzero"
                      d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z"
                    ></path>
                    <path d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z"></path>
                  </g>
                </svg>
              </div>
              <h3>React</h3>
            </div>
            <div>
              <p>
                Free and open-source front-end JavaScript library for building
                user interfaces based on components by Facebook Inc. React can
                be used to develop single-page, mobile, or server-rendered
                applications with frameworks like Next.js.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-zinc-800 p-8 rounded-md gap-8 col-span-2">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-[32px] h-[32px] rounded-md bg-zinc-800">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <h3>NextJS</h3>
            </div>
            <div>
              <p>
                Next.js is an open-source web development framework created by
                the private company Vercel providing React-based web
                applications with server-side rendering and static website
                generation.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-zinc-800 p-8 rounded-md gap-8">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-[32px] h-[32px] rounded-md bg-zinc-800 ">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M7.99999 5C7.69206 5 7.4013 5.14187 7.21179 5.38459C7.02228 5.6273 6.95517 5.94379 7.02985 6.24254L8.02985 10.2425C8.14114 10.6877 8.54113 11 8.99999 11H13.8C13.9105 11 14 11.0895 14 11.2V13.5029C14 13.556 13.9789 13.6069 13.9414 13.6444L12.1414 15.4444C12.0633 15.5225 11.9367 15.5225 11.8586 15.4444L9.7071 13.2929C9.31658 12.9024 8.68341 12.9024 8.29289 13.2929C7.90236 13.6834 7.90236 14.3166 8.29289 14.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14V10C16 9.44772 15.5523 9 15 9H9.93693C9.84515 9 9.76516 8.93754 9.7429 8.84851L9.3429 7.24851C9.31134 7.12228 9.40681 7 9.53693 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H7.99999Z"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.30601 1C2.48037 1 1.07798 2.61696 1.33617 4.42426L2.90518 15.4074C3.00667 16.1178 3.35945 16.7683 3.89952 17.2409L10.0245 22.6002C11.1556 23.5899 12.8444 23.5899 13.9755 22.6002L20.1005 17.2409C20.6405 16.7683 20.9933 16.1178 21.0948 15.4074L22.6638 4.42426C22.922 2.61696 21.5196 1 19.694 1H4.30601ZM3.31606 4.14142C3.23 3.53899 3.69746 3 4.30601 3H19.694C20.3025 3 20.77 3.53899 20.6839 4.14142L19.1149 15.1245C19.0811 15.3613 18.9635 15.5782 18.7835 15.7357L12.6585 21.095C12.2815 21.4249 11.7185 21.4249 11.3415 21.095L5.21653 15.7357C5.0365 15.5782 4.91891 15.3613 4.88508 15.1245L3.31606 4.14142Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <h3>HTML</h3>
            </div>
            <div>
              <p>
                Hypertext Markup Language is the standard markup language for
                documents designed to be displayed in a web browser.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Only */}
      <div className="absolute -z-10 top-0 w-full h-full bg-zinc-950">
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
    </>
  );
}
