import { PokemonList } from '../../components/PokemonList';
import { Container, Content } from './style';

const Home = () => {
  return (
    <Container>
      <Content>
        <h2>All Pokemons</h2>
        <PokemonList />
      </Content>
    </Container>
  );
}

export default Home;