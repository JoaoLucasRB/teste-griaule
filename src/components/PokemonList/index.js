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
    const resultList = await service.list(0, 20);
    if (!limit)
      setLimit(resultList.data.count);
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

  useEffect(() => { }, [pokemonList])

  async function nextPage() {
    console.log('bf', count);
    count++;
    if ((count * 20) < limit) {
      const newPokemonList = [];
      const resultList = await service.list((count * 20), 20);
      for (let pokemon of resultList.data.results) {
        const resultPokemon = await service.fetchOne(pokemon.name);
        console.log(resultPokemon.data);
        newPokemonList.push(resultPokemon.data);
      }
      setPokemonList(newPokemonList);
    } else {
      count--;
    }
    console.log('af', count);
  }

  async function previousPage() {
    console.log('bf', count);
    if (count > 0) {
      count--;
      const newPokemonList = [];
      const resultList = await service.list((count * 20), 20);
      for (let pokemon of resultList.data.results) {
        const resultPokemon = await service.fetchOne(pokemon.name);
        console.log(resultPokemon.data);
        newPokemonList.push(resultPokemon.data);
      }
      setPokemonList(newPokemonList);
    }
    console.log('af', count);
  }


  return (
    <Container>
      {pokemonList.map((pokemon) =>
        <PokemonItem pokemon={pokemon} key={`POKEMON_LIST_${pokemon.name.toUpperCase()}`} />
      )}
      <Navigation>
        <button onClick={() => previousPage()}>Previous</button>
        <button onClick={() => nextPage()}>Next</button>
      </Navigation>
    </Container>
  );
}