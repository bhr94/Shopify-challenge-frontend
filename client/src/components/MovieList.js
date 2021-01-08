import MovieItem from "./MovieItem";
export default function MovieList({ data, searchInput, handleNominate }) {
  return (
    <section className="list-container">
      <h2>Results for {searchInput}</h2>
      <div>
        {data.Response === "True" ? (
          data.Search.map((movie) => {
            return <MovieItem movie={movie} handleNominate={handleNominate} />;
          })
        ) : (
          <p>{data.Error}</p>
        )}
      </div>
    </section>
  );
}
