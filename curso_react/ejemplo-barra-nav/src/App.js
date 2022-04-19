import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  }  from "react-router-dom";
  
import Componente1 from "./components/componente-1/componente-1";
import Componente2 from "./components/componente-2/componente-2";
import Componente3 from "./components/componente-3/componente-3";
import Componente4 from "./components/componente-4/componente-4";
import NavBar from "./components/NavBar";
import './App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <h1>Ejemplo barra navegación con route</h1>
      </header>
      <Routes>
        <Route path="/componente1" element={ <Componente1/>}/>
        <Route path="/componente2" element={ <Componente2/>}/>
        <Route path="/componente3" element={ <Componente3/>}/>
        <Route path="/componente4" element={ <Componente4/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
