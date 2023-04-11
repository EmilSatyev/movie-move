import React, { useContext, useEffect } from "react";
import styles from "./MoviesList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../store/asyncActions/movies";
import { setMoviesPage } from "../../../store/moviesReducer";
import { setActorsPage } from "../../../store/actorsReducer";
import {
  SortBy,
  ItemsList,
  CardLoader,
  ItemCard,
  Pagination,
} from "../../common/";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

export const MoviesList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const { movies, status, filters, sortBy, pagination, errorMessage } =
    useSelector((state) => state.movies);
  const { lang } = useContext(LangContext);
  const { moviesWord, searchResultWord, apiLang } = LANGUAGES[lang];

  useEffect(() => {
    dispatch(
      fetchMovies({
        filters,
        sortBy,
        page: pagination.page || 1,
        searchQuery,
        lang: apiLang,
      })
    );
  }, [filters, sortBy, pagination.page, searchQuery, apiLang]);

  useEffect(() => {
    return () => {
      dispatch(setMoviesPage(1));
      dispatch(setActorsPage(1));
    };
  }, []);

  if (status === "error") {
    throw Error(LANGUAGES[lang][errorMessage]);
  }

  return (
    <>
      <div className={styles.root__top}>
        <h1 className={styles.root__title}>
          {searchQuery ? (
            <>
              <span>{searchResultWord}:</span> {searchQuery}
            </>
          ) : (
            moviesWord
          )}
        </h1>
        {!searchQuery && <SortBy />}
      </div>
      <ItemsList>
        {status === "loading"
          ? [...Array(10)].map((_, id) => <CardLoader key={id} />)
          : movies.map((m) => <ItemCard key={m.id} {...m} />)}
      </ItemsList>
      <Pagination {...pagination} />
    </>
  );
};

