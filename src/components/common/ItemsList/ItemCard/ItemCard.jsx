import styles from "./ItemCard.module.scss";
import { Link } from "react-router-dom";
import { Rating, Poster } from "../../../common";

export const ItemCard = ({
  id,
  title,
  vote_average,
  poster_path,
  character = null,
  mode = "movie",
}) => {
  return (
    <Link className={styles.root} to={`/${mode}/${id}`}>
      <Poster className={styles.root__poster} poster_path={poster_path} />
      <div>
        <h5>{title}</h5>
        {mode === "actor" && (
          <span className={styles.root__character}>{character}</span>
        )}
        {mode === "movie" && (
          <Rating className={styles.root__votes} vote_average={vote_average} />
        )}
      </div>
    </Link>
  );
};
