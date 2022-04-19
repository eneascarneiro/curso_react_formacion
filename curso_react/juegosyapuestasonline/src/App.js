import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
}  from "react-router-dom";
import Catalogo from './components/catalogo/catalogo';
import Home from './pages/home';
import Miloginfrm from './pages/login';
import Cabecera from './components/header';
import PiePagina from './components/footer';
import NAvbar from './components/Navbar';
import Game from './pages/game'
import Mifrm1 from './components/ejemplo_hooks/ejemplo_input';
import MyCustomeField from './components/ejemplo_hooks/hooks_component';
import './App.css';


class  App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      userName:null,
      userLogged: false,
      CatCargado: false,
    };
  }
  onLoginMethod(){
    this.setState({userLogged:true});
  }
  onLogOutMethod(){
    this.setState({userLogged:false});
  }
  userNameLogged(username){
    this.setState({userName:username});
  }
  actEstadoCatalogo(){
    this.setState({CatCargado:true});
  }
  render(){
  return (
    <Router>
      <div className="container">
        <Cabecera txtHeader="Los mejores cursos online"/>
        <NAvbar />
        <Routes>
          <Route path="/login" element={<Miloginfrm statusLog={this.state.userLogged} 
                                                       login ={() => this.onLoginMethod()}
                                                       logout ={() => this.onLogOutMethod()}
                                                       setUser ={() => this.userNameLogged()} />} />
          <Route path="/tresenraya"  element={<Game statusLog={this.state.userLogged}/>} />
          <Route path="/catalogo"  element={<Catalogo statusLog={this.state.userLogged} 
                                                      statusCatalogo={this.state.CatCargado}/>}
                                                      actualizarEstado ={() => this.actEstadoCatalogo()} />
          <Route path="/tresenrayadup"  element={<Game statusLog={this.state.userLogged}/>} />
          <Route path="/ejemploInputSinHooks"  element={<Mifrm1/>} />
          <Route path="/ejemploInputConHooks"  element={<MyCustomeField/>} />
          <Route path = "/" element={<Home/>}/>
        </Routes>
        <PiePagina  txtNombre="Por José Manuel Aroca" txtURL="https://www.linkedin.com/in/josemanuelaroca/" />
      </div>
    </Router>
  );
  }

}

export default App;
