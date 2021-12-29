import React from 'react';

class Formulario extends React.Component{

    render(){
        return(
            <div>
                <h1>Formulario de alta</h1>
                <form>
                <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" 
                            onChange={this.props.modificar}
                            value={this.props.formValues.nombre}/>
                    </div>

                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcion" 
                         onChange={this.props.modificar}
                        value={this.props.formValues.descripcion} />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input type="text" name="precio" 
                        onChange={this.props.modificar}
                        value={this.props.formValues.precio} />
                    </div>
                    <div>
                        <label>Fabricante:</label>
                        <input type="text" name="fabricante" 
                        onChange={this.props.modificar}
                        value={this.props.formValues.fabricante} />
                    </div>
                    <div>
                        <label>Imagen</label>
                        <input type="text" name="imagen"
                        onChange={this.props.modificar}
                        value={this.props.formValues.imagen} />
                    </div>
                    <div>
                        <button type="button">Guardar</button>
                    </div>
                </form>

           </div>
        );
    }
}

export default Formulario;