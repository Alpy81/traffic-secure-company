import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>SPERRZONE24</h3>
          <p className={styles.description}>
            Professionelle Verkehrssicherung in Frankfurt und Umgebung –
            zuverlässig, schnell und rund um die Uhr.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Navigation</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ueber-uns">Über Uns</Link>
            </li>
            <li>
              <Link href="/leistungen">Leistungen</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Leistungen</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/leistungen">Halteverbotszonen</Link>
            </li>
            <li>
              <Link href="/leistungen">Straßensperrungen</Link>
            </li>
            <li>
              <Link href="/leistungen">Baustellenabsicherung</Link>
            </li>
            <li>
              <Link href="/leistungen">Verkehrsplanung</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Kontakt</h4>
          <ul className={styles.contactList}>
            <li>📍 Frankfurt am Main</li>
            <li>📞 +49 123 456 789</li>
            <li>✉️ info@sperrzone24.de</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Sperrzone24. Alle Rechte
          vorbehalten.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/agb">AGB</Link>
        </div>
      </div>
    </footer>
  );
}
