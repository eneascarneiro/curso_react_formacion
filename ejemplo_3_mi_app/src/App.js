import { Route,BrowserRouter as  Router } from 'react-router-dom';
import'./App.css';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import NuevoProducto from './pages/NuevoProducto';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />

      <Route exact path="/catalogo"component={Catalogo}/>
      <Route exact path="/nuevo" component={NuevoProducto}/>
    </div>
  </Router>
  );
}

export default App;
