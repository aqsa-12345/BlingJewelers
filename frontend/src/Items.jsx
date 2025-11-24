import React from "react";
import styles from "./Items.module.css";

function Items() {
  const items = [
    { name: "Earrings", image: "./earrings.jpg" },
    { name: "Bracelets", image: "./bracelets.jpg" },
    { name: "Necklaces", image: "./necklace.jpg" },
    { name: "Nosepins", image: "./nosepin.jpg" },
    { name: "Rings", image: "./rings.jpg" },
    { name: "Anklets", image: "./ankklet.jpg" },
  ];

  return (
    <div className={styles.itemsContainer}>
      <h2 className={styles.title}>Shop by Items</h2>

      <div className={styles.itemsGrid}>
        {items.map((item, index) => (
          <a key={index} href="#" className={styles.itemCard}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.itemImage}
            />
            <h5 className={styles.itemName}>{item.name}</h5>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Items;
