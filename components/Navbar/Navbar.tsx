"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über Uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Sperrzone24"
            width={200}
            height={45}
            priority
            style={{ width: "200px", height: "auto" }}
          />
        </Link>

        {/* Desktop */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.navLinkActive : ""
                }`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <Link href="/termin" className={styles.ctaButton}>
            Termin buchen
          </Link>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}>
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileOverlay} onClick={() => setOpen(false)} />
      )}

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuInner}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileLink} ${
                pathname === item.href ? styles.mobileLinkActive : ""
              }`}
              onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/termin"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}>
            Termin buchen
          </Link>
        </div>
      </div>
    </nav>
  );
}
