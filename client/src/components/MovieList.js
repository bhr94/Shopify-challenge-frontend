import MovieItem from "./MovieItem";

export default function MovieList({ data, searchInput, handleNominate }) {
  let imdbIDArray = [];
  JSON.parse(localStorage.getItem("nominatedMovieList")) &&
    JSON.parse(localStorage.getItem("nominatedMovieList")).map((movie) => {
      return imdbIDArray.push(movie.imdbID);
    });
  return (
    <section className="list-container movie-list scroll">
      <h4 className="list-container__title">Results for {searchInput}</h4>
      <ul className="list-container__list">
        {data.Response === "True" ? (
          data.Search.map((movie) => {
            return (
              <MovieItem
                movie={movie}
                handleNominate={handleNominate}
                key={movie.imdbID}
                id={movie.imdbID}
                nominated={imdbIDArray.includes(movie.imdbID)}
              />
            );
          })
        ) : (
          <p>{data.Error}</p>
        )}
      </ul>
    </section>
  );
}
