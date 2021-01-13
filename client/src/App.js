import React, { useState } from "react";
// import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import NominatedItemList from "./components/NominatedItemList";
import searchIcon from "./assets/Icons/Icon-search.svg";
import axios from "axios";
import ReactNotification from "react-notifications-component";
import { useToasts } from "react-toast-notifications";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import ModalExample from "./components/ModalExample";
const backend_url = "http://www.omdbapi.com/";
const apikey = "3ac0d74";
function App() {
  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [nominatedMovies, setNominatedMovie] = useState([]);
  const { addToast } = useToasts();
  const { width, height } = useWindowSize();
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});
  function handleChange(e) {
    setSearchInput(e.target.value);
    axios
      .get(backend_url + `?s=${e.target.value}&apikey=${apikey}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  }
  function toggle() {
    setModal(!modal);
  }
  function handleNominate(id) {
    let movieList = [];
    if (JSON.parse(localStorage.getItem("nominatedMovieList"))) {
      movieList = JSON.parse(localStorage.getItem("nominatedMovieList"));
    } else {
      localStorage.setItem("nominatedMovieList", JSON.stringify(movieList));
    }
    setNominatedMovie(movieList);
    if (movieList.length < 5) {
      for (let i = 0; i < data.Search.length; i++) {
        if (id === data.Search[i].imdbID) {
          setNominatedMovie([...nominatedMovies, data.Search[i]]);
          movieList.push(data.Search[i]);
          localStorage.setItem("nominatedMovieList", JSON.stringify(movieList));
          // console.log("bahar" + JSON.stringify(nominatedMovies));
          document.getElementById(id).children[2].disabled = true;
          let content = `${data.Search[i].Title} is nominated`;
          addToast(content, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      }
    } else {
      let content = `You have already reached the nomination limit...`;
      addToast(content, {
        appearance: "info",
        autoDismiss: true,
      });
    }
  }

  function handleMoreInfo(id) {
    toggle();
    axios
      .get(`${backend_url}?i=${id}&apikey=${apikey}`)
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleRemove(id) {
    let movieList = JSON.parse(localStorage.getItem("nominatedMovieList"));
    for (let i = 0; i < movieList.length; i++) {
      if (id === movieList[i].imdbID) {
        let list = movieList.filter((movie) => movie.imdbID !== id);
        let content = `${movieList[i].Title} is removed from nominations`;
        addToast(content, {
          appearance: "error",
          autoDismiss: true,
        });
        setNominatedMovie(list);
        localStorage.setItem("nominatedMovieList", JSON.stringify(list));
        // console.log(JSON.stringify(nominatedMovies));
        if (data.Search) {
          for (let k = 0; k < data.Search.length; k++) {
            if (id === data.Search[k].imdbID) {
              document.getElementById(id).children[2].disabled = false;
            }
          }
        }
      }
    }
  }
  return (
    <section className="main-container">
      {/* <Confetti width={width} height={height} /> */}
      <form className="title-search__form">
        <div className="container">
          <input
            type="text"
            className="title-search__form--input"
            placeholder="Search movie title..."
            onChange={handleChange}
          />
          <img
            alt="movie title search icon"
            src={searchIcon}
            className="title-search__form--icon"
          />
        </div>
      </form>
      <ReactNotification />
      {/* <div className="card"></div> */}
      <ModalExample modal={modal} toggle={toggle} movie={details} />
      <main className="main-container__lists">
        <MovieList
          data={data}
          searchInput={searchInput}
          handleNominate={handleNominate}
          handleMoreInfo={handleMoreInfo}
        />
        <NominatedItemList
          movies={JSON.parse(localStorage.getItem("nominatedMovieList"))}
          handleRemove={handleRemove}
        />
      </main>
    </section>
  );
}

export default App;
