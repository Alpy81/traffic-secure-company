import styles from "./fahrbahnmarkierung.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrbahnmarkierung",
  description:
    "Professionelle Fahrbahnmarkierungen für Straßen, Autobahnen und Parkflächen in Frankfurt und Umgebung – normgerecht und dauerhaft.",
};

export default function FahrbahnmarkierungPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Fahrbahnmarkierung</h1>
        <p className={styles.heroSubtitle}>
          Normgerechte Markierungsarbeiten für Straßen, Autobahnen und
          Parkflächen — präzise, dauerhaft und behördlich zugelassen.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/fahrbahnmarkierung.webp"
                alt="Fahrbahnmarkierung – Sperrzone24"
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
                Fahrbahnmarkierungen sind ein zentrales Element der
                Verkehrssicherheit. Sie leiten den Verkehr, schützen Fußgänger
                und sorgen für geordnete Verkehrsführung — auf Bundesautobahnen,
                Bundes- und Landesstraßen sowie auf Parkflächen und in
                Industriegebieten.
              </p>
              <p className={styles.text}>
                Sperrzone24 führt Markierungsarbeiten nach den geltenden Normen
                (ZTV M 13, StVO, RMS) aus — mit modernsten Kaltplastik- und
                Thermoplastverfahren für maximale Haltbarkeit und Sichtbarkeit.
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
                  <strong>Autobahnmarkierungen</strong>
                  <p>
                    Fahrstreifenmarkierungen, Leitlinien, Randlinien und
                    Sperrflächen auf Bundesautobahnen — normgerecht nach ZTV M
                    13 und RMS.
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
                  <strong>Straßenmarkierungen</strong>
                  <p>
                    Haltelinien, Zebrastreifen, Pfeile, Fahrradwege und
                    Sperrflächen auf Bundes-, Landes- und Gemeindestraßen.
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
                  <strong>Parkflächenmarkierungen</strong>
                  <p>
                    Parkplatzkennzeichnung, Behindertenstellplätze,
                    Feuerwehrzufahrten und Ladezonen für Gewerbe, Kommunen und
                    Industrieanlagen.
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
                  <strong>Kaltplastik & Thermoplast</strong>
                  <p>
                    Wir setzen auf hochwertige Markierungsmaterialien mit langer
                    Lebensdauer — auch für stark befahrene Strecken und
                    Hochleistungsanforderungen.
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
                  <strong>Entfernung & Erneuerung</strong>
                  <p>
                    Fräsen und Entfernen alter Markierungen sowie fachgerechte
                    Erneuerung — auf Wunsch auch nachts und am Wochenende.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Fahrbahnmarkierung anfragen</h2>
          <p className={styles.ctaText}>
            Wir erstellen Ihnen ein unverbindliches Angebot innerhalb von 24
            Stunden — für Projekte jeder Größe.
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
