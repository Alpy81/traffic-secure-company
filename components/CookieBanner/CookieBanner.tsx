"use client";

import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const stored = localStorage.getItem("cookie-consent");
      if (!stored) setVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setVisible(false);
  };

  const declineAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    setVisible(false);
  };

  const saveSettings = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setVisible(false);
  };

  const toggle = (key: keyof ConsentState) => {
    if (key === "necessary") return;
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!mounted || !visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Datenschutzeinstellungen</h2>
            <p className={styles.subtitle}>
              Wir respektieren Ihre Privatsphäre
            </p>
          </div>
        </div>

        {/* Beschreibung */}
        <p className={styles.description}>
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
          Einige sind technisch notwendig, andere helfen uns, die Website zu
          verbessern. Sie können Ihre Einstellungen jederzeit anpassen. Mehr
          Infos in unserer{" "}
          <a href="/datenschutz" className={styles.link}>
            Datenschutzerklärung
          </a>
          .
        </p>

        {/* Einstellungen Panel */}
        {showSettings && (
          <div className={styles.settings}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <span className={styles.settingTitle}>Notwendige Cookies</span>
                <span className={styles.settingDesc}>
                  Technisch erforderlich für den Betrieb der Website.
                </span>
              </div>
              <div className={`${styles.toggle} ${styles.toggleActive}`}>
                <span className={styles.toggleKnob} />
              </div>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <span className={styles.settingTitle}>Analyse-Cookies</span>
                <span className={styles.settingDesc}>
                  Helfen uns zu verstehen, wie Besucher die Website nutzen.
                </span>
              </div>
              <button
                onClick={() => toggle("analytics")}
                className={`${styles.toggle} ${
                  consent.analytics ? styles.toggleActive : ""
                }`}
                aria-label="Analyse-Cookies umschalten">
                <span className={styles.toggleKnob} />
              </button>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <span className={styles.settingTitle}>Marketing-Cookies</span>
                <span className={styles.settingDesc}>
                  Ermöglichen personalisierte Werbung und Inhalte.
                </span>
              </div>
              <button
                onClick={() => toggle("marketing")}
                className={`${styles.toggle} ${
                  consent.marketing ? styles.toggleActive : ""
                }`}
                aria-label="Marketing-Cookies umschalten">
                <span className={styles.toggleKnob} />
              </button>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className={styles.buttons}>
          {showSettings ? (
            <>
              <button onClick={declineAll} className={styles.declineButton}>
                Alle ablehnen
              </button>
              <button onClick={saveSettings} className={styles.saveButton}>
                Auswahl speichern
              </button>
              <button onClick={acceptAll} className={styles.acceptButton}>
                Alle akzeptieren
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowSettings(true)}
                className={styles.settingsButton}>
                ⚙ Einstellungen
              </button>
              <button onClick={declineAll} className={styles.declineButton}>
                Ablehnen
              </button>
              <button onClick={acceptAll} className={styles.acceptButton}>
                Alle akzeptieren
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
