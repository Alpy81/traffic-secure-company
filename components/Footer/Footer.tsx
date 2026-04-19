import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Dekorative Trennlinie oben */}
      <div className={styles.topBar} />

      <div className={styles.container}>
        {/* Brand Spalte */}
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="Zur Startseite"
            style={{ marginLeft: "-20px" }}>
            <Image
              src="/logo.png"
              alt="Sperrzone24"
              width={260}
              height={45}
              style={{ width: "260px", height: "auto" }}
            />
          </Link>
          <p
            className={styles.description}
            style={{ marginTop: "-2rem", marginBottom: "1.5rem" }}>
            Professionelle Verkehrssicherung in Frankfurt und Umgebung –
            zuverlässig, schnell und rund um die Uhr.
          </p>
          {/* Notfall Badge */}
          <div className={styles.emergencyBadge} style={{}}>
            <span className={styles.emergencyDot} />
            <span className={styles.emergencyText}>
              24/7 Notfallbereitschaft
            </span>
          </div>
        </div>

        {/* Navigation */}
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

        {/* Leistungen */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Leistungen</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/leistungen/halteverbotszonen">
                Halteverbotszonen
              </Link>
            </li>
            <li>
              <Link href="/leistungen/strassensperrungen">
                Straßensperrungen
              </Link>
            </li>
            <li>
              <Link href="/leistungen/baustellenabsicherung">
                Baustellenabsicherung
              </Link>
            </li>
            <li>
              <Link href="/leistungen/verkehrsplanung">Verkehrsplanung</Link>
            </li>
            <li>
              <Link href="/leistungen/24-7-bereitschaft">
                24/7 Bereitschaft
              </Link>
            </li>
            <li>
              <Link href="/leistungen/beratung-service">
                Beratung & Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Kontakt</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>
                Goethestr. 41
                <br />
                63477 Maintal
              </span>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <Link href="tel:+49123456789">+49 172 93 98 423</Link>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <Link href="mailto:info@sperrzone24.de">info@sperrzone24.de</Link>
            </li>
            <li>
              <span className={styles.contactIcon}>🕐</span>
              <span>Mo–Fr: 07:00–18:00 Uhr</span>
            </li>
          </ul>

          <p className={styles.ownerName}>Inhaber: Yunus Kurt</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
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
