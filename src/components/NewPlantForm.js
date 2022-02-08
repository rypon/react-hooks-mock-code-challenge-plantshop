import React from "react";

function NewPlantForm({ handleAddPlant, setNewPlantName, setNewPlantImage, setNewPlantPrice }) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAddPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setNewPlantName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setNewPlantImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setNewPlantPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
