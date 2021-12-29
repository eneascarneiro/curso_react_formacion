import React from 'react';
import'../styles/Producto.css';
class Producto extends React.Component{

    // Lo minimo que necesita un componente es el metodo render()
    render(){
        
            //en React la palabra class esta reservada
            //por lo tanto los estilos se aplican con className
            return(
              <div className='panel'>
                  <div>
                    <h1>Detalle del producto</h1>
                    <ul>
                        <li>Nombre: {this.props.nombre} </li>
                        <li>Descripcion: {this.props.descripcion}</li>
                        <li>Fabricante: {this.props.fabricante}</li>
                        <li>Precio: {this.props.precio}</li>
                    </ul>
                </div>
                <div>
                            <img src={this.props.imagen}className="imagen" />
                </div>
            </div>

        );
    }
}

export default Producto;