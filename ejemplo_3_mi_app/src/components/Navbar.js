import React from'react';
import{Link}from 'react-router-dom';
class NAvbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/catalogo">Catalogo</Link>
                            <Link className="nav-link" to="/nuevo">Nuevo</Link>
                        </div>
                    </div>
                </div>
            </nav>

        );

        
    }
}

export default NAvbar;