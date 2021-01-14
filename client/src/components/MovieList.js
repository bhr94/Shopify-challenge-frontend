import MovieItem from "./MovieItem";
import NotFound from "./NotFound";
export default function MovieList({
  data,
  searchInput,
  handleNominate,
  handleMoreInfo,
}) {
  let imdbIDArray = [];
  JSON.parse(localStorage.getItem("nominatedMovieList")) &&
    JSON.parse(localStorage.getItem("nominatedMovieList")).map((movie) => {
      return imdbIDArray.push(movie.imdbID);
    });
  return (
    <section className="list-container movie-list">
      <h4 className="list-container__title">Results for {searchInput}</h4>
      <ul className="list-container__list">
        {data.Response === "True" ? (
          data.Search.map((movie) => {
            return (
              <MovieItem
                movie={movie}
                handleNominate={handleNominate}
                handleMoreInfo={handleMoreInfo}
                key={movie.imdbID}
                id={movie.imdbID}
                nominated={imdbIDArray.includes(movie.imdbID)}
              />
            );
          })
        ) : (
          <NotFound/>
        )}
      </ul>
    </section>
  );
}
