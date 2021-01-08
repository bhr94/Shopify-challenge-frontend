import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import NominatedItemList from "./components/NominatedItemList";
import searchIcon from "./assets/Icons/Icon-search.svg";

function App() {
  return (
    <section className="main-container">
      <h2>The Shoppies</h2>
      {/* <SearchInput /> */}
      <form className="title-search__form">
        <h3 className="title-search__form--title">Movie title</h3>
        <div className="container">
          <input type="text" className="title-search__form--input" />
          <img
            alt="movie title search icon"
            src={searchIcon}
            className="title-search__form--icon"
          />
        </div>
      </form>
      <main className="main-container__lists">
        <MovieList />
        <NominatedItemList />
      </main>
    </section>
  );
}

export default App;
