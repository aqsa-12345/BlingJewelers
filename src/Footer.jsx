
function Footer() {
  return (
    <footer className="bg-light text-dark pt-4 mt-5 border-top">
      {/* Top Black Strip */}
      <div className="bg-dark text-white py-4">
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
      <div className="container py-5">
        <div className="row">

          {/* Logo and Social */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">BLING <br /> JEWELLERY</h4>
            <p className="text-muted small">NOT FOR ORDINARY</p>
            <div>
              <a href="#" className="me-3 text-dark"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
          </div>

          {/* Policies */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Our Policies</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Shipping Policy</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Company Profile</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-md-3">
            <h5 className="fw-bold">Newsletter Signup</h5>
            <p className="text-muted small">Subscribe to our newsletter and get 5% off your first purchase</p>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Your email address" />
              <button className="btn btn-dark">Subscribe</button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
