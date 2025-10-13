
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Black Strip */}
      <div className={styles.topStrip}>
        <div className="container d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
          <div className="mb-3 mb-md-0">
            <i className="fas fa-car me-2"></i>
            <strong>FREE SHIPPING</strong>
            <p className="mb-0 small">Free shipping on all orders over 1000.</p>
          </div>
          <div className="mb-3 mb-md-0">
            <i className="fas fa-life-ring me-2"></i>
            <strong>SUPPORT 24/7</strong>
            <p className="mb-0 small">Contact us 24 hours a day, 7 days a week</p>
          </div>
          <div className="mb-3 mb-md-0">
            <i className="fas fa-undo me-2"></i>
            <strong>7 DAYS RETURN</strong>
            <p className="mb-0 small">Simply return it within 7 days for an exchange.</p>
          </div>
          <div>
            <i className="fas fa-lock me-2"></i>
            <strong>100% PAYMENT SECURE</strong>
            <p className="mb-0 small">We ensure secure payment with PEV</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={`container ${styles.mainFooter}`}>
        <div className="row">

          {/* Logo and Social */}
          <div className={`col-6 col-md-3 mb-4 ${styles.logoSection}`}>
            <h4>BLING <br /> JEWELLERY</h4>
            <p>NOT FOR ORDINARY</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
          </div>

          {/* Policies */}
          <div className="col-md-3 mb-4">
            <h5 className={styles.linkTitle}>Our Policies</h5>
            <ul className={styles.linkList}>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-4">
            <h5 className={styles.linkTitle}>Information</h5>
            <ul className={styles.linkList}>
              <li><a href="#">Company Profile</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className={`col-md-3 ${styles.newsletter}`}>
            <h5 className={styles.linkTitle}>Newsletter Signup</h5>
            <p>Subscribe to our newsletter and get 5% off your first purchase</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
