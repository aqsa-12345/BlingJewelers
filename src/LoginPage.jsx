// import styles from "./LoginPage.module.css";
// import { Form, Button } from "react-bootstrap";

// function LoginPage() {
//   return (
//     <div className={styles.bgContainer}>
//       <div className={styles.glassCard}>
//         <div className="text-center mb-4">
//           <h3 className={styles.logoText}>Bling</h3>
//           <p className={styles.welcomeText}>Welcome back!</p>
//         </div>
//         <Form>
//           <div className={styles.fieldGroup}>
//             <Form.Label className={styles.label}>Username or Email</Form.Label>
//             <Form.Control
//               type="text"
//               className={styles.inputField}
//             />
//           </div>
//           <div className={styles.fieldGroup}>
//             <Form.Label className={styles.label}>Password</Form.Label>
//             <Form.Control
//               type="password"
//               className={styles.inputField}
//             />
//           </div>
//           <Form.Group controlId="formBasicCheckbox" className="mb-3">
//             <Form.Check
//               type="checkbox"
//               label="Remember me"
//               className={styles.checkboxLabel}
//             />
//           </Form.Group>
//           <div className="d-grid">
//             <Button type="submit" className={styles.loginButton}>
//               Log In
//             </Button>
//           </div>
//         </Form>
//         <div className="text-center mt-3">
//           <p className={styles.footerText}>
//             Don’t have an account?{" "}
//             <a href="#" className={styles.signUpLink}>
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useRef, useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
  const usernameRef = useRef(null);
  const [focusedInput, setFocusedInput] = useState("");

  useEffect(() => {
    // inputRef ke through focus
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.bgContainer}>
      <div className={styles.glassCard}>
        <div className="text-center mb-4">
          <h3 className={styles.logoText}>Bling</h3>
          <p className={styles.welcomeText}>Welcome back!</p>
        </div>

        <Form>
          {/* Username */}
          <div className={styles.fieldGroup}>
            <Form.Label
              className={
                focusedInput === "username"
                  ? `${styles.label} ${styles.bold}`
                  : styles.label
              }
            >
              Username or Email
            </Form.Label>
            <Form.Control
              type="text"
              className={styles.inputField}
              onFocus={() => setFocusedInput("username")}
              onBlur={() => setFocusedInput("")}
              ref={usernameRef} // React-Bootstrap >=2.x me yeh kaam karega
            />
          </div>

          {/* Password */}
          <div className={styles.fieldGroup}>
            <Form.Label
              className={
                focusedInput === "password"
                  ? `${styles.label} ${styles.bold}`
                  : styles.label
              }
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              className={styles.inputField}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput("")}
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


