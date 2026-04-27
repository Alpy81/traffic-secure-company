import styles from "./Services.module.css";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: "/images/fahrbahnmarkierung.webp",
    title: "Fahrbahnmarkierung",
    description:
      "Normgerechte Markierungsarbeiten für Straßen, Autobahnen und Parkflächen — präzise, dauerhaft und behördlich zugelassen.",
    href: "/leistungen/fahrbahnmarkierung",
  },
  {
    image: "/images/halteverbot.webp",
    title: "Halteverbotszonen",
    description:
      "Einrichtung und Genehmigung von Halteverbotszonen für Umzüge, Baustellen und Veranstaltungen.",
    href: "/leistungen/halteverbotszonen",
  },
  {
    image: "/images/strasse.webp",
    title: "Straßensperrungen",
    description:
      "Professionelle Voll- und Teilsperrungen mit behördlicher Abstimmung und fachgerechter Beschilderung.",
    href: "/leistungen/strassensperrungen",
  },
  {
    image: "/images/baustelle.webp",
    title: "Baustellenabsicherung",
    description:
      "Komplette Absicherung von Baustellen im Straßenraum nach RSA und den aktuellen Vorschriften.",
    href: "/leistungen/baustellenabsicherung",
  },
  {
    image: "/images/ampel.webp",
    title: "Verkehrsplanung",
    description:
      "Erstellung von Verkehrszeichenplänen und Einholung der erforderlichen Genehmigungen.",
    href: "/leistungen/verkehrsplanung",
  },
  {
    image: "/images/nachtschicht.webp",
    title: "24/7 Bereitschaft",
    description:
      "Rund um die Uhr erreichbar – für Notfälle, kurzfristige Einsätze und schnelle Reaktionszeiten.",
    href: "/leistungen/24-7-bereitschaft",
  },
  {
    image: "/images/gross-einsatz.webp",
    title: "Beratung & Service",
    description:
      "Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Verkehrssicherung.",
    href: "/leistungen/beratung-service",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Was wir bieten
          <span className={styles.labelLine} />
        </div>
        <h2 className={styles.sectionTitle}>Unsere Leistungen</h2>
        <p className={styles.sectionSubtitle}>
          Von der Planung bis zur Umsetzung – alles aus einer Hand.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <Link key={service.href} href={service.href} className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.cardFooter}>
                Mehr erfahren
                <span className={styles.cardArrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
