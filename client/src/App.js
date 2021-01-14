import React, { useState, useEffect } from "react";
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
import Navigation from "./components/Navigation";
import NavBarNominationList from "./components/NavBarNominationList";
import {
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap";

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

  useEffect(() => {
    getDefaultResults();
  }, [3]);

  //fetching some default results to prevent the ui look empty
  function getDefaultResults() {
    axios
      .get(backend_url + `?s="Inter"&apikey=${apikey}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
    axios
      .get(backend_url + `?s=${e.target.value}&apikey=${apikey}`)
      .then((response) => {
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
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavBarNominationList
            movies={JSON.parse(localStorage.getItem("nominatedMovieList"))}
            handleRemove={handleRemove}
            handleMoreInfo={handleMoreInfo}
            className="display-mobile"
          />
        </Navbar.Collapse>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search movie title..."
            className="mr-sm-2"
            onChange ={handleChange}
          />
        </Form>
      </Navbar>

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
          handleMoreInfo={handleMoreInfo}
        />
      </main>
    </section>
  );
}

export default App;
