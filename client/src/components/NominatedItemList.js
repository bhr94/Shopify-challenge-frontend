import NominatedItem from "./NominatedItem";
export default function NominatedItemList({ movies, handleRemove }) {
  return (
    <section className="list-container">
      <h2>Nominations</h2>
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <NominatedItem
                movie={movie}
                handleRemove={() => handleRemove(movie.imdbID)}
                id={movie.imdbID}
                key={movie.imdbID}
              />
            );
          })}
      </ul>
    </section>
  );
}
