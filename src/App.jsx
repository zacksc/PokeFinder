import React, { useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = await response.json();
      setImage(data.sprites.front_default || "https://via.placeholder.com/150");
      setName(data.name)
    } catch {
      alert("Algo deu errado! Tente outro ID.");
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="Personagem" />
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID ou nome"
      />
      <button onClick={fetchCharacter}>Buscar</button>
    </div>
  );
}

export default App;