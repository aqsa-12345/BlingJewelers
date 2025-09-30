function Products() {
    const ringData = [
  {
    id: 1,
    size: 6,
    image: './ring1.jpg',
    oldPrice: 3990,
    newPrice: 2992.5,
  },
  {
    id: 2,
    size: 8,
    image: './ring2.jpg',
    oldPrice: 3890,
    newPrice: 2917.5,
  },
  {
    id: 3,
    size: 7,
    image: './ring3.jpg',
    oldPrice: 3890,
    newPrice: 2917.5,
  },
  {
    id: 4,
    size: 6,
    image: 'ring4.jpg',
    oldPrice: 3890,
    newPrice: 2917.5,
  },
];
  return (
   <>
    <div className="container py-5">
      <h2 className="text-center mb-4">DAILY WEAR</h2>
      <div className="row">
        {ringData.map((ring) => (
          <div className="col-6 col-md-3 col-sm-3 mb-4" key={ring.id}>
            <div className="card h-100 text-center">
              <div className="position-relative">
                <img src={ring.image} className="card-img-top" alt={`Ring ${ring.id}`} />
                <span className="badge bg-dark position-absolute top-0 start-0 m-2">-25%</span>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Size {ring.size} Daily Wear Dual Tone Ring
                </p>
                <p className="text-muted text-decoration-line-through">
                  RS{ring.oldPrice.toLocaleString()}
                </p>
                <p className="text-danger fw-bold">
                  RS{ring.newPrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
    
  );
};

export default Products;
