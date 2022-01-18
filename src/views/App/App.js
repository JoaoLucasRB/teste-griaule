import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';
import GlobalStyle from '../../styles/globalstyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename="/">
        <div className='app'>
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
