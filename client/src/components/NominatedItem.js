import { Button } from "reactstrap";
export default function NominatedItem({ movie, handleRemove, id }) {
  return (
    <li className="list-item">
      <p className="list-item__title">
        {movie.Title} ({movie.Year})
      </p>
      <Button
        color="info"
        className="list-item__button"
        onClick={() => handleRemove(id)}
      >
        Remove
      </Button>
    </li>
  );
}
