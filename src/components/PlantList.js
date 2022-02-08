import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete }) {

  const cards = plants.map((plant) =>
    <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete} />)

  return (

    <ul className="cards">{cards}</ul>

  );
}

export default PlantList;
