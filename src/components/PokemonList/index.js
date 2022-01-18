import { useEffect, useState } from "react";
import { service } from "../../services";
import { PokemonItem } from "../PokemonItem";
import { Container } from "./style";

export function PokemonList() {
  let offset = 0;
  let limit = 0;
  const [pokemonList, setPokemonList] = useState([]);

  async function loadData() {
    const newPokemonList = [];
    const resultList = await service.list(offset, 20);
    if (!limit)
      limit = resultList.data.count;
    for (let pokemon of resultList.data.results) {
      const resultPokemon = await service.fetchOne(pokemon.name);
      console.log(resultPokemon.data);
      newPokemonList.push(resultPokemon.data);
    }
    setPokemonList(newPokemonList);
  }

  useEffect(() => {
    loadData();
  }, []);

  function nextPage() {
    offset -= 20;
    loadData();
  }

  function previousPage() {
    if (offset > 0) {
      offset -= 20;
      loadData();
    }
  }

  return (
    <Container>
      {pokemonList.map((pokemon) =>
        <PokemonItem pokemon={pokemon} />
      )}
    </Container>
  );
}