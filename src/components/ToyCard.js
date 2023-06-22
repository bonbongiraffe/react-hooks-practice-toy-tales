import React from "react";

/* useState, 
const [currentLikes, setCurrentLikes ] = useState(likes)
...
<button... onClick={() => setCurrentLikes((currentLikes) => currentLikes+1)}
*/

function ToyCard({ id, name, image, likes, deleteToy, updateToy }) {
  const handleLikeClick = (id) => {
    fetch (`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({ likes: likes+1 })
    })
      .then((r) => r.json())
      .then((updatedToy) => updateToy(updatedToy)) 
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikeClick(id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => deleteToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
