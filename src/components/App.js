import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toys, setToys ] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toysArr) => setToys(toysArr))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToy) => {
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newToy)
    })
      .then((r) => r.json())
      .then((addedToy) => setToys([...toys, addedToy]))
  }

  const deleteToy = (deletedId) => {
    fetch(`http://localhost:3001/toys/${deletedId}`,{
      method: "DELETE"
    })
      .then(() => setToys(toys.filter((toy) => toy.id !== deletedId)))
  }

  const updateToy = (updatedToy) => {
    setToys(toys.map((toy) => {
        if (toy.id === updatedToy.id)
          return updatedToy
        else 
          return toy
      }))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateToy={updateToy}/>
    </>
  );
}

export default App;
