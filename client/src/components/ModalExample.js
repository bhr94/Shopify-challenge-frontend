import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
} from "reactstrap";
import img from "../assets/Icons/Icon-likes.svg";

const ModalExample = ({ toggle, modal, className, movie }) => {
  return (
    <Modal
      isOpen={modal}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggle}
      className={className}
      style={{ marginTop: "12rem", maxWidth:"1100px"}}
    >
      <main className ="modal-main">
        <img
          src={movie.Poster === "N/A" ? img : movie.Poster}
          className="list-item__poster"
          className ="modal-main__img"
        />
        <div className ="modal-main__text">
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <h3> {movie.Genre}</h3>
          <p>{movie.Production}</p>
          <p>Director: {movie.Director}</p>
          <p>Released: {movie.Released}</p>
          <p>IMDB: {movie.imdbRating}/10</p>
          <p>Running time: {movie.Runtime}</p>
          <p>Actors: {movie.Actors}</p>
          <p>BoxOffice: {movie.BoxOffice}</p>
          {/* <p>Country: {movie.Country}</p> */}
        </div>
      </main>
    </Modal>
  );
};

export default ModalExample;
