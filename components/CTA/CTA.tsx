import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bereit für Ihr nächstes Projekt?</h2>
        <p className={styles.subtitle}>
          Kontaktieren Sie uns jetzt – wir erstellen Ihnen ein unverbindliches
          Angebot innerhalb von 24 Stunden.
        </p>
        <div className={styles.buttons}>
          <Link href="/kontakt" className={styles.primaryButton}>
            Jetzt Kontakt aufnehmen
          </Link>
          <Link href="tel:+49123456789" className={styles.secondaryButton}>
            📞 +49 123 456 789
          </Link>
        </div>
      </div>
    </section>
  );
}
