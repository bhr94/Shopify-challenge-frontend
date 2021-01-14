import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
} from "reactstrap";
import img from "../assets/Icons/camera.svg";

const ModalExample = ({ toggle, modal, className, movie }) => {
  return (
    <Modal
      isOpen={modal}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggle}
      className={className}
      className ="modal-container"
    >
      <main className="modal-main">
        <img
          src={movie.Poster === "N/A" ? img : movie.Poster}
          className="list-item__poster"
          className="modal-main__img"
        />
        <div className="modal-main__text">
          <h2 className="modal-main__text--title">{movie.Title}</h2>
          <p className="modal-main__text--subtitle">{movie.Plot}</p>
          <p className="modal-main__text--genre"> {movie.Genre}</p>
          <p>{movie.Production}</p>
          <div className="modal-main__text--details">
            <p className="detail">
              <span className="detail-title">Director:</span>
              <br /> {movie.Director}
            </p>
            <p className="detail">
              <span className="detail-title">Released:</span> <br />
              {movie.Released}
            </p>
            <p className="detail">
              <span className="detail-title">IMDB:</span>
              <br /> {movie.imdbRating}/10
            </p>
            <br />
            <p className="detail">
              <span className="detail-title">Running time:</span> <br />
              {movie.Runtime}
            </p>
            <p className="detail">
              <span className="detail-title">BoxOffice:</span> <br />
              {movie.BoxOffice}
            </p>
            <p className="detail">
              <span className="detail-title">Actors:</span> <br />
              {movie.Actors}
            </p>
          </div>

          {/* <p>Country: {movie.Country}</p> */}
        </div>
      </main>
    </Modal>
  );
};

export default ModalExample;
