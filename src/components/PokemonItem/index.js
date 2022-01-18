import { Container } from "./style";

export function PokemonItem(props) {
  const {
    pokemon
  } = props
  return (
    <Container>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={`POKEMON_LIST_${pokemon.name.toUpperCase()}`} />
      <p>{pokemon.name.toUpperCase()}</p>
      <div>{pokemon.types.map((type) => <p key={`POKEMON_LIST_${pokemon.name.toUpperCase()}_${type.type.name.toUpperCase()}`}>{type.type.name.toUpperCase()} </p>)}</div>
      {pokemon.stats.map((stat) => {
        return <span key={`POKEMON_LIST_${pokemon.name.toUpperCase()}_${stat.stat.name.toUpperCase()}`}>
          {stat.stat.name.toUpperCase()}: {stat.base_stat}<br></br>
        </span>
      }
      )}
    </Container>
  );
}