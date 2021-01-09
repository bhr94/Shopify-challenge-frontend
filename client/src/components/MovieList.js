import MovieItem from "./MovieItem";

export default function MovieList({ data, searchInput, handleNominate }) {
  return (
    <section className="list-container movie-list">
      <h4 className="list-container__title">Results for {searchInput}</h4>
      <ul className="list-container__list">
        {data.Response === "True" ? (
          data.Search.map((movie) => {
            return JSON.parse(
              localStorage.getItem("nominatedMovieList")
            ).includes(movie) ? (
              <MovieItem
                movie={movie}
                handleNominate={handleNominate}
                key={movie.imdbID}
                id={movie.imdbID}
                nominated={true}
              />
            ) : (
              <MovieItem
                movie={movie}
                handleNominate={handleNominate}
                key={movie.imdbID}
                id={movie.imdbID}
                nominated={false}
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
