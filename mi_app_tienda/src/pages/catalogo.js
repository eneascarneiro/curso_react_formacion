import React from "react";
import '../styles/catalogo.css';
import img_estrellas from '../estrellas.png';

class Catalogo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            CatCargado: false,
            userLogged: true
        }
    }

    render(){
        const ElemCatalogo =[            
                {
                imagen1: "/curso1.jpg",
                titulo: "HTML5, CSS3, JavaScript para Principiantes",
                nombre: "Juan Pedro",
                imagen_estrellas: "/estrellas.png",
                precio: "$200",
                dataid: "1"
                },
                {
                imagen1: "/curso2.jpg",
                titulo: "Curso de Comida Vegetariana",
                nombre: "Juan Pedro",
                imagen_estrellas: "/estrellas.png",
                precio: "$200",
                dataid: "2"
                },
                {
                imagen1: "/curso3.jpg",
                titulo: "Guitarra para Principiantes",
                nombre: "Juan Pedro",
                imagen_estrellas: "../img/estrellas.png",
                precio: "$200",
                dataid: "3"
                },
                {
                imagen1: "/curso4.jpg",
                titulo: "Huerto en tu casa",
                nombre: "Juan Pedro",
                imagen_estrellas: "/estrellas.png",
                precio: "$200",
                dataid: "4"
                }
            ];
            //¿Como consigo un único return?
            //Necesito un objeto producto que entienda de array

            //O añadiendo elemento a elemento
            //variable para almacenar todo el texto html
            const listItems = ElemCatalogo.map((elem) =>
                    <div className="card">
                        <h1>Detalle del producto</h1>
                        <img src={elem.imagen1}  alt ='imagen' className="imagen" />
                        <div className="info-card">
                            <h4> {elem.titulo}</h4>
                            <p>{elem.nombre}</p>
                            <img src={img_estrellas}  alt ='imagen'  className="imagenEtrellas" />
                            <p className="precio">{elem.precio}
                                <span> Con descuento       $15</span>
                            </p>
                        </div>
                    </div>
            );
            //this.state.CatCargado = true;
            return listItems;
        }
    }

export default Catalogo;
