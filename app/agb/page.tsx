import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der Sperrzone24 für Leistungen im Bereich Verkehrssicherung.",
};

export default function AGBPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.headerLabelLine} />
          Rechtliches
          <span className={styles.headerLabelLine} />
        </div>
        <h1 className={styles.headerTitle}>Allgemeine Geschäftsbedingungen</h1>
        <p className={styles.headerSubtitle}>
          Mustervorlage – bitte später durch rechtssichere AGB ersetzen.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                1. Geltungsbereich
              </h2>
              <p className={styles.text}>
                Diese AGB gelten für alle Verträge zwischen Sperrzone24 und
                seinen Kunden über Leistungen im Bereich Verkehrssicherung.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                2. Leistungen
              </h2>
              <p className={styles.text}>
                Der Anbieter erbringt Leistungen insbesondere in den Bereichen
                Halteverbotszonen, Baustellenabsicherung, Straßensperrungen und
                Verkehrsplanung. Umfang und Details ergeben sich aus dem
                jeweiligen Angebot bzw. Vertrag.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                3. Angebot & Vertragsschluss
              </h2>
              <p className={styles.text}>
                Angebote sind freibleibend, sofern nicht ausdrücklich anders
                angegeben. Ein Vertrag kommt erst mit schriftlicher Bestätigung
                oder durch Leistungsbeginn zustande.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                4. Preise & Zahlungsbedingungen
              </h2>
              <p className={styles.text}>
                Es gelten die im Angebot vereinbarten Preise. Rechnungen sind,
                sofern nicht anders vereinbart, innerhalb von 14 Tagen ohne
                Abzug fällig.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                5. Haftung
              </h2>
              <p className={styles.text}>
                Der Anbieter haftet unbeschränkt bei Vorsatz und grober
                Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet der Anbieter
                nur bei Verletzung wesentlicher Vertragspflichten
                (Kardinalpflichten) und begrenzt auf den vorhersehbaren,
                vertragstypischen Schaden.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                6. Schlussbestimmungen
              </h2>
              <p className={styles.text}>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand
                ist, soweit zulässig, der Sitz des Anbieters. Sollten einzelne
                Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
