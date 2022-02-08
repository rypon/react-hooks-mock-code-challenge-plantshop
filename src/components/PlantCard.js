import React, { useState } from "react";

function PlantCard({ plant, handleDelete }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
