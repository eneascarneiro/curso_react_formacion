import react from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
Link
}  from "react-router-dom";
import Catalogo from './pages/catalogo';
import Home from './pages/home';
import Miloginfrm from './pages/login';
import Cabecera from './components/header';
import PiePagina from './components/footer';
import NAvbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Cabecera txtHeader="Los mejores cursos online"/>
        <NAvbar />
        <Routes>
          <Route path="/login" element={<Miloginfrm/>} />
          <Route path="/catalogo"  element={<Catalogo/>} />
          <Route path = "/" element={<Home/>}/>
        </Routes>
        <PiePagina  txtNombre="Por José Manuel Aroca" txtURL="https://www.linkedin.com/in/josemanuelaroca/" />
      </div>
    </Router>
  );
}

export default App;
