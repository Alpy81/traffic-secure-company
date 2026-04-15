import styles from "./leistungen.module.css";

const services = [
  {
    icon: "🚧",
    title: "Halteverbotszonen",
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
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>Unsere Leistungen</h1>
        <p className={styles.headerSubtitle}>
          Umfassende Verkehrssicherung – von der Planung bis zur Umsetzung.
        </p>
      </section>

      <section className={styles.servicesList}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.serviceContent}>
                <span className={styles.icon}>{service.icon}</span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
