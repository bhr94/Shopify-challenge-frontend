import React, { useState } from "react";
// import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import NominatedItemList from "./components/NominatedItemList";
import searchIcon from "./assets/Icons/Icon-search.svg";
import axios from "axios";
import { Alert } from "reactstrap";
import ModalExample from "./components/ModalExample";

// import Notification from "./components/Notification";
const backend_url = "http://www.omdbapi.com/";
const apikey = "3ac0d74";
function App() {
  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [nominatedMovies, setNominatedMovie] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function handleChange(e) {
    setSearchInput(e.target.value);
    axios
      .get(backend_url + `?s=${e.target.value}&page=1&apikey=${apikey}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  }

  function handleNominate(id) {
    if (nominatedMovies.length < 5) {
      for (let i = 0; i < data.Search.length; i++) {
        if (id === data.Search[i].imdbID) {
          setNominatedMovie([...nominatedMovies, data.Search[i]]);
          console.log("bahar" + JSON.stringify(nominatedMovies));
          document.getElementById(id).children[2].disabled = true;
        }
      }
    } else {
      setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 2000);
    }

    // document.querySelector(".message").style.display = "flex";
    // setTimeout(() => {
    //   document.querySelector(".message").style.display = "none";
    // }, 3000);
  }

  function handleRemove(id) {
    for (let i = 0; i < nominatedMovies.length; i++) {
      if (id === nominatedMovies[i].imdbID) {
        let list = nominatedMovies.filter((movie) => movie.imdbID !== id);
        setNominatedMovie(list);
        console.log(JSON.stringify(nominatedMovies));
        for (let k = 0; k < data.Search.length; k++) {
          if (id === data.Search[k].imdbID) {
            document.getElementById(id).children[2].disabled = false;
          }
        }
      }
    }
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
          <ModalExample toggle={toggle} modal={modal} />
        </div>
      </form>
      {/* <Alert
        color="success"
        className="message"
        id="hi"
      >
        This is a success alert — check it out!
      </Alert> */}
      <main className="main-container__lists">
        <MovieList
          data={data}
          searchInput={searchInput}
          handleNominate={handleNominate}
        />
        <NominatedItemList
          movies={nominatedMovies}
          handleRemove={handleRemove}
        />
      </main>
    </section>
  );
}

export default App;
