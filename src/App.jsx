import React, { useState } from "react";
import templateImage from './assets/pokeball.gif'

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
      setImage(data.sprites.front_default);
      setName(data.name)
    } catch {
      alert("Algo deu errado! Tente outro ID.");
    }
  };

  return (
    <div>
      <h1 className="titulo">PokeFinder</h1>
    <div className="card text-center text-dark bg-success-subtle mb-3">
      <h1 className="card-title">{name}</h1>
      <img src={image || templateImage} alt={name} className="card-img-top" />
      <section className="input-group">
        <input
        className="form-control"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID ou nome"
      />
      <button className="btn btn-success" onClick={fetchCharacter}><i className="fa fa-search"></i></button>
      </section>
    </div>
    </div>
  );
}

export default App;