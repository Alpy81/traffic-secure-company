import styles from "./strassensperrungen.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Straßensperrungen",
  description:
    "Professionelle Voll- und Teilsperrungen in Frankfurt und Umgebung – behördlich abgestimmt, sicher und zuverlässig.",
};

export default function StrassensperrungenPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Straßensperrungen</h1>
        <p className={styles.heroSubtitle}>
          Voll- und Teilsperrungen – behördlich abgestimmt, sicher und
          termingerecht umgesetzt.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/strasse.webp"
                alt="Straßensperrung – Sperrzone24"
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
                Straßensperrungen erfordern präzise Planung, behördliche
                Abstimmung und professionelle Umsetzung. Sperrzone24 übernimmt
                die gesamte Koordination – von der Antragstellung bis zur
                vollständigen Beschilderung nach StVO.
              </p>
              <p className={styles.text}>
                Ob kurzzeitige Teilsperrung oder mehrtägige Vollsperrung – wir
                sorgen für einen reibungslosen Ablauf und die Sicherheit aller
                Verkehrsteilnehmer.
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
                  <strong>Voll- und Teilsperrungen</strong>
                  <p>
                    Wir setzen sowohl komplette Straßensperrungen als auch
                    gezielte Fahrstreifensperrungen fachgerecht um.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Umleitungskonzepte</strong>
                  <p>
                    Wir planen und beschildern Umleitungsstrecken vollständig –
                    für einen geordneten Verkehrsfluss während der Sperrung.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Behördliche Abstimmung</strong>
                  <p>
                    Alle notwendigen Genehmigungen werden von uns beantragt und
                    mit den zuständigen Behörden sowie der Polizei koordiniert.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Nacht- und Wochenendeinsätze</strong>
                  <p>
                    Wir sind auch außerhalb der regulären Arbeitszeiten für Sie
                    im Einsatz – zuverlässig und ohne Aufpreis auf Absprache.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Straßensperrung anfragen</h2>
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
