import searchIcon from "../assets/Icons/Icon-search.svg";

export default function SearchInput() {
  return (
    <form className="title-search__form">
      <h3 className="title-search__form--title">Movie title</h3>
      <div className = "container">
        <input type="text" className="title-search__form--input" />
        <img
          alt="movie title search icon"
          src={searchIcon}
          className="title-search__form--icon"
        />
      </div>
    </form>
  );
}
