import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [plants, setPlants] = useState([])
  const [newPlantName, setNewPlantName] = useState('')
  const [newPlantImage, setNewPlantImage] = useState('')
  const [newPlantPrice, setNewPlantPrice] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(plantsArray => setPlants(plantsArray))
  }, [])

  function handleAddPlant(e) {
    e.preventDefault()
    const newPlant = {
      name: newPlantName,
      image: newPlantImage,
      price: newPlantPrice
    }
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  function handleDelete(id) {
    // const updatePlants = plants.filter(plant => plant.id !== id)
    // setPlants(updatePlants)
    console.log("id:", id)
  }


  return (
    <main>
      <NewPlantForm
        handleAddPlant={handleAddPlant}
        setNewPlantName={setNewPlantName}
        setNewPlantImage={setNewPlantImage}
        setNewPlantPrice={setNewPlantPrice}
      />
      <Search />
      <PlantList plants={plants} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
