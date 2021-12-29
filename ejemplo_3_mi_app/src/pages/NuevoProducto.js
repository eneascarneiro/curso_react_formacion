import React from 'react';
import Formulario from '../components/Formulario';
import Producto from '../components/Producto';

class NuevoProducto extends React.Component{
// 1.-Crear el state
    state ={
        form:{
            nombre:'a',
            descripcion:'b',
            precio:'c',
            fabricante:'e',
            imagen:'d' 
        }
    }

    //3.-Modificar el state con los datos recibids del formulario
    modificarEstado = e => {
        this.setState({
            form:{
                // Conservar los datos ya existentes en el estado
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }



    render(){
        //2.-Le pasamos al formulario state como un prop
        //4.-Al componente Producto le pasamos os datos que tenemos en el state
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <Producto 
                            nombre = {this.state.form.nombre}
                            descripcion = {this.state.form.descripcion}
                            precio={this.state.form.precio}
                            fabricante={this.state.form.fabricante}
                            imagen={this.state.form.imagen} />

                    </div>
                    <div className="col-md-6">
                        <Formulario 
                        formValues={this.state.form}
                        modificar={this.modificarEstado} />
                    </div>
                </div>
            </div>

        );
    }
}

export default NuevoProducto;

