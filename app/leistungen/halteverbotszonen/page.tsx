import styles from "./halteverbotszonen.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halteverbotszonen",
  description:
    "Professionelle Einrichtung und Genehmigung von Halteverbotszonen in Frankfurt und Umgebung – für Umzüge, Baustellen und Veranstaltungen.",
};

export default function HalteverbotszenenPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Halteverbotszonen</h1>
        <p className={styles.heroSubtitle}>
          Schnell, rechtssicher und behördlich genehmigt – wir richten Ihre
          Halteverbotszone zuverlässig ein.
        </p>
      </section>

      {/* Hauptinhalt */}
      <section className={styles.content}>
        <div className={styles.container}>
          {/* Bild + Einleitung */}
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/halteverbot.webp"
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
                Eine Halteverbotszone ist schnell aufgestellt – aber ohne die
                richtige Genehmigung drohen Bußgelder und Komplikationen.
                Sperrzone24 übernimmt für Sie die gesamte Abwicklung: von der
                Beantragung bei der Behörde bis zur fachgerechten Aufstellung
                der Schilder – alles aus einer Hand.
              </p>
              <p className={styles.text}>
                Ob Umzug, Baustelle oder Veranstaltung – wir sorgen dafür, dass
                Ihr benötigter Bereich rechtzeitig und legal freigehalten wird.
              </p>
            </div>
          </div>

          {/* Leistungsumfang */}
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
                  <strong>Behördliche Genehmigung</strong>
                  <p>
                    Wir beantragen alle notwendigen Genehmigungen bei den
                    zuständigen Behörden in Frankfurt und Umgebung.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Rechtzeitige Aufstellung</strong>
                  <p>
                    Die Schilder werden 72 Stunden vor dem gewünschten Termin
                    aufgestellt – so ist der Bereich garantiert frei.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Abholung & Entsorgung</strong>
                  <p>
                    Nach Ende der Maßnahme holen wir alle Materialien
                    zuverlässig wieder ab.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Kurzfristige Einsätze</strong>
                  <p>
                    Auch in dringenden Fällen reagieren wir schnell – sprechen
                    Sie uns einfach an.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Jetzt Halteverbotszone anfragen</h2>
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
