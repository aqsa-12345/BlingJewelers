import React from "react";
import styles from "./Products.module.css";

function Products() {
  const ringData = [
    { id: 1, size: 6, image: "./ring1.jpg", oldPrice: 3990, newPrice: 2992.5 },
    { id: 2, size: 8, image: "./ring2.jpg", oldPrice: 3890, newPrice: 2917.5 },
    { id: 3, size: 7, image: "./ring3.jpg", oldPrice: 3890, newPrice: 2917.5 },
    { id: 4, size: 6, image: "./ring4.jpg", oldPrice: 3890, newPrice: 2917.5 },
  ];

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.title}>Daily Wear</h2>

      <div className={styles.productGrid}>
        {ringData.map((ring) => (
          <div key={ring.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={ring.image}
                alt={`Ring ${ring.id}`}
                className={styles.cardImage}
              />
              <span className={styles.badge}>-25%</span>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                Size {ring.size} Daily Wear Dual Tone Ring
              </p>
              <p className={styles.oldPrice}>
                RS {ring.oldPrice.toLocaleString()}
              </p>
              <p className={styles.newPrice}>
                RS {ring.newPrice.toLocaleString()}
              </p>
              <button className={styles.buyBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

