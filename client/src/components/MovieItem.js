import { Button } from "reactstrap";
export default function MovieItem({ movie, handleNominate, id }) {
  return (
    <li className="list-item" id={movie.imdbID}>
      <img src={movie.Poster} className="list-item__poster" />
      <p className="list-item__title">
        {movie.Title} ({movie.Year})
      </p>
      <Button
        color="secondary"
        className="list-item__button"
        onClick={() => handleNominate(id)}
      >
        Nominate
      </Button>
    </li>
  );
}
