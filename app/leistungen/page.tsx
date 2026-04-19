import styles from "./leistungen.module.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Halteverbotszonen, Straßensperrungen, Baustellenabsicherung und Verkehrsplanung – alle Leistungen von Sperrzone24 im Überblick.",
};

const services = [
  {
    icon: "🚧",
    title: "Halteverbotszonen",
    href: "/leistungen/halteverbotszonen",
    description:
      "Wir kümmern uns um die komplette Einrichtung und Genehmigung von Halteverbotszonen. Ob für Umzüge, Bauarbeiten oder Veranstaltungen – wir übernehmen die Antragstellung bei der zuständigen Behörde, die Aufstellung der Verkehrszeichen und die fristgerechte Dokumentation.",
    features: [
      "Antragstellung bei der Straßenverkehrsbehörde",
      "Aufstellung und Abbau der Beschilderung",
      "Fotodokumentation zur Absicherung",
      "Kurzfristige Einrichtung möglich",
    ],
  },
  {
    icon: "🛣️",
    title: "Straßensperrungen",
    href: "/leistungen/strassensperrungen",
    description:
      "Professionelle Voll- und Teilsperrungen mit behördlicher Abstimmung. Wir sorgen für eine sichere und vorschriftsgemäße Durchführung – inklusive Umleitungsplanung und Beschilderung nach StVO.",
    features: [
      "Voll- und Teilsperrungen",
      "Umleitungskonzepte",
      "Abstimmung mit Behörden und Polizei",
      "Nacht- und Wochenendeinsätze",
    ],
  },
  {
    icon: "🏗️",
    title: "Baustellenabsicherung",
    href: "/leistungen/baustellenabsicherung",
    description:
      "Komplette Absicherung von Baustellen im Straßenraum nach RSA (Richtlinien für die Sicherung von Arbeitsstellen). Von der Planung bis zum Abbau – alles aus einer Hand.",
    features: [
      "Absicherung nach RSA 21",
      "Warn- und Schutzeinrichtungen",
      "Regelmäßige Kontrolle der Absicherung",
      "Anpassung bei Baufortschritt",
    ],
  },
  {
    icon: "📋",
    title: "Verkehrsplanung",
    href: "/leistungen/verkehrsplanung",
    description:
      "Erstellung von professionellen Verkehrszeichenplänen als Grundlage für die behördliche Genehmigung. Wir planen Ihre Verkehrsführung effizient und regelkonform.",
    features: [
      "Verkehrszeichenpläne nach StVO",
      "Behördliche Genehmigungen",
      "Individuelle Verkehrskonzepte",
      "Beratung und Planung vor Ort",
    ],
  },
  {
    icon: "🔦",
    title: "24/7 Bereitschaft",
    href: "/leistungen/24-7-bereitschaft",
    description:
      "Wir sind rund um die Uhr für Sie da. Bei Notfällen, kurzfristigen Einsätzen oder dringenden Änderungen – unser Team reagiert schnell und zuverlässig.",
    features: [
      "24 Stunden erreichbar",
      "Schnelle Reaktionszeiten",
      "Notfall-Einsätze",
      "Flexibler Bereitschaftsdienst",
    ],
  },
  {
    icon: "🤝",
    title: "Beratung & Service",
    href: "/leistungen/beratung-service",
    description:
      "Jedes Projekt ist anders. Deshalb bieten wir Ihnen individuelle Beratung und maßgeschneiderte Lösungen für Ihre Verkehrssicherung – persönlich und kompetent.",
    features: [
      "Kostenlose Erstberatung",
      "Individuelle Angebote",
      "Persönlicher Ansprechpartner",
      "Langfristige Partnerschaften",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.headerLabelLine} />
          Was wir bieten
          <span className={styles.headerLabelLine} />
        </div>
        <h1 className={styles.headerTitle}>Unsere Leistungen</h1>
        <p className={styles.headerSubtitle}>
          Umfassende Verkehrssicherung – von der Planung bis zur Umsetzung.
        </p>
      </section>

      {/* Liste */}
      <section className={styles.servicesList}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.serviceContent}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className={styles.serviceLink}>
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
