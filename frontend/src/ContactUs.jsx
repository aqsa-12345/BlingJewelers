import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "./services/api";
import styles from "./ContactUs.module.css";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log("Contact Data:", data);
    await submitContactForm(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        <div className="text-center mb-4">
          <h3 className={styles.logoText}>Contact Us</h3>
          <p className={styles.subtitleText}>
            We'd love to hear from you! Get in touch with our team.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input type="text" id="name" className={styles.inputField} {...register("name")} />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.inputField} {...register("email")} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input type="text" id="subject" className={styles.inputField} {...register("subject")} />
            {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" rows="4" className={styles.textareaField} {...register("message")}></textarea>
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
          </div>

          <div className="d-grid">
            <button type="submit" className={styles.sendButton}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
