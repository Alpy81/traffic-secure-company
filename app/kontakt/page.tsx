"use client";

import styles from "./kontakt.module.css";
import { useActionState } from "react";
import { sendContactForm } from "./action";

const initialState = { success: false, error: null };

export default function KontaktPage() {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState
  );

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

            {state.success ? (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✓</span>
                <h3 className={styles.successTitle}>Nachricht gesendet!</h3>
                <p className={styles.successText}>
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24
                  Stunden bei Ihnen.
                </p>
                <button
                  className={styles.resetButton}
                  onClick={() => window.location.reload()}>
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form className={styles.form} action={formAction}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.input}
                      placeholder="Ihr vollständiger Name"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      className={styles.input}
                      placeholder="Ihre E-Mail-Adresse"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Telefon</label>
                  <input
                    type="tel"
                    name="telefon"
                    className={styles.input}
                    placeholder="Ihre Telefonnummer (optional)"
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Betreff *</label>
                  <select name="betreff" className={styles.select} required>
                    <option value="">Bitte wählen…</option>
                    <option value="Halteverbotszone">Halteverbotszone</option>
                    <option value="Straßensperrung">Straßensperrung</option>
                    <option value="Baustellenabsicherung">
                      Baustellenabsicherung
                    </option>
                    <option value="Verkehrsplanung">Verkehrsplanung</option>
                    <option value="Veranstaltungsabsicherung">
                      Veranstaltungsabsicherung
                    </option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Nachricht *</label>
                  <textarea
                    name="nachricht"
                    className={styles.textarea}
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen…"
                    required></textarea>
                </div>

                {state.error && (
                  <p className={styles.errorMessage}>{state.error}</p>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isPending}>
                  {isPending ? "Wird gesendet…" : "Nachricht senden"}
                </button>
              </form>
            )}
          </div>

          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Kontaktdaten</h2>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <p className={styles.infoLabel}>Adresse</p>
                <p className={styles.infoText}>
                  Musterstraße 1<br />
                  60311 Frankfurt am Main
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <p className={styles.infoLabel}>Telefon</p>
                <p className={styles.infoText}>+49 123 456 789</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>✉️</span>
              <div>
                <p className={styles.infoLabel}>E-Mail</p>
                <p className={styles.infoText}>info@sperrzone24.de</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <p className={styles.infoLabel}>Öffnungszeiten</p>
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
