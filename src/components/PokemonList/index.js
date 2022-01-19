import { useEffect, useState } from "react";
import { service } from "../../services";
import { PokemonItem } from "../PokemonItem";
import { Container, Navigation } from "./style";

let count = 0;

export function PokemonList() {
  // const [offset, setOffeset] = useState(0);
  const [limit, setLimit] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  async function loadData() {
    const newPokemonList = [];
    const resultList = await service.list((count * 20), 20);
    if (!limit)
      setLimit(resultList.data.count);
    for (let pokemon of resultList.data.results) {
      const resultPokemon = await service.fetchOne(pokemon.name);
      newPokemonList.push(resultPokemon.data);
    }
    setPokemonList(newPokemonList);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleNextPage() {
    count++;
    if ((count * 20) < limit)
      loadData();
    else
      count--;
  }

  async function handlePreviousPage() {
    if (count > 0) {
      count--;
      loadData();
    }
  }


  return (
    <Container>
      {pokemonList.map((pokemon) =>
        <PokemonItem pokemon={pokemon} key={`POKEMON_LIST_${pokemon.name.toUpperCase()}`} />
      )}
      <Navigation>
        <button onClick={() => handlePreviousPage()}>Previous</button>
        <button onClick={() => handleNextPage()}>Next</button>
      </Navigation>
    </Container>
  );
}