import NominatedItem from "./NominatedItem";
export default function NominatedItemList(props) {
  const movies = props;
  return (
    <section className="list-container">
      <h2>Nominations</h2>
      <ul>
        {movies.length&&movies.map((movie) => {
          <NominatedItem
            movie={movie}
            handleRemove={(id) => props.handleRemove(id)}
            id={movie.imdbID}
          />;
        })}
      </ul>
    </section>
  );
}
