import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.badge}>🚀 Jetzt unverbindlich anfragen</div>

        <h2 className={styles.title}>
          Bereit für Ihr{" "}
          <span className={styles.titleAccent}>nächstes Projekt?</span>
        </h2>

        <p className={styles.subtitle}>
          Kontaktieren Sie uns jetzt – wir erstellen Ihnen ein unverbindliches
          Angebot innerhalb von 24 Stunden. Persönlich, kompetent und
          zuverlässig.
        </p>

        <div className={styles.buttons}>
          <Link href="/kontakt" className={styles.primaryButton}>
            Jetzt Kontakt aufnehmen
          </Link>
          <Link href="tel:+491736660900" className={styles.secondaryButton}>
            📞 +49 173 666 0900
          </Link>
        </div>

        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✔</span>
            Kostenlose Erstberatung
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✔</span>
            Angebot in 24 Stunden
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✔</span>
            Keine versteckten Kosten
          </div>
        </div>
      </div>
    </section>
  );
}
