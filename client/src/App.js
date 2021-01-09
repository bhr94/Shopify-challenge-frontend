import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import NominatedItemList from "./components/NominatedItemList";
import searchIcon from "./assets/Icons/Icon-search.svg";
import axios from "axios";
const backend_url = "http://www.omdbapi.com/";
const apikey = "3ac0d74";
function App() {
  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  function handleChange(e) {
    setSearchInput(e.target.value);
    axios
      .get(backend_url + `?s=${e.target.value}&page=1&apikey=${apikey}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  }

  function handleNominate() {
    
  }
  return (
    <section className="main-container">
      <form className="title-search__form">
        <h3 className="title-search__form--title">Movie title</h3>
        <div className="container">
          <input
            type="text"
            className="title-search__form--input"
            placeholder="Please enter the title for a movie.."
            onChange={handleChange}
          />
          <img
            alt="movie title search icon"
            src={searchIcon}
            className="title-search__form--icon"
          />
        </div>
      </form>
      <main className="main-container__lists">
        <MovieList data={data} searchInput={searchInput} handleNominate ={handleNominate} />
        <NominatedItemList />
      </main>
    </section>
  );
}

export default App;
