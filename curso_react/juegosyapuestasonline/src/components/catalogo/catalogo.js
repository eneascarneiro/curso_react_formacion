import React,{useState,useEffect}  from "react";
import './catalogo.css';
/*
Consuming data from Firestore is similar to consuming JSON data from a REST API. First, import db from the config file along with useState and useEffect to create state, and fire the request to fetch data.
*/

import img_estrellas from './estrellas.png';
import { getFirestore,collection, getDocs } from 'firebase/firestore'
import conectarFirebase from '../conectar'

class Catalogo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            micatalogo: [],
            cat_cargado:false,
        }
    }
    
    componentWillMount() {
        if (this.props.statusLog){
            // Initialize Firebase
            //conectarFirebase()
            /*In order to get the data from this response object, using the await keyword, call the get() method on the response object and store it inside a variable data.*/
            //creamos el objeto para conectar a la base de datos
            const app = conectarFirebase()
            const db = getFirestore(app);
            // Get a list of cities from your database
            try {
                console.log("Pendiente la lectura") 
                const getProductos = async () =>{
                    console.log("dentro")
                    const columnasProductos = collection(db, 'productos');
                    const productosSnapshot = await getDocs(columnasProductos);
                    const data = productosSnapshot.docs.map(doc => doc.data());
                    console.log(data)
                    this.setState({ micatalogo: data,cat_cargado:true });
                }
                console.log(getProductos())
            } catch (error) {
                console.log(error)
            }
        } else{
            console.log("El usuario no esta logado");
        }
    }
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
        this.setState({CatCargado: true},);
    } 
  
    changeState() 
    { 
        this.setState({ CatCargado: false, }); 
    }

    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 

    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
        //this.props.actualizarEstado()
    } 
    
    render(){
            /*
        You can add the data to your state as shown above inside the loop. Since the Blogs collection consists of a 
        single document, your state will also contain a single item. Finally, cycle through your state and render the data on the DOM.
        */if (this.state.cat_cargado){
            return (
                <div className="card">
                {
                    this.state.micatalogo.map(blog=>{
                    return(
                        <div>
                                <h1>Detalle del producto</h1>
                                <img src={blog.imagen1}  alt ='imagen' className="imagen" />
                                <div className="info-card">
                                    <h4> {blog.titulo}</h4>
                                    <p>{blog.nombre}</p>
                                    <img src={img_estrellas}  alt ='imagen'  className="imagenEtrellas" />
                                    <p className="precio">{blog.precio}
                                        <span> Con descuento       $15</span>
                                    </p>
                                </div>
                            </div>
                    )
                    })
                }
                </div>
           );
        }
        else{
            return (
                <div className="card">
                    <h2>El usuario no esta logado</h2>
                </div>
            );
        }
    }
}

export default Catalogo;
