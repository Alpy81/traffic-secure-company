import styles from "./termin.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termin buchen",
  description:
    "Buchen Sie jetzt einen Termin bei Sperrzone24 – schnell, einfach und unverbindlich.",
};

export default function TerminPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>Termin buchen</h1>
        <p className={styles.headerSubtitle}>
          Wählen Sie direkt einen freien Termin – schnell, einfach und
          unverbindlich.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.embedWrapper}>
            {/* Ersetze die URL mit deinem echten Calendly-Link */}
            <iframe
              src="https://calendly.com/aertas90?hide_gdpr_banner=1"
              className={styles.calendly}
              title="Termin buchen"
              frameBorder="0"
              loading="lazy"
            />
          </div>

          <div className={styles.info}>
            <h2 className={styles.infoTitle}>So funktioniert&apos;s</h2>

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
                    Sie erhalten sofort eine Bestätigung per E-Mail – wir sind
                    pünktlich für Sie da.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.infoBox}>
              <p className={styles.infoBoxTitle}>Dringend?</p>
              <p className={styles.infoBoxText}>
                Für kurzfristige Anfragen erreichen Sie uns direkt telefonisch:
              </p>
              <a href="tel:+49123456789" className={styles.phoneLink}>
                📞 +49 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
