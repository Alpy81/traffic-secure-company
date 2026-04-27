"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4200);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.splash} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.logoWrapper}>
        <Image
          src="/logo.png"
          alt="Sperrzone24"
          width={400}
          height={90}
          priority
          className={styles.logo}
        />
      </div>
    </div>
  );
}
