import styles from "./baustellenabsicherung.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baustellenabsicherung",
  description:
    "Komplette Absicherung von Baustellen im Straßenraum nach RSA – zuverlässig, vorschriftsgemäß und aus einer Hand.",
};

export default function BaustellenabsicherungPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Baustellenabsicherung</h1>
        <p className={styles.heroSubtitle}>
          Sicher, vorschriftsgemäß und zuverlässig – wir sichern Ihre Baustelle
          nach RSA ab.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/baustelle.webp"
                alt="Halteverbotszone – Sperrzone24"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
            <div className={styles.introText}>
              <div className={styles.label}>
                <span className={styles.labelLine} />
                Leistung im Detail
              </div>
              <h2 className={styles.sectionTitle}>Was wir für Sie tun</h2>
              <p className={styles.text}>
                Baustellen im Straßenraum stellen hohe Anforderungen an die
                Verkehrssicherung. SperrZone24 übernimmt die vollständige
                Absicherung Ihrer Baustelle – von der Planung über die
                Aufstellung bis zur laufenden Kontrolle.
              </p>
              <p className={styles.text}>
                Wir arbeiten streng nach RSA 21 (Richtlinien für die Sicherung
                von Arbeitsstellen an Straßen) und stellen sicher, dass Ihre
                Baustelle jederzeit regelkonform gesichert ist.
              </p>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.label}>
              <span className={styles.labelLine} />
              Unser Angebot
            </div>
            <h2 className={styles.sectionTitle}>Unser Leistungsumfang</h2>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Absicherung nach RSA 21</strong>
                  <p>
                    Alle Maßnahmen erfolgen strikt nach den aktuellen
                    Richtlinien für die Sicherung von Arbeitsstellen an Straßen.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Warn- und Schutzeinrichtungen</strong>
                  <p>
                    Wir stellen alle notwendigen Absperrgeräte, Warnschilder,
                    Leitbaken und Schutzeinrichtungen bereit und montieren diese
                    fachgerecht.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Regelmäßige Kontrolle</strong>
                  <p>
                    Unsere Teams kontrollieren die Absicherung regelmäßig und
                    passen sie bei Bedarf an – für maximale Sicherheit während
                    der gesamten Bauzeit.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Anpassung bei Baufortschritt</strong>
                  <p>
                    Verändert sich die Baustelle, passen wir die Absicherung
                    flexibel und zeitnah an den neuen Stand an.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Baustelle absichern lassen</h2>
          <p className={styles.ctaText}>
            Wir erstellen Ihnen ein unverbindliches Angebot innerhalb von 24
            Stunden.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/kontakt" className={styles.primaryButton}>
              Jetzt anfragen
            </Link>
            <Link href="/termin" className={styles.secondaryButton}>
              Termin buchen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
