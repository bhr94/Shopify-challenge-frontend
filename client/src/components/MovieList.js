import MovieItem from "./MovieItem";
import { v4 as uuidv4 } from 'uuid';

export default function MovieList({ data, searchInput, handleNominate }) {
  return (
    <section className="list-container">
      <h2 className="list-container__title">Results for {searchInput}</h2>
      <ul className ="list-container__list">
        {data.Response === "True" ? (
          data.Search.map((movie) => {
            return <MovieItem movie={movie} handleNominate={handleNominate} key ={uuidv4()}/>;
          })
        ) : (
          <p>{data.Error}</p>
        )}
      </ul>
    </section>
  );
}
