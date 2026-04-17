import styles from "./ueber-uns.module.css";
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
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>Über Uns</h1>
        <p className={styles.headerSubtitle}>
          Ihr Partner für Verkehrssicherung in Frankfurt und Umgebung.
        </p>
      </section>

      <section className={styles.story}>
        <div className={styles.storyContainer}>
          <div className={styles.storyImage}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Wer wir sind</h2>
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
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesContainer}>
          <h2 className={styles.valuesTitle}>Unsere Werte</h2>
          <p className={styles.valuesSubtitle}>
            Diese Grundsätze leiten unser tägliches Handeln.
          </p>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
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
