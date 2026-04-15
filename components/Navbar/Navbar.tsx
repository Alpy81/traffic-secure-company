"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SPERRZONE24
        </Link>

        <ul className={styles.navLinks}>
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

        <Link href="/termin" className={styles.ctaButton}>
          Termin buchen
        </Link>
      </div>
    </nav>
  );
}
