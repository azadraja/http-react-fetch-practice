import React from "react";
import Display from "./Display";

export default function Form() {
  const [pokemonName, setPokemonName] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.userInput.value;
    setPokemonName(value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput"></label>
        <input id="userInput" />
        <button type="submit">Submit</button>
      </form>
      <Display pokemonName={pokemonName} />
    </div>
  );
}
