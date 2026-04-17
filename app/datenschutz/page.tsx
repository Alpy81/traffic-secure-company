import styles from "./datenschutz.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Sperrzone24 – Informationen zum Umgang mit Ihren personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>Datenschutzerklärung</h1>
        <p className={styles.headerSubtitle}>
          Mustervorlage – bitte später an eure tatsächlichen Tools/Services
          anpassen.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.title}>1. Verantwortlicher</h2>
            <p className={styles.text}>
              Sperrzone24 Musterfirma
              <br />
              Max Mustermann
              <br />
              Musterstraße 1<br />
              60311 Frankfurt am Main
              <br />
              Deutschland
              <br />
              E-Mail: info@sperrzone24.de
            </p>

            <h2 className={styles.title}>2. Allgemeine Hinweise</h2>
            <p className={styles.text}>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Personenbezogene Daten werden auf dieser Website nur im
              notwendigen Umfang verarbeitet.
            </p>

            <h2 className={styles.title}>3. Hosting & Server-Logs</h2>
            <p className={styles.text}>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind z. B. Browsertyp,
              Betriebssystem, Referrer-URL, Hostname, Uhrzeit der Anfrage und
              IP-Adresse.
            </p>

            <h2 className={styles.title}>4. Kontaktformular</h2>
            <p className={styles.text}>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h2 className={styles.title}>5. Cookies</h2>
            <p className={styles.text}>
              Diese Website kann Cookies verwenden. Cookies richten auf Ihrem
              Rechner keinen Schaden an und enthalten keine Viren. Sie dienen
              dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
              machen.
            </p>

            <h2 className={styles.title}>6. Ihre Rechte</h2>
            <p className={styles.text}>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung sowie das Recht auf
              Datenübertragbarkeit. Außerdem haben Sie das Recht auf Widerspruch
              gegen die Verarbeitung sowie das Recht auf Beschwerde bei einer
              Aufsichtsbehörde.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
