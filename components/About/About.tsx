import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}></div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Warum Sperrzone24?</h2>
          <p className={styles.text}>
            Mit jahrelanger Erfahrung in der Verkehrssicherung sind wir Ihr
            zuverlässiger Partner in Frankfurt und Umgebung. Unser Team sorgt
            dafür, dass Ihre Baustelle, Veranstaltung oder Ihr Umzug sicher und
            vorschriftsgemäß abgesichert ist.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Projekte</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Erreichbar</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Zuverlässig</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
