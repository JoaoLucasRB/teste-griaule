import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';
import GlobalStyle from '../../styles/globalstyle';
import { Container } from './style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename="/">
        <Container>
          <Routes />
        </Container>
      </Router>
    </>
  );
}

export default App;