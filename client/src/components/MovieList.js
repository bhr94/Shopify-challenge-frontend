import MovieItem from "./MovieItem";
export default function MovieList({ data, searchInput,handleNominate }) {
  return (
    <section className="list-container">
      <h2>Results for {searchInput}</h2>
      <ul>
        {data.Response === "True"?data.Search.map((movie) => {
          <MovieItem movie={movie} handleNominate={handleNominate} />;
        }):<p>{data.Error}</p>}
      </ul>
    </section>
  );
}
