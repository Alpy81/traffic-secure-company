import styles from "./verkehrsplanung.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verkehrsplanung",
  description:
    "Professionelle Verkehrszeichenpläne und behördliche Genehmigungen in Frankfurt und Umgebung – effizient und regelkonform.",
};

export default function VerkehrsplanungPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Verkehrsplanung</h1>
        <p className={styles.heroSubtitle}>
          Professionelle Verkehrszeichenpläne und Genehmigungen – effizient,
          regelkonform und behördlich abgestimmt.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/ampel.webp"
                alt="Verkehrsplanung – Sperrzone24"
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
                Eine durchdachte Verkehrsplanung ist die Grundlage jeder
                erfolgreichen Baustellenabsicherung oder Straßensperrung.
                Sperrzone24 erstellt für Sie professionelle
                Verkehrszeichenpläne, die den Anforderungen der Behörden
                vollständig entsprechen.
              </p>
              <p className={styles.text}>
                Wir kennen die lokalen Gegebenheiten in Frankfurt und Umgebung
                und sorgen dafür, dass Ihr Verkehrskonzept schnell genehmigt und
                reibungslos umgesetzt wird.
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
                  <strong>Verkehrszeichenpläne nach StVO</strong>
                  <p>
                    Wir erstellen normgerechte Verkehrszeichenpläne als
                    Grundlage für die behördliche Genehmigung Ihres Projekts.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Behördliche Genehmigungen</strong>
                  <p>
                    Wir übernehmen die Einholung aller notwendigen Genehmigungen
                    bei den zuständigen Straßenverkehrsbehörden für Sie.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Individuelle Verkehrskonzepte</strong>
                  <p>
                    Jedes Projekt ist einzigartig – wir entwickeln
                    maßgeschneiderte Konzepte, die optimal auf Ihre
                    Anforderungen abgestimmt sind.
                  </p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <div>
                  <strong>Beratung und Planung vor Ort</strong>
                  <p>
                    Unser Team kommt zu Ihnen und begutachtet die örtlichen
                    Gegebenheiten – für eine präzise und praxisnahe Planung.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Verkehrsplanung anfragen</h2>
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
