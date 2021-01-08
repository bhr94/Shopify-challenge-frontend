import searchIcon from "../assets/Icons/Icon-search.svg";
import axios from "axios";
const backend_url = "http://www.omdbapi.com/?i=tt3896198&apikey=3ac0d74";
const apikey = "3ac0d7";
export default function SearchInput() {
  function handleChange(e) {
    console.log(e.target.value)
    axios
      .get(backend_url + `?i=${e.target.value}&=${apikey}`)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <form className="title-search__form">
      <h3 className="title-search__form--title">Movie title</h3>
      <div className="container">
        <input
          type="text"
          className="title-search__form--input"
          onChange={handleChange}
        />
        <img
          alt="movie title search icon"
          src={searchIcon}
          className="title-search__form--icon"
        />
      </div>
    </form>
  );
}
