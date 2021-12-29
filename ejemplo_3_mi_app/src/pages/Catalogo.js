import React from 'react';
import Producto from '../components/Producto';
class Catalogo extends React.Component {

    render() {

        const atributos = {

            nombre: 'Raton', descripcion: 'Optico USB',
            fabricante: 'Nilox', precio: 20,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/51AGli7FtqL._AC_SX450_.jpg'
        };



        return(
            <div> 
                <Producto nombre="Pantalla" descripcion="17 pulgadas"
                    fabricante="HP" precio="86"
                    imagen='https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c02738428.png' />

                <Producto nombre="Teclado" descripcion="Inalambrico"
                    fabricante="Logitech" precio="49"
                    imagen='https://thumb.pccomponentes.com/w-530-530/articles/8/85041/1.jpg' />

                <Producto {...atributos} />
            

            </div >
        );
    }
}

export default Catalogo;
