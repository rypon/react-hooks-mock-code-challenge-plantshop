import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

//component hierarchy
//-App
//  -Header
//    -Search (?)
//  -PlantPage
//    -NewPlantForm
//    -Search
//    -PlantList
//      -PlantCard


function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
