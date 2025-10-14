import React, { useRef, useState } from "react";
import styles from "./RegistrationPage.module.css";
import { Form, Button, Row, Col } from "react-bootstrap";

function RegistrationPage() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [focusedField, setFocusedField] = useState("");

  const focusInput = (inputRef, fieldName) => {
    inputRef.current.focus();
    setFocusedField(fieldName);
  };

  const handleBlur = () => setFocusedField("");

  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        <div className="text-center mb-4">
          <h3 className={styles.logoText}>Bling</h3>
          <p className={styles.welcomeText}>Create your account</p>
        </div>
        <Form>
          <Row className="mb-3">
            <Col>
              <div className={styles.fieldGroup}>
                <Form.Label
                  className={`${styles.label} ${focusedField === "firstName" ? styles.activeLabel : ""}`}
                  onClick={() => focusInput(firstNameRef, "firstName")}
                >
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  className={`${styles.inputField} ${focusedField === "firstName" ? styles.activeInput : ""}`}
                  ref={firstNameRef}
                  onFocus={() => setFocusedField("firstName")}
                  onBlur={handleBlur}
                />
              </div>
            </Col>
            <Col>
              <div className={styles.fieldGroup}>
                <Form.Label
                  className={`${styles.label} ${focusedField === "lastName" ? styles.activeLabel : ""}`}
                  onClick={() => focusInput(lastNameRef, "lastName")}
                >
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  className={`${styles.inputField} ${focusedField === "lastName" ? styles.activeInput : ""}`}
                  ref={lastNameRef}
                  onFocus={() => setFocusedField("lastName")}
                  onBlur={handleBlur}
                />
              </div>
            </Col>
          </Row>

          <div className={styles.fieldGroup}>
            <Form.Label
              className={`${styles.label} ${focusedField === "contact" ? styles.activeLabel : ""}`}
              onClick={() => focusInput(contactRef, "contact")}
            >
              Contact Number
            </Form.Label>
            <Form.Control
              type="text"
              className={`${styles.inputField} ${focusedField === "contact" ? styles.activeInput : ""}`}
              ref={contactRef}
              onFocus={() => setFocusedField("contact")}
              onBlur={handleBlur}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Form.Label
              className={`${styles.label} ${focusedField === "email" ? styles.activeLabel : ""}`}
              onClick={() => focusInput(emailRef, "email")}
            >
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              className={`${styles.inputField} ${focusedField === "email" ? styles.activeInput : ""}`}
              ref={emailRef}
              onFocus={() => setFocusedField("email")}
              onBlur={handleBlur}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Form.Label
              className={`${styles.label} ${focusedField === "password" ? styles.activeLabel : ""}`}
              onClick={() => focusInput(passwordRef, "password")}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              className={`${styles.inputField} ${focusedField === "password" ? styles.activeInput : ""}`}
              ref={passwordRef}
              onFocus={() => setFocusedField("password")}
              onBlur={handleBlur}
            />
          </div>

          <div className="d-grid">
            <Button type="submit" className={styles.signupButton}>
              Sign Up
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <p className={styles.footerText}>
            Already have an account? <a href="#" className={styles.signInLink}>Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
