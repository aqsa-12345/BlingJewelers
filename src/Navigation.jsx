function Navigation() {
  return (
    <>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
        <div className="container">
          {/* Brand / Logo */}
          <a
            className="navbar-brand fw-bold"
            href="#"
            style={{ color: "#4b3c2f" }}
          >
            BLING
          </a>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SHOP
                </a>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 3
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>

            {/* Right Icons */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  $0.00 🛒
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  👤
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
