import React from'react';
import{Link}from 'react-router-dom';
 
class NavBar extends React.Component{
    render(){
        return(
            <div>
                <ul >
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/componente1">Componente 1</Link></li>
                    <li><Link className="nav-link" to="/componente2"> Componente 2 </Link></li>
                    <li><a href="https://www.aytovillaviciosadeodon.es/"> A villaviciosa </a></li>
                </ul>
                <a href="https://www.aytovillaviciosadeodon.es/"> A villaviciosa </a>
            </div>

        );

    }
}

export default NavBar;