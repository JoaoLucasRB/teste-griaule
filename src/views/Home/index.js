import { PokemonList } from '../../components/PokemonList';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <PokemonList />
      </header>
    </div>
  );
}

export default Home;
