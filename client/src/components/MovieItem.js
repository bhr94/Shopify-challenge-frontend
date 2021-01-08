export default function MovieItem({ movie, handleNominate }) {
  return (
    <li className="list-item">
      <img src={movie.Poster} className="list-item__poster" />
      <p className="list-item__title">
        {movie.Title} ({movie.Year})
      </p>
      <button className="list-item__button" onClick={handleNominate}>
        Nominate
      </button>
    </li>
  );
}
