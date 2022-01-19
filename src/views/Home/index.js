import { PokemonList } from '../../components/PokemonList';
import { Container, Content } from './style';

const Home = () => {
  return (
    <Container>
      <Content>
        <PokemonList />
      </Content>
    </Container>
  );
}

export default Home;