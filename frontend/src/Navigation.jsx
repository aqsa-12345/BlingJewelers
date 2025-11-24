import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm ${styles.navbar}`}
    >
      <div className="container">
        {/* Brand / Logo */}
        <a
          className={`navbar-brand d-flex align-items-center fw-bold ${styles.navbarBrand}`}
          href="#"
        >
          <img
            src="logo-2.png" // 👈 Put this file in your 'public' folder
            alt="Bling Logo"
            className={styles.logo}
          />
          <span className={styles.brandText}>BLING</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["HOME", "ABOUT US", "SHOP", "CONTACT US"].map((item) => (
              <li key={item} className="nav-item">
                <a className={`nav-link ${styles.navLink}`} href="#">
                  {item}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.navLink}`}
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
              </a>
              <ul
                className={`dropdown-menu ${styles.dropdownMenu}`}
                aria-labelledby="pagesDropdown"
              >
                {["Page 1", "Page 2", "Page 3"].map((page) => (
                  <li key={page}>
                    <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Icons */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${styles.iconLink}`} href="#">
                $0.00 🛒
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.iconLink}`} href="#">
                👤
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
