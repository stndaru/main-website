import Image from "next/image";
import { Plus_Jakarta_Sans, Borel } from "next/font/google";
import { motion } from "framer-motion";
import { HeadComponent } from "../../components/core/HeadComponent";
import styles from "../../styles/modules/timelinescopetest.module.css";
import { useState, useEffect } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div className={styles.mainbody}>
        <div className={styles.content}>
          <div className={`${styles.box} ${styles.animation}`}></div>
        </div>

        <div className={styles.scroller}>
          <div className={styles.longelement}></div>
        </div>
      </div>
    </>
  );
}
