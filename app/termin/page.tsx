"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import styles from "./termin.module.css";

export default function TerminPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "beratungsgespraech" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.headerLabelLine} />
          Jetzt buchen
          <span className={styles.headerLabelLine} />
        </div>
        <h1 className={styles.headerTitle}>Termin buchen</h1>
        <p className={styles.headerSubtitle}>
          Wählen Sie direkt einen freien Termin – schnell, einfach und
          unverbindlich.
        </p>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          {/* Cal.com Embed */}
          <div className={styles.embedWrapper}>
            <Cal
              namespace="beratungsgespraech"
              calLink="https://cal.com/alpy-e-ulimu5"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>

          {/* Sidebar */}
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>So funktioniert es</h2>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>Termin wählen</h3>
                  <p className={styles.stepText}>
                    Suchen Sie sich im Kalender ein freies Datum und eine
                    passende Uhrzeit aus.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>Daten eingeben</h3>
                  <p className={styles.stepText}>
                    Tragen Sie Ihre Kontaktdaten ein und beschreiben Sie kurz
                    Ihr Anliegen.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>Bestätigung erhalten</h3>
                  <p className={styles.stepText}>
                    Sie erhalten sofort eine Bestätigung per E-Mail – wir rufen
                    Sie pünktlich an.
                  </p>
                </div>
              </div>
            </div>

            {/* Notfall Box */}
            <div className={styles.infoBox}>
              <p className={styles.infoBoxTitle}>
                <span className={styles.infoBoxDot} />
                Dringender Notfall?
              </p>
              <p className={styles.infoBoxText}>
                Für kurzfristige Anfragen erreichen Sie uns direkt telefonisch —
                wir sind 24/7 erreichbar.
              </p>
              <a href="tel:+491736660900" className={styles.phoneLink}>
                📞 +49 173 666 0900
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
