"use client";

import { useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cookie-consent");
  });

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.title}>🍪 Datenschutzhinweis</p>
          <p className={styles.description}>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
            unserer Website zu bieten. Einige sind technisch notwendig, andere
            helfen uns, die Website zu verbessern. Weitere Informationen finden
            Sie in unserer{" "}
            <a href="/datenschutz" className={styles.link}>
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className={styles.buttons}>
          <button onClick={decline} className={styles.declineButton}>
            Ablehnen
          </button>
          <button onClick={accept} className={styles.acceptButton}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
