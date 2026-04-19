import styles from "./ueber-uns.module.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Uns",
  description:
    "Erfahren Sie mehr über Sperrzone24 – Ihr zuverlässiger Partner für Verkehrssicherung in Frankfurt und Umgebung.",
};

const values = [
  {
    icon: "⚡",
    title: "Schnelligkeit",
    description:
      "Wir reagieren schnell auf Ihre Anfragen und sind innerhalb kürzester Zeit vor Ort.",
  },
  {
    icon: "🛡️",
    title: "Sicherheit",
    description:
      "Die Sicherheit aller Verkehrsteilnehmer hat für uns oberste Priorität – ohne Kompromisse.",
  },
  {
    icon: "✅",
    title: "Zuverlässigkeit",
    description:
      "Auf uns können Sie sich verlassen – termingerecht, professionell und transparent.",
  },
  {
    icon: "💬",
    title: "Kommunikation",
    description:
      "Persönlicher Kontakt, klare Absprachen und ein fester Ansprechpartner für Ihr Projekt.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.headerLabelLine} />
          Sperrzone24
          <span className={styles.headerLabelLine} />
        </div>
        <h1 className={styles.headerTitle}>Über Uns</h1>
        <p className={styles.headerSubtitle}>
          Ihr zuverlässiger Partner für professionelle Verkehrssicherung in
          Frankfurt und Umgebung.
        </p>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyContainer}>
          {/* Bild */}
          <div className={styles.storyImageWrapper}>
            <Image
              src="/images/equipment.webp"
              alt="Sperrzone24 Einsatzfahrzeug"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.storyImage}
            />
          </div>

          {/* Content */}
          <div className={styles.storyContent}>
            <div className={styles.storyLabel}>
              <span className={styles.storyLabelLine} />
              Wer wir sind
            </div>

            <h2 className={styles.storyTitle}>
              Erfahrung trifft{" "}
              <span className={styles.storyTitleAccent}>Professionalität</span>
            </h2>

            <p className={styles.storyText}>
              Sperrzone24 ist ein erfahrenes Unternehmen für Verkehrssicherung
              mit Sitz in Frankfurt am Main. Seit unserer Gründung setzen wir
              auf höchste Qualität, schnelle Reaktionszeiten und eine enge
              Zusammenarbeit mit unseren Kunden.
            </p>
            <p className={styles.storyText}>
              Unser Team besteht aus qualifizierten Fachkräften, die sich mit
              den aktuellen Vorschriften und Richtlinien bestens auskennen. Ob
              Halteverbotszone, Baustellenabsicherung oder komplette
              Straßensperrung – wir übernehmen die Planung, Genehmigung und
              Umsetzung für Sie.
            </p>

            <div className={styles.storyStats}>
              <div className={styles.storyStat}>
                <span className={styles.storyStatNumber}>500+</span>
                <span className={styles.storyStatLabel}>Projekte</span>
              </div>
              <div className={styles.storyStat}>
                <span className={styles.storyStatNumber}>24/7</span>
                <span className={styles.storyStatLabel}>Erreichbar</span>
              </div>
              <div className={styles.storyStat}>
                <span className={styles.storyStatNumber}>100%</span>
                <span className={styles.storyStatLabel}>Zuverlässig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.valuesContainer}>
          <div className={styles.valuesHeader}>
            <div className={styles.valuesLabel}>
              <span className={styles.valuesLabelLine} />
              Was uns auszeichnet
              <span className={styles.valuesLabelLine} />
            </div>
            <h2 className={styles.valuesTitle}>Unsere Werte</h2>
            <p className={styles.valuesSubtitle}>
              Diese Grundsätze leiten unser tägliches Handeln.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>{value.icon}</div>
                <h3 className={styles.valueCardTitle}>{value.title}</h3>
                <p className={styles.valueCardDescription}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
