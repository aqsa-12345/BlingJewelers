import { useRef, useState } from "react";
import axios from "axios";
import styles from "./LoginPage.module.css";
import { Form, Button } from "react-bootstrap";
import { loginUser } from "./services/api";

function LoginPage() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [focusedField, setFocusedField] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    console.log(data);
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    await loginUser(username);
  };

  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        <div className="text-center mb-4">
          <h3 className={styles.logoText}>Bling</h3>
          <p className={styles.welcomeText}>Welcome back!</p>
        </div>
        <Form onSubmit={handleLogin}>
          {/* Username Field */}
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

          {/* Password Field */}
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

          <div className="d-grid">
            <Button type="submit" className={styles.loginButton}>
              Log In
            </Button>
          </div>
        </Form>

        {message && <p className="text-center mt-3">{message}</p>}

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
