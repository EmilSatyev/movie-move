import { useContext, useState } from "react";
import styles from "./Cast.module.scss";
import { ItemsList, ItemCard } from "../../common/";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

export const Cast = ({ cast, mode }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const showMore = () => {
    setIsShowMore(true);
  };
  const { lang } = useContext(LangContext);
  const { actorsWord, inMoviesWord, showMoreWord } = LANGUAGES[lang];

  const title = mode === "movie" ? inMoviesWord : actorsWord;

  return (
    <>
      <h1 className={styles.root__title}>{title}</h1>
      <ItemsList>
        {(!isShowMore ? cast?.slice(0, 10) : cast)?.map((c) => {
          let itemCardData = {};
          if (mode === "actor") {
            itemCardData = {
              id: c.id,
              title: c.original_name,
              poster_path: c.profile_path,
              character: c.character,
              mode,
            };
          } else if (mode === "movie") {
            itemCardData = { ...c };
          }

          return <ItemCard key={c.id} {...itemCardData} />;
        })}
      </ItemsList>
      {!isShowMore && cast.length > 8 && (
        <button className={styles.root__showMore} onClick={showMore}>
          {showMoreWord}...
        </button>
      )}
    </>
  );
};
