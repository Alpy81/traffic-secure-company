import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Sperrzone24 – Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.headerLabelLine} />
          Rechtliches
          <span className={styles.headerLabelLine} />
        </div>
        <h1 className={styles.headerTitle}>Impressum</h1>
        <p className={styles.headerSubtitle}>
          Angaben gemäß § 5 TMG (Musterdaten – bitte später ersetzen).
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Anbieter
              </h2>
              <p className={styles.text}>
                Sperrzone24 Musterfirma
                <br />
                Max Mustermann
                <br />
                Musterstraße 1<br />
                60311 Frankfurt am Main
                <br />
                Deutschland
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Kontakt
              </h2>
              <p className={styles.text}>
                Telefon: +49 123 456 789
                <br />
                E-Mail: info@sperrzone24.de
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Umsatzsteuer
              </h2>
              <p className={styles.text}>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: DE123456789 (Musterdaten)
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Registereintrag
              </h2>
              <p className={styles.text}>
                Eintragung im Handelsregister.
                <br />
                Registergericht: Amtsgericht Musterstadt
                <br />
                Registernummer: HRB 12345 (Musterdaten)
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Verantwortlich für den Inhalt
              </h2>
              <p className={styles.text}>Max Mustermann, Anschrift wie oben.</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Haftung für Inhalte
              </h2>
              <p className={styles.text}>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>
                <span className={styles.titleDot} />
                Urheberrecht
              </h2>
              <p className={styles.text}>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
                Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                der Grenzen des Urheberrechts bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
