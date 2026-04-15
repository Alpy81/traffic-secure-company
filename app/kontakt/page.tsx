import styles from "./kontakt.module.css";

export default function KontaktPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>Kontakt</h1>
        <p className={styles.headerSubtitle}>
          Wir freuen uns auf Ihre Nachricht – unverbindlich und kostenlos.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Nachricht senden</h2>

            <form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ihr vollständiger Name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ihre Telefonnummer (optional)"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject" className={styles.label}>
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  className={styles.select}
                  required>
                  <option value="">Bitte wählen...</option>
                  <option value="halteverbot">Halteverbotszone</option>
                  <option value="sperrung">Straßensperrung</option>
                  <option value="baustelle">Baustellenabsicherung</option>
                  <option value="planung">Verkehrsplanung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  className={styles.textarea}
                  required></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Nachricht absenden
              </button>
            </form>
          </div>

          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Kontaktdaten</h2>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <h3 className={styles.infoLabel}>Adresse</h3>
                <p className={styles.infoText}>
                  Musterstraße 1<br />
                  60311 Frankfurt am Main
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <h3 className={styles.infoLabel}>Telefon</h3>
                <p className={styles.infoText}>+49 123 456 789</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>✉️</span>
              <div>
                <h3 className={styles.infoLabel}>E-Mail</h3>
                <p className={styles.infoText}>info@sperrzone24.de</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <h3 className={styles.infoLabel}>Öffnungszeiten</h3>
                <p className={styles.infoText}>
                  Mo – Fr: 07:00 – 18:00 Uhr
                  <br />
                  Notdienst: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
