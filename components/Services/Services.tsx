import styles from "./Services.module.css";

const services = [
  {
    icon: "🚧",
    title: "Halteverbotszonen",
    description:
      "Einrichtung und Genehmigung von Halteverbotszonen für Umzüge, Baustellen und Veranstaltungen.",
  },
  {
    icon: "🛣️",
    title: "Straßensperrungen",
    description:
      "Professionelle Voll- und Teilsperrungen mit behördlicher Abstimmung und fachgerechter Beschilderung.",
  },
  {
    icon: "🏗️",
    title: "Baustellenabsicherung",
    description:
      "Komplette Absicherung von Baustellen im Straßenraum nach RSA und den aktuellen Vorschriften.",
  },
  {
    icon: "📋",
    title: "Verkehrsplanung",
    description:
      "Erstellung von Verkehrszeichenplänen und Einholung der erforderlichen Genehmigungen.",
  },
  {
    icon: "🔦",
    title: "24/7 Bereitschaft",
    description:
      "Rund um die Uhr erreichbar – für Notfälle, kurzfristige Einsätze und schnelle Reaktionszeiten.",
  },
  {
    icon: "🤝",
    title: "Beratung & Service",
    description:
      "Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Verkehrssicherung.",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Unsere Leistungen</h2>
        <p className={styles.sectionSubtitle}>
          Von der Planung bis zur Umsetzung – alles aus einer Hand.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
