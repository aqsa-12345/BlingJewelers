import styles from "./RegistrationPage.module.css";
import { Form, Button, Row, Col } from "react-bootstrap";

function RegistrationPage() {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        {/* Logo + Heading */}
        <div className="text-center mb-4">
          <div className={styles.logoCircle}>
            <i className="bi bi-globe2"></i>
          </div>
          <h3 className={styles.logoText}>Bling</h3>
          <p className={styles.welcomeText}>Create your account</p>
        </div>

        {/* Form Section */}
        <Form>
          {/* First and Last Name in Same Row */}
          <Row className="mb-3">
            <Col>
              <div className={styles.fieldGroup}>
                <Form.Label className={styles.label}>First Name</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.inputField}
                  placeholder=""
                />
              </div>
            </Col>
            <Col>
              <div className={styles.fieldGroup}>
                <Form.Label className={styles.label}>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.inputField}
                  placeholder=""
                />
              </div>
            </Col>
          </Row>

          {/* Contact Number */}
          <div className={styles.fieldGroup}>
            <Form.Label className={styles.label}>Contact Number</Form.Label>
            <Form.Control
              type="text"
              className={styles.inputField}
              placeholder=""
            />
          </div>

          {/* Email Address */}
          <div className={styles.fieldGroup}>
            <Form.Label className={styles.label}>Email Address</Form.Label>
            <Form.Control
              type="email"
              className={styles.inputField}
              placeholder=""
            />
          </div>

          {/* Password */}
          <div className={styles.fieldGroup}>
            <Form.Label className={styles.label}>Password</Form.Label>
            <Form.Control
              type="password"
              className={styles.inputField}
              placeholder=""
            />
          </div>

          {/* Signup Button */}
          <div className="d-grid">
            <Button type="submit" className={styles.signupButton}>
              Sign Up
            </Button>
          </div>
        </Form>

        {/* Footer Text */}
        <div className="text-center mt-3">
          <p className={styles.footerText}>
            Already have an account?{" "}
            <a href="#" className={styles.signInLink}>
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
