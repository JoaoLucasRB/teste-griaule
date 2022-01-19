import { useEffect, useState } from "react/cjs/react.development";
import { PokemonItem } from "../../components/PokemonItem";
import { service } from "../../services";
import { Container, Content } from "./style";
import { toast } from "react-toastify";

const Initials = () => {
  const [dragItem, setDragItem] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [initialPokemons, setInitialPokemons] = useState([]);

  useEffect(() => {
    async function loadData() {
      const newInitialPokemons = [];
      let result;
      result = await service.fetchOne('squirtle');
      newInitialPokemons.push(['squirtle', result.data]);
      result = await service.fetchOne('bulbasaur');
      newInitialPokemons.push(['bulbasaur', result.data]);
      result = await service.fetchOne('charmander');
      newInitialPokemons.push(['charmander', result.data]);
      setInitialPokemons(newInitialPokemons);
    }

    loadData();
  }, [])

  const handleDragStart = (index) => {
    console.log('start');
    setDragItem(index);
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let newSelectedPokemon;
    let oldSelectedPokemon;
    if (selectedPokemon.length) {
      oldSelectedPokemon = [...selectedPokemon];
      if (oldSelectedPokemon[1].name === dragItem) {
        console.log('du nuffin')
        return;
      }
    }
    let newInitialPokemons = [...initialPokemons];
    let count = 0;
    for (let pokemon of initialPokemons) {
      if (pokemon[0] === dragItem) {
        newSelectedPokemon = pokemon;
        console.log('bf', count, newInitialPokemons)
        newInitialPokemons.splice(count, 1);
        console.log('af', count, newInitialPokemons)
        if (oldSelectedPokemon)
          newInitialPokemons.push(oldSelectedPokemon);
        break;
      }
      count++;
    }
    toast(`Initial Pokemon ${newSelectedPokemon[1].name.toUpperCase()} Selected!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setInitialPokemons(newInitialPokemons);
    setSelectedPokemon(newSelectedPokemon);
    setDragItem('');
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }


  return (
    initialPokemons.length ?
      <Container>
        <Content>
          <div>
            <h2>Initial Pokemons</h2>
            <div className="drag-area">
              {initialPokemons.map(pokemon =>
                <div
                  key={`POKEMON_INITIALS_${pokemon[1].name}`}
                  draggable
                  onDrag={() => handleDragStart(pokemon[0])}
                >
                  <PokemonItem pokemon={pokemon[1]} />
                </div>
              )}
            </div>
          </div>
          <span>&rarr;</span>
          <div
            className="drop-area"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
          >
            {selectedPokemon.length ?
              <PokemonItem pokemon={selectedPokemon[1]} />
              : <div class='empty'>

              </div>
            }
          </div>
        </Content>
      </Container>
      : null
  );
}

export default Initials;