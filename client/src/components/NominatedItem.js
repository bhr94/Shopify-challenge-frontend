import { Button } from "reactstrap";
// import { Card, CardTitle, CardText, CardImg } from "reactstrap";

export default function NominatedItem({
  movie,
  handleRemove,
  id,
  handleMoreInfo,
}) {
  return (
    // <Card body inverse className="list-item nominated-item">
    //   <CardTitle tag="h5" style ={{color:"black"}}>{movie.Title}</CardTitle>
    //   <CardText style ={{color:"black"}}>({movie.Year})</CardText>
    //   <Button color="danger" onClick={() => handleRemove(id)}>Remove</Button>
    //   <CardImg src ={movie.Poster} style ={{height:"160px", marginTop:"10px"}}/>
    // </Card>
    <li className="list-item nominated-item">
      <p className="list-item__title">
        {movie.Title} ({movie.Year})
      </p>
      <div className ="list-item__footer">
        <Button
          outline
          color="danger"
          className="list-item__button"
          onClick={() => handleRemove(id)}
        >
          Remove
        </Button>
        <Button
          outline
          color="primary"
          className="list-item__button"
          onClick={() => handleMoreInfo(id)}
        >
          Details
        </Button>
      </div>
    </li>
  );
}
