import React, { useState } from "react";
import "./Search.css";
import {BsSearch,BsFillMicFill} from 'react-icons/bs'
import { MdSmartButton } from 'react-icons/md'
import { Link  } from "react-router-dom";
import { API_KEY, SEARCH_ID } from "../../config/keys";



export const Search = ({ hideButtons = false }) => {
  const [data, setData] = useState([0]);
  const [input, setInput] = useState("");
  const [tenemosdatos, setTenemosDatos] = useState(false);
  //const history = useNavigate ();


  const fetchData = async () => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ID}&q=${input}`
      )
      .then(response => {
        if (!response.ok) throw Error(response.Error);
  
        return response.json();
        })
      .then((result) => {
        setData(result);
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
  
    
      console.log("You hit search button ->", data);
       
    //history.push("/search");
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
          <div className="search__lenguages">
            <p>Ofrecido por Google en:</p>
            <Link to="#">English</Link>
            <Link to="#">català</Link>
            <Link to="#">galego</Link>
            <Link to="#">euskara</Link>
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
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {input}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>{item.displayLink}</a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      ): (<div></div>)}
     
    </div>
  );
};
