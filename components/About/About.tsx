import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Bild */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/einsatz.webp"
            alt="Sperrzone24 im Einsatz"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.aboutImage}
          />
          <div className={styles.imageBadge}>
            <div className={styles.imageBadgeIcon}>⚡</div>
            <div className={styles.imageBadgeText}>
              <span className={styles.imageBadgeTitle}>
                Soforteinsatz möglich
              </span>
              <span className={styles.imageBadgeSub}>
                Reaktionszeit unter 1 Stunde
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            Warum Sperrzone24
          </div>

          <h2 className={styles.title}>
            Ihr zuverlässiger Partner für{" "}
            <span className={styles.titleAccent}>
              professionelle Verkehrssicherung
            </span>
          </h2>

          <p className={styles.text}>
            Mit umfangreicher Erfahrung in der Verkehrssicherung sind wir Ihr
            kompetenter Partner in Frankfurt und Umgebung. Behörden, Kommunen
            und Unternehmen vertrauen auf unsere Expertise — von der Planung bis
            zur Umsetzung.
          </p>

          <div className={styles.features}>
            {[
              "Behördlich zugelassen & zertifiziert",
              "Absicherung nach RSA 21 & StVO",
              "Persönlicher Ansprechpartner",
              "Kurzfristige Einsätze möglich",
            ].map((item) => (
              <div key={item} className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span className={styles.featureText}>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <br></br>
              <span className={styles.statLabel}>Projekte</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <br></br>
              <span className={styles.statLabel}>Erreichbar</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <br></br>
              <span className={styles.statLabel}>Zuverlässig</span>
            </div>
            <div className={`${styles.stat} ${styles.statMobileOnly}`}>
              <span className={styles.statNumber}>{"<"}1h</span>
              <span className={styles.statLabel}>Reaktionszeit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
