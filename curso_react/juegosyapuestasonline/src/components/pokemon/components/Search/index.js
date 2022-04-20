import React, { useState } from "react";
import "./Search.css";
import {BsSearch,BsFillMicFill} from 'react-icons/bs'
import { MdSmartButton } from 'react-icons/md'
import { Link  } from "react-router-dom";
import { API_KEY, SEARCH_ID } from "../../config/keys";



export const Search = ({ hideButtons = false }) => {


  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [tenemosdatos, setTenemosDatos] = useState(false);
  //const history = useNavigate ();


  const fetchData = async () => {
    //Para leer datos de api fetch
    /*
  fetch(
        "llamada al api "
        )
        .then(response => {
              //si la respuesta no es tiene error no pinto nada
              if (!response.ok) throw Error(response.Error);
              //Devolver resultados
              return response.json();(a)
          })
        .then((result) => {
          (a)

         
        })
        .catch(error => {
            aqui gestiono el error
        });
    */
    
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${input}`
      )
      .then(response => {
        if (!response.ok) throw Error(response.Error);
  
        return response.json();
        })
      .then((result) => {
        setData(result.results);
        console.log(result)
        setTenemosDatos(true)
      })
      .catch(error => {console.log(error)
        setTenemosDatos(false)
      });
  
  }
  const search = (e) => {
    e.preventDefault();
    console.log("You hit search button ->", input);
    fetchData()
    console.log(data)
    console.log("You hit search button ->", data);
  };
  return (
    <div className="search">
      <div className="search__input">
        <BsSearch className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="search__inputIcon search__inputIcon--clickable" />
      </div>
      {!hideButtons ? (
        <>
          <div className="search__buttons">
            <button type="submit" variant="outlined" onClick={search}>
              Buscar con Google
            </button>
            <button variant="outlined">Voy a tener suerte</button>
          </div>
      
        </>
      ) : (
        <div className="search__buttons ">
          <MdSmartButton
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Buscar con Google
          </MdSmartButton>
          <MdSmartButton className="search__buttonsHidden" variant="outlined">
            Voy a tener suerte
          </MdSmartButton>
        </div>
      )}
      
        {tenemosdatos ? (
        <div className="searchPage__results">
          {data.map((item,id) => (
            <div className="searchPage__result">
              <div  id={item.id} key={item.id}> 
              <label>Nombre pokemon</label> <textarea value={item.name} />
              </div>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      ): 
      (<div></div>)
      }
     
    </div>
  );
};
