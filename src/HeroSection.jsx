function HeroSection() {
  return (
    <div className="position-relative" style={{ height: "500px", overflow: "hidden" }}>
      <img
        className="w-100 h-100"
        src="./banner.jpg"
        alt="Hero banner"
        style={{ objectFit: "cover" }}
      />

      {/* Overlay content */}
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
        <h1 className="fs-2 fw-bold">Bling Jewelers</h1>
        <p className="fs-4 mb-3">Daily Use Minimal Jewelry</p>
        <a href="#" className="btn btn-light fw-bold py-3 px-4 rounded">
          SHOP NOW
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
