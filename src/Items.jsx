import React from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

function  Items() 
{
  const items = [
    { name: "Earrings", image: "./earrings.jpg" },
    { name: "Bracelets", image: "./bracelets.jpg" },
    { name: "Necklaces", image: "./necklace.jpg" },
    { name: "Nosepins", image: "./nosepin.jpg" },
    { name: "Rings", image: "./rings.jpg" },
    { name: "Anklets", image: "./ankklet.jpg"}
  ];

  return (
    <div className="container my-5" >
      <h2 className="text-center mb-4">Shop by items</h2>
      <div className="row g-3 justify-content-center">
        {items.map((items, index) => (
          <div key={index} className="col-6 col-md-4 text-center">
            <a href="" style={{textDecoration: "none", color: "inherit"}}>
            <img
              src={items.image}
              alt={items.name}
              className="img-fluid"
              style={{
                height: "30vh",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: "400px",
              }}
            />
            <h5 className="mt-2">{items.name}</h5>
            </a>
          </div>
        ))}
      </div>
    </div>


  );
}

export default Items;