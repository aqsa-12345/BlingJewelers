import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.heroImage}
        src="./banner.jpg"
        alt="Hero banner"
      />

      <div className={styles.overlay}>
        <h1 className={styles.title}>Bling Jewelers</h1>
        <p className={styles.subtitle}>Daily Use Minimal Jewelry</p>
        <a href="#" className={styles.shopButton}>
          SHOP NOW
        </a>
      </div>
    </div>
  );
}

export default HeroSection;

