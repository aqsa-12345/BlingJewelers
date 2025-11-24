import React from "react";
import styles from "./ProductDisplay.module.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

function ProductDisplay() {
 
  const rings = [
    {
      id: 1,
      name: "Diamond Elegance Ring",
      image: "./ring1.jpg",
      oldPrice: 3990,
      newPrice: 2990,
    },
    {
      id: 2,
      name: "Golden Glow Ring",
      image: "./ring2.jpg",
      oldPrice: 3590,
      newPrice: 2790,
    },
    {
      id: 3,
      name: "Rose Radiance Ring",
      image: "./ring3.jpg",
      oldPrice: 4490,
      newPrice: 3490,
    },
    {
      id: 4,
      name: "Pearl Beauty Ring",
      image: "./ring4.jpg",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 5,
      name: "Birth Stone Ring ",
      image: "./ring5.jpg",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 6,
      name: "5 Stone Diamond Ring",
      image: "./ring6.jpg",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 7,
      name: "Coctail Ring",
      image: "./ring7.webp",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 8,
      name: " Twisted Ring",
      image: "./ring8.webp",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 9,
      name: "Diamond Ring",
      image: "./ring9.jpeg",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 10,
      name: "Pearl Ring",
      image: "./ring10.jpg",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 11,
      name: "Ring",
      image: "./ring11.webp",
      oldPrice: 3290,
      newPrice: 2590,
    },
    {
      id: 12,
      name: "Oval Halo Ring",
      image: "./ring12.webp",
      oldPrice: 3290,
      newPrice: 2590,
    },
  ];

  return (
    <div>
    <Navigation/>

      <div className={styles.content}>
        <h2 className={styles.heading}>Our Elegant Ring Collection 💍</h2>
        <div className={styles.grid}>
          {rings.map((ring) => (
            <div key={ring.id} className={styles.card}>
              <img src={ring.image} alt={ring.name} className={styles.image} />
              <h4 className={styles.name}>{ring.name}</h4>
              <p className={styles.price}>
                <span className={styles.oldPrice}>Rs {ring.oldPrice}</span>{" "}
                <span className={styles.newPrice}>Rs {ring.newPrice}</span>
              </p>
              <button className={styles.btn}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

     <Footer/>
    </div>
  );
}

export default ProductDisplay;


