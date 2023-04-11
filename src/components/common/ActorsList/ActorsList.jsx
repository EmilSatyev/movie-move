import React, { useContext, useEffect } from "react";
import styles from "./ActorsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchActors } from "../../../store/asyncActions/actors";
import { ItemsList, CardLoader, ItemCard, Pagination } from "../../common/";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

export const ActorsList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const { actors, status, pagination, errorMessage } = useSelector(
    (state) => state.actors
  );
  const { lang } = useContext(LangContext);
  const { actorsWord, searchResultWord } = LANGUAGES[lang];

  useEffect(() => {
    dispatch(fetchActors({ page: pagination.page || 1, searchQuery }));
  }, [pagination.page, searchQuery]);

  if (status === "error") {
    throw Error(LANGUAGES[lang][errorMessage]);
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.root__title}>
        {searchQuery ? (
          <>
            <span>{searchResultWord}:</span> {searchQuery}
          </>
        ) : (
          actorsWord
        )}
      </h1>
      <ItemsList>
        {status === "loading" ? (
          [...Array(10)].map((_, id) => <CardLoader key={id} />)
        ) : actors?.length > 0 ? (
          actors.map(({ id, name, profile_path }) => (
            <ItemCard
              key={id}
              id={id}
              title={name}
              poster_path={profile_path}
              mode="actor"
            />
          ))
        ) : (
          <h1>Ничего нет</h1>
        )}
        }
      </ItemsList>
      <Pagination {...pagination} mode="actors" />
    </div>
  );
};
