import { Button } from "reactstrap";
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

export default function NominatedItem({ movie, handleRemove, id }) {
  return (
  
      <Card body inverse className="list-item nominated-item">
        <CardTitle tag="h5">{movie.Title}</CardTitle>
        <CardText>({movie.Year})</CardText>
        <Button color="danger" onClick={() => handleRemove(id)}>Remove</Button>
        <CardImg src ={movie.Poster} style ={{height:"160px", marginTop:"10px"}}/>
      </Card>
  );
}


{/* <li className="list-item nominated-item">
<p className="list-item__title">
  {movie.Title} ({movie.Year})
</p>
<Button
  color="danger"
  className="list-item__button"
  onClick={() => handleRemove(id)}
>
  Remove
</Button>
</li> */}