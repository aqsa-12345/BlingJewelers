import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.bgContainer}>
      <div className={styles.dashboardCard}>
        <h1 className={styles.title}>Dashboard 💎</h1>
        <p className={styles.subtitle}>
          Manage your jewelry store efficiently and elegantly
        </p>

        <div className={styles.buttonGroup}>
          <button
            className={styles.btn}
            onClick={() => navigate("/addproduct")}
          >
            ➕ Add Product
          </button>

          <button
            className={styles.btn}
            onClick={() => navigate("/updateproduct")}
          >
            ✏️ Update Product
          </button>

          <button
            className={styles.btn}
            onClick={() => navigate("/removeproduct")}
          >
            🗑️ Remove Product
          </button>

          <button
            className={styles.logoutBtn}
            onClick={() => navigate("/adminlogin")}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
