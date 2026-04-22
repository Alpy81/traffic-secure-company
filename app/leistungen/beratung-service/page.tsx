import styles from "./beratung-service.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beratung & Service",
  description:
    "Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Verkehrssicherung in Frankfurt und Umgebung – persönlich und kompetent.",
};

export default function BeratungServicePage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Beratung & Service</h1>
        <p className={styles.heroSubtitle}>
          Persönlich, kompetent und individuell – wir finden die optimale Lösung
          für Ihr Projekt.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/gross-einsatz.webp"
                alt="Beratung & Service – Sperrzone24"
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
                Kein Projekt gleicht dem anderen. Ob kleine Halteverbotszone
                oder komplexe Baustellenabsicherung über mehrere Wochen –
                SperrZone24 berät Sie individuell und entwickelt gemeinsam mit
                Ihnen die passende Lösung.
              </p>
              <p className={styles.text}>
                Wir stehen Ihnen von der ersten Anfrage bis zum Abschluss des
                Projekts als persönlicher Ansprechpartner zur Seite – kompetent,
                transparent und zuverlässig.
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
                  <strong>Kostenlose Erstberatung</strong>
                  <p>
                    Wir nehmen uns Zeit für Ihr Anliegen – die erste Beratung
                    ist für Sie selbstverständlich kostenlos und unverbindlich.
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
                  <strong>Individuelle Angebote</strong>
                  <p>
                    Sie erhalten ein maßgeschneidertes Angebot, das exakt auf
                    Ihren Bedarf abgestimmt ist – ohne versteckte Kosten.
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
                  <strong>Persönlicher Ansprechpartner</strong>
                  <p>
                    Bei Sperrzone24 haben Sie immer einen festen Ansprechpartner
                    – keine anonymen Hotlines, sondern echte persönliche
                    Betreuung.
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
                  <strong>Langfristige Partnerschaften</strong>
                  <p>
                    Viele unserer Kunden vertrauen uns seit Jahren. Wir bauen
                    auf langfristige Zusammenarbeit und gegenseitiges Vertrauen.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Jetzt Beratung anfragen</h2>
          <p className={styles.ctaText}>
            Sprechen Sie uns an – wir melden uns innerhalb von 24 Stunden bei
            Ihnen.
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
