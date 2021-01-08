export default function MovieItem({ movie, handleNominate }) {
  return (
    <li className="list-item">
      {/* <p className="list-item__title">
        {movie.Title} + ( + {movie.Year} + )
      </p> */}
      <p>Titanic(1999)</p>
      <button className="list-item__button" onClick ={handleNominate}>Nominate</button>
    </li>
  );
}
