import { Button } from "reactstrap";
import img from "../assets/Icons/camera.svg";
export default function MovieItem({
  movie,
  handleNominate,
  id,
  nominated,
  handleMoreInfo,
}) {
  return (
    <li className="list-item" id={movie.imdbID}>
      <img
        src={movie.Poster === "N/A" ? img : movie.Poster}
        className="list-item__poster"
      />
      <p className="list-item__title">
        {movie.Title} ({movie.Year})
      </p>
      {nominated ? (
        <Button
          outline
          color="secondary"
          className="list-item__button"
          disabled
        >
          Nominate
        </Button>
      ) : (
        <Button
          outline
          color="secondary"
          className="list-item__button"
          onClick={() => handleNominate(id)}
        >
          Nominate
        </Button>
      )}
      <Button
        outline
        color="primary"
        className="list-item__button"
        onClick={() => handleMoreInfo(id)}
      >
        Details
      </Button>
    </li>
  );
}
