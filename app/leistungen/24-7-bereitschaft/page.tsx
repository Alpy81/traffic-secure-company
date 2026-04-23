import styles from "./bereitschaft.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Bereitschaft",
  description:
    "Rund um die Uhr erreichbar – Sperrzone24 reagiert schnell bei Notfällen und kurzfristigen Einsätzen in Frankfurt und Umgebung.",
};

export default function BereitschaftPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>24/7 Bereitschaft</h1>
        <p className={styles.heroSubtitle}>
          Rund um die Uhr für Sie da – schnell, zuverlässig und auch in
          dringenden Notfällen sofort einsatzbereit.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/nachtschicht.webp"
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
                Verkehrssicherung kennt keine Öffnungszeiten. Unfälle,
                Rohrbrüche, Sturmschäden oder kurzfristige Baustellen können
                jederzeit entstehen – auch nachts, am Wochenende oder an
                Feiertagen. SperrZone24 ist immer erreichbar.
              </p>
              <p className={styles.text}>
                Unser Bereitschaftsteam reagiert schnell, rückt umgehend aus und
                sichert die Einsatzstelle professionell ab – damit Sie und
                andere Verkehrsteilnehmer geschützt sind.
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
                <span className={styles.featureIcon}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <strong>24 Stunden erreichbar</strong>
                  <p>
                    Unser Notfalltelefon ist rund um die Uhr besetzt – 365 Tage
                    im Jahr, auch an Sonn- und Feiertagen.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <strong>Schnelle Reaktionszeiten</strong>
                  <p>
                    Wir sind innerhalb kürzester Zeit vor Ort und sichern die
                    Gefahrenstelle professionell ab.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <strong>Notfall-Einsätze</strong>
                  <p>
                    Bei plötzlichen Ereignissen wie Unfällen, Straßenschäden
                    oder Witterungseinflüssen handeln wir sofort und
                    unbürokratisch.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <strong>Flexibler Bereitschaftsdienst</strong>
                  <p>
                    Ob einmalig oder dauerhaft – wir passen unsere Bereitschaft
                    flexibel an Ihre Projektanforderungen an.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Jetzt Notfall melden</h2>
          <p className={styles.ctaText}>
            Rund um die Uhr erreichbar – rufen Sie uns an oder schreiben Sie
            uns.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="tel:+49 173 666 0900" className={styles.primaryButton}>
              📞 Jetzt anrufen
            </Link>
            <Link href="/kontakt" className={styles.secondaryButton}>
              Nachricht senden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
