import NominatedItem from "./NominatedItem";
export default function NominatedItemList(props) {
  const movies = props;
  return (
    <section className="list-container">
      <h2>Nominations</h2>
      <ul>
        {/* {movies.map((movie) => {
          <NominatedItem movie={movie} handleRemove={props.handleRemove} />;
        })} */}
        <NominatedItem handleRemove={props.handleRemove} />
      </ul>
    </section>
  );
}
