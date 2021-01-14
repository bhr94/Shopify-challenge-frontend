import { Alert } from "reactstrap";
import NominatedItem from "./NominatedItem";
export default function NavBarNominationList({ handleRemove, handleMoreInfo }) {
  let movies;
  JSON.parse(localStorage.getItem("nominatedMovieList"))
    ? (movies = JSON.parse(localStorage.getItem("nominatedMovieList")))
    : (movies = null);
  return (
    <section className="list-container nominated-list display-mobile">
      {movies && movies.length === 5 ? (
        <Alert>Congratualtions!!! Now you have 5 nominations</Alert>
      ) : null}
      <ul className="list-container__list nomination-list">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <NominatedItem
                movie={movie}
                handleRemove={() => handleRemove(movie.imdbID)}
                handleMoreInfo={() => handleMoreInfo(movie.imdbID)}
                id={movie.imdbID}
                key={movie.imdbID}
              />
            );
          })}
      </ul>
    </section>
  );
}
