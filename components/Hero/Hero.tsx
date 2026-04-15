import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Verkehrssicherung
          <br />
          <span className={styles.highlight}>rund um die Uhr</span>
        </h1>
        <p className={styles.subtitle}>
          Professionelle Absicherung für Baustellen, Veranstaltungen und
          Straßensperrungen in Frankfurt und Umgebung.
        </p>
        <div className={styles.buttons}>
          <Link href="/kontakt" className={styles.primaryButton}>
            Jetzt anfragen
          </Link>
          <Link href="/leistungen" className={styles.secondaryButton}>
            Unsere Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
