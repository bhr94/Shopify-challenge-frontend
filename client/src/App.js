import React, { useState } from "react";
// import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import NominatedItemList from "./components/NominatedItemList";
import searchIcon from "./assets/Icons/Icon-search.svg";
import axios from "axios";
// import Notifications, { notify } from "react-notify-toast";
import ReactNotification from "react-notifications-component";
import { useToasts } from "react-toast-notifications";

const backend_url = "http://www.omdbapi.com/";
const apikey = "3ac0d74";
function App() {
  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [nominatedMovies, setNominatedMovie] = useState([]);
  const { addToast } = useToasts();

  function handleChange(e) {
    setSearchInput(e.target.value);
    axios
      .get(backend_url + `?s=${e.target.value}&page=1&apikey=${apikey}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
    // let list = JSON.parse(localStorage.getItem("nominatedMovieList"));
    // let newData = data;
    // if (newData.Search) {
    //   for (let i = 0; i < list.length; i++) {
    //     for (let k = 0; k < newData.Search.length; k++) {
    //       if (list[i].imdbID === newData.Search[k].imdbID) {
    //         newData.Search[k].nominated = true;
    //       }
    //       else {
    //         newData.Search[k].nominated = false;
    //       }
    //     }
    //   }
    // setData(newData);
    // }
    // console.log(data.Search);
  }

  function handleNominate(id) {
    let movieList;
    JSON.parse(localStorage.getItem("nominatedMovieList"))
      ? (movieList = JSON.parse(localStorage.getItem("nominatedMovieList")))
      : (movieList = null);

    setNominatedMovie(movieList);
    if (movieList && movieList.length < 5) {
      for (let i = 0; i < data.Search.length; i++) {
        if (id === data.Search[i].imdbID) {
          setNominatedMovie([...nominatedMovies, data.Search[i]]);
          movieList.push(data.Search[i]);
          localStorage.setItem("nominatedMovieList", JSON.stringify(movieList));
          console.log("bahar" + JSON.stringify(nominatedMovies));
          document.getElementById(id).children[2].disabled = true;
          // notify.show('Toasty!');
          let content = `${data.Search[i].Title} is nominated`;
          addToast(content, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      }
    } else if (movieList && movieList.length === 5) {
      let content = `You have already reached the nomination limit...`;
      addToast(content, {
        appearance: "info",
        autoDismiss: true,
      });
    } else {
      let list = []
      for (let i = 0; i < data.Search.length; i++) {
        if (id === data.Search[i].imdbID) {
          setNominatedMovie([...nominatedMovies, data.Search[i]]);
          list.push(data.Search[i]);
          localStorage.setItem("nominatedMovieList", JSON.stringify(list));
          console.log("bahar" + JSON.stringify(nominatedMovies));
          document.getElementById(id).children[2].disabled = true;
          let content = `${data.Search[i].Title} is nominated`;
          addToast(content, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      }
    }

    // document.querySelector(".message").style.display = "flex";
    // setTimeout(() => {
    //   document.querySelector(".message").style.display = "none";
    // }, 3000);
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
      <form className="title-search__form">
        {/* <h3 className="title-search__form--title">Movie title</h3> */}
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
      <ReactNotification />
      {/* <div className="card"></div> */}
      <main className="main-container__lists">
        <MovieList
          data={data}
          searchInput={searchInput}
          handleNominate={handleNominate}
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
