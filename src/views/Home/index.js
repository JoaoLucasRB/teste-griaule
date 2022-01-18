import { useEffect, useState } from 'react';
import { service } from '../../services';
import './Home.css';
import { PokemonItem, PokemonList } from './style';

const Home = () => {
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
    pokemonList.length ?
      <div className="Home">
        <header className="Home-header">
          <PokemonList>
            {pokemonList.map((pokemon) =>
              <PokemonItem>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={`POKEMON_LIST_${pokemon.name.toUpperCase()}`} />
                <p>{pokemon.name.toUpperCase()}</p>
                <p>{pokemon.types.map((type) => <>{type.type.name.toUpperCase()} </>)}</p>
                {pokemon.stats.map((stat) => {
                  return <span key={`POKEMON_LIST_${pokemon.name.toUpperCase()}_${stat.stat.name.toUpperCase()}`}>
                    {stat.stat.name.toUpperCase()}: {stat.base_stat}<br></br>
                  </span>
                }
                )}
              </PokemonItem>
            )}
          </PokemonList>
        </header>
      </div>
      : <></>
  );
}

export default Home;
