import MovieItem from "./MovieItem";

export default function MovieList({ data, searchInput, handleNominate }) {
  return (
    <section className="list-container">
      <h2 className="list-container__title">Results for {searchInput}</h2>
      <ul className="list-container__list">
        {data.Response === "True" ? (
          data.Search.map((movie) => {
            return (
              <MovieItem
                movie={movie}
                handleNominate={handleNominate}
                id={movie.imdbID}
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
