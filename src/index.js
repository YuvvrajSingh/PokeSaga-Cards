import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Existing imports...

function App() {
  return (
    <div className="App">
      <p>My Pokemon List</p>
      <Display1 />
      <Display2 />
      <Display3 />
    </div>
  );
}

function Display1() {
  return (
    <div className="card-container">
      <Card pokemonName="pikachu" backgroundColor="#ffe100" />
      <Card pokemonName="charmander" backgroundColor="#ef8200" />
      <Card pokemonName="squirtle" backgroundColor="#55a4ed" />
      <Card pokemonName="bulbasaur" backgroundColor="#47ccad" />
    </div>
  );
}

function Display2() {
  return (
    <div className="card-container">
      <Card pokemonName="raichu" backgroundColor="#ffe100" />
      <Card pokemonName="charmeleon" backgroundColor="#ef8200" />
      <Card pokemonName="wartortle" backgroundColor="#55a4ed" />
      <Card pokemonName="ivysaur" backgroundColor="#47ccad" />
    </div>
  );
}

function Display3() {
  return (
    <div className="card-container">
      <Card pokemonName="mew" backgroundColor="#fceded" />
      <Card pokemonName="charizard" backgroundColor="#ef8200" />
      <Card pokemonName="blastoise" backgroundColor="#55a4ed" />
      <Card pokemonName="venusaur" backgroundColor="#47ccad" />
    </div>
  );
}
function Info({ pokemonName }) {
  const pokemon = pokemonData[pokemonName];

  return (
    <div className="info">
      <PokemonImage id={pokemon.id} name={pokemon.name} />
      <Name name={pokemon.name} />
      <InfoDetails pokemon={pokemon} />
    </div>
  );
}

function PokemonImage({ id, name }) {
  return (
    <img
      src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
      alt={name}
      className="pokemon-image"
    />
  );
}

function Name({ name }) {
  return <div className="pokemon-name">{name}</div>;
}

function InfoDetails({ pokemon }) {
  return (
    <div className="info-details">
      <InfoItem label="HP" value={pokemon.HP} />
      <InfoItem label="Attack" value={pokemon.attack} />
      <InfoItem label="Defense" value={pokemon.defense} />
      <InfoItem label="Type" value={pokemon.type} />
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="info-item">
      <div className="info-label">{label}:</div>
      <div className="info-value">{value}</div>
    </div>
  );
}

function Card({ pokemonName, backgroundColor }) {
  return (
    <div>
      <div className="card" style={{ backgroundColor }}>
        <Info pokemonName={pokemonName} />
      </div>
    </div>
  );
}

const pokemonData = {
  bulbasaur: {
    name: "Bulbasaur",
    id: 1,
    HP: 45,
    attack: 49,
    defense: 49,
    type: "Grass/Poison",
    evolvesInto: "Ivysaur",
  },
  ivysaur: {
    name: "Ivysaur",
    id: 2,
    HP: 60,
    attack: 62,
    defense: 63,
    type: "Grass/Poison",
    evolvesInto: "Venusaur",
  },
  venusaur: {
    name: "Venusaur",
    id: 3,
    HP: 80,
    attack: 82,
    defense: 83,
    type: "Grass/Poison",
  },
  charmander: {
    name: "Charmander",
    id: 4,
    HP: 39,
    attack: 52,
    defense: 43,
    type: "Fire",
    evolvesInto: "Charmeleon",
  },
  charmeleon: {
    name: "Charmeleon",
    id: 5,
    HP: 58,
    attack: 64,
    defense: 58,
    type: "Fire",
    evolvesInto: "Charizard",
  },
  charizard: {
    name: "Charizard",
    id: 6,
    HP: 78,
    attack: 84,
    defense: 78,
    type: "Fire/Flying",
  },
  squirtle: {
    name: "Squirtle",
    id: 7,
    HP: 44,
    attack: 48,
    defense: 65,
    type: "Water",
    evolvesInto: "Wartortle",
  },
  wartortle: {
    name: "Wartortle",
    id: 8,
    HP: 59,
    attack: 63,
    defense: 80,
    type: "Water",
    evolvesInto: "Blastoise",
  },
  blastoise: {
    name: "Blastoise",
    id: 9,
    HP: 79,
    attack: 83,
    defense: 100,
    type: "Water",
  },
  pikachu: {
    name: "Pikachu",
    id: 25,
    HP: 55,
    attack: 40,
    defense: 35,
    type: "Electric",
    evolvesInto: "Raichu",
  },
  raichu: {
    name: "Raichu",
    id: 26,
    HP: 60,
    attack: 90,
    defense: 55,
    type: "Electric",
  },
  mew: {
    name: "Mew",
    id: 151,
    HP: 100,
    attack: 100,
    defense: 100,
    type: "Psychic",
    // Mew doesn't evolve
  },
  // Add more Pokémon as needed
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
