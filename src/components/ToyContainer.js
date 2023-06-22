import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, deleteToy, updateToy }) {
  const renderedToys = toys.map((toy) => <ToyCard
    key={toy.id}
    id={toy.id}
    name={toy.name}
    image={toy.image}
    likes={toy.likes}
    deleteToy={deleteToy}
    updateToy={updateToy}
  />)
  return (
    <div id="toy-collection">{renderedToys}</div>
  );
}

export default ToyContainer;
