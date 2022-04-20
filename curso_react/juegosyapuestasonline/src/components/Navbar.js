import React from'react';
import{Link}from 'react-router-dom';
class NAvbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/login">Login</Link></li>
                            <li><Link className="nav-link" to="/catalogo">Catalogo</Link></li>
                            <li><Link className="nav-link" to="/tresenraya">Tres en raya</Link></li>
                            <li><Link className="nav-link" to="/ejemploInputSinHooks">Ejemplo Input sin hooks </Link></li>
                            <li><Link className="nav-link" to="/ejemploInputConHooks">Ejemplo Input con hooks </Link></li>
                            <li><Link className="nav-link" to="/buscadorinternet"> Buscador </Link></li>
                            <li><Link className="nav-link" to="/buscadorpokemon"> Pokemon </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            

        );

        
    }
}

export default NAvbar;