import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/strassen-sperre.webp"
        alt="Straßensperrung mit professioneller Absicherung"
        fill
        priority
        sizes="100vw"
        className={styles.bgImage}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Frankfurt & Umgebung — 24/7 im Einsatz
        </div>

        <h1 className={styles.title}>
          Verkehrssicherung
          <br />
          <span className={styles.highlight}>rund um die Uhr</span>
        </h1>

        <p className={styles.subtitle}>
          Professionelle Absicherung für Baustellen, Veranstaltungen und
          Straßensperrungen — zuverlässig, behördlich abgestimmt und
          blitzschnell vor Ort.
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

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Projekte</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>24/7</span>
          <span className={styles.statLabel}>Erreichbar</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>100%</span>
          <span className={styles.statLabel}>Zuverlässig</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{"<"}1h</span>
          <span className={styles.statLabel}>Reaktionszeit</span>
        </div>
      </div>
    </section>
  );
}
