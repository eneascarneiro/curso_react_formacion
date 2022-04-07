import React,{useState,useEffect}  from "react";
import './catalogo.css';
/*
Consuming data from Firestore is similar to consuming JSON data from a REST API. First, import db from the config file along with useState and useEffect to create state, and fire the request to fetch data.
*/

import img_estrellas from './estrellas.png';
import { getFirestore,collection, getDocs } from 'firebase/firestore'

class Catalogo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            CatCargado: false,
            userLogged: true,
        }
    }
    leercatalogo(){
        /*Create a piece of state to store your data.*/
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [blogs,setBlogs]=useState([])
        /*Inside the fetchBlogs() method, get a reference to your database by calling the collection() method on the db object and passing in the name of the collection as a parameter.*/
        const fetchBlogs=async()=>{
        /*In order to get the data from this response object, using the await keyword, call the get() method on the response object and store it inside a variable data.*/
         //creamos el objeto para conectar a la base de datos
         const db = getFirestore();
         //Generamos el catálogo
        const response =  getDocs(collection(db, "productos"));
        const data=await response.get();
        /*
        The data object contains a property called docs that contains information about each individual document in the collection. 
        Thus each document could contain information about an individual blog. Iterate over data.docs to get an individual item and 
        call the data() method on each item to get the data inside it.
        */
        data.docs.forEach(item=>{
            setBlogs([...blogs,item.data()])
            })
        }
        /*Create an async function to fetch data from Firestore and call it inside useEffect, as shown below.*/
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            fetchBlogs();
        }, [])
        /*
        You can add the data to your state as shown above inside the loop. Since the Blogs collection consists of a 
        single document, your state will also contain a single item. Finally, cycle through your state and render the data on the DOM.
        */
       return blogs
    }
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
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
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
    
    render(){
        const items = this.leercatalogo() 
            /*
        You can add the data to your state as shown above inside the loop. Since the Blogs collection consists of a 
        single document, your state will also contain a single item. Finally, cycle through your state and render the data on the DOM.
        */
        return (
            <div className="card">
            {
                items && items.map(blog=>{
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
}

export default Catalogo;
