import { Alert } from "reactstrap";
import NominatedItem from "./NominatedItem";
export default function NominatedItemList({ movies, handleRemove }) {
  return (
    <section className="list-container">
      <h4>Nominations</h4>
      {movies.length === 5 ? (
        <Alert>Congratualtions!!! Now you have 5 nominations</Alert>
      ) : null}
      <ul className="list-container__list nomination-list">
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
