import { useRef, useState } from "react";
import styles from "./LoginPage.module.css";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [focusedField, setFocusedField] = useState("");

  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        <div className="text-center mb-4">
          <h3 className={styles.logoText}>Bling</h3>
          <p className={styles.welcomeText}>Welcome back!</p>
        </div>
        <Form>
          <div className={styles.fieldGroup}>
            <Form.Label
              htmlFor="username"
              className={`${styles.label} ${focusedField === "username" ? styles.activeLabel : ""}`}
              onClick={() => usernameRef.current.focus()}
            >
              Username or Email
            </Form.Label>
            <Form.Control
              id="username"
              type="text"
              className={`${styles.inputField} ${focusedField === "username" ? styles.activeInput : ""}`}
              ref={usernameRef}
              onFocus={() => setFocusedField("username")}
              onBlur={() => setFocusedField("")}
            />
          </div>
          <div className={styles.fieldGroup}>
            <Form.Label
              htmlFor="password"
              className={`${styles.label} ${focusedField === "password" ? styles.activeLabel : ""}`}
              onClick={() => passwordRef.current.focus()}
            >
              Password
            </Form.Label>
            <Form.Control
              id="password"
              type="password"
              className={`${styles.inputField} ${focusedField === "password" ? styles.activeInput : ""}`}
              ref={passwordRef}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField("")}
            />
          </div>

          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <Form.Check
              type="checkbox"
              label="Remember me"
              className={styles.checkboxLabel}
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" className={styles.loginButton}>
              Log In
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <p className={styles.footerText}>
            Don’t have an account?{" "}
            <a href="#" className={styles.signUpLink}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
