import searchIcon from "../assets/Icons/Icon-search.svg";
const backend_url = "http://www.omdbapi.com/?i=tt3896198&apikey=3ac0d74";
import axios from "axios";
export default function SearchInput() {


  handleChange(e) {
    
  }
  return (
    <form className="title-search__form">
      <h3 className="title-search__form--title">Movie title</h3>
      <div className = "container">
        <input type="text" className="title-search__form--input" onChange ={handleChange}/>
        <img
          alt="movie title search icon"
          src={searchIcon}
          className="title-search__form--icon"
        />
      </div>
    </form>
  );
}
