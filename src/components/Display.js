import React, { useEffect } from "react";

export default function Display({ pokemonName }) {
  const [pokeData, setPokeData] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  useEffect(() => {
    if (pokemonName) {
      setStatus("pending");
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => res.json())
        .then(
          (data) => {
            console.log(data);
            setStatus("success");
            setPokeData(data);
          },
          (error) => {
            console.log(error);
            setStatus("rejected");
          }
        );
    }
  }, [pokemonName]);

  if (status === "rejected") {
    return "Something Awful just happened";
  }

  if (status === "pending") {
    return "Waiting on pokedex";
  }

  if (status === "success") {
    return <pre>{JSON.stringify(pokeData, null, 2)}</pre>;
  }

  return "Submit a Pokemon";
}
