import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from '../../routes';import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from '../../styles/globalstyle';
import { Container } from './style';
import { NavBar } from '../../components/NavBar';

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Router basename="/">
        <NavBar />
        <Container>
          <Routes />
        </Container>
      </Router>
    </>
  );
}

export default App;