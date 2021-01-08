export default function NominatedItem({ movie, handleRemove }) {
  return (
    <li className="list-item">
      {/* <p className="list-item__title">
        {movie.Title} + ( + {movie.Year} + )
      </p> */}
      <p>Rambo (1999)</p>
      <button className="list-item__button" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
}
