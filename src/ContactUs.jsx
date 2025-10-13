import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        <div className="text-center mb-4">
          <div className={styles.logoCircle}>
            <i className="bi bi-envelope-paper"></i>
          </div>
          <h3 className={styles.logoText}>Contact Us</h3>
          <p className={styles.subtitleText}>
            We'd love to hear from you! Get in touch with our team.
          </p>
        </div>

        <form className={styles.formContainer}>
          {/* Full Name */}
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.inputField}
              placeholder=""
            />
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.inputField}
              placeholder=""
            />
          </div>

          {/* Subject */}
          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={styles.inputField}
              placeholder=""
            />
          </div>

          {/* Message */}
          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={styles.textareaField}
              placeholder=""
            ></textarea>
          </div>

          {/* Button */}
          <div className="d-grid">
            <button type="submit" className={styles.sendButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
