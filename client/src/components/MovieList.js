import MovieItem from "./MovieItem";
export default function MovieList(props) {
  const movies = props;
  return (
    <section className="list-container">
      <h2>Results for ...</h2>
      <ol>
        {movies.map((movie) => {
          <MovieItem movie={movie} handleNominate={props.handleNominate} />;
        })}
      </ol>
    </section>
  );
}
