import {BrowserRouter as Router} from 'react-router-dom';
import RoutesApp from "./routesApp";
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <RoutesApp />
      </Router>
    </>
  );
}

export default App;
