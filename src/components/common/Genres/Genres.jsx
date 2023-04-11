import React, { useContext, useEffect, useState } from "react";
import styles from "./Genres.module.scss";
import cnBind from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../../store/asyncActions/genres";
import Loader from "../Loader/Loader";
import { setFilters, setMoviesPage } from "../../../store/moviesReducer";
import { useNavigate } from "react-router-dom";
import { setSelectedGenres } from "../../../store/genresReducer";
import { LANGUAGES } from "../../../constants";
import { LangContext } from "../App/App";

const cx = cnBind.bind(styles);

export const Genres = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres, status, errorMessage, selectedGenres } = useSelector(
    (state) => state.genres
  );
  const [isShowAllGenres, setIsShowAllGenres] = useState(false);
  const { lang } = useContext(LangContext);
  const { genresWord, apiLang, showMoreWord } = LANGUAGES[lang];

  useEffect(() => {
    dispatch(fetchGenres(apiLang));
  }, [apiLang]);

  useEffect(() => {
    dispatch(setFilters({ filterBy: "genre", value: selectedGenres }));
  }, [selectedGenres]);

  const onChange = (e) => {
    const genreId = +e.target.name;
    navigate("");
    dispatch(setSelectedGenres(genreId));
    dispatch(setMoviesPage(1));
  };

  const showAllGenres = (e) => {
    e.preventDefault();
    setIsShowAllGenres(true);
  };
  if (status === "error") {
    throw Error(LANGUAGES[lang][errorMessage]);
  }

  return (
    <div className={styles.root}>
      <h4 className={styles.root__title}>{genresWord}</h4>
      {status === "loading" ? (
        [...Array(5)].map((_, id) => <Loader key={id} />)
      ) : (
        <form className={styles.root__form}>
          <ul
            className={cx(styles.root__list, {
              [styles.show]: isShowAllGenres,
            })}
          >
            {genres.map(({ id, name }) => (
              <li className={styles.root__item} key={id}>
                <input
                  id={id}
                  name={id}
                  onChange={onChange}
                  type="checkbox"
                  checked={selectedGenres.includes(id)}
                />
                <label htmlFor={id}>{name}</label>
              </li>
            ))}
          </ul>
          {!isShowAllGenres && (
            <button onClick={showAllGenres}>{showMoreWord}...</button>
          )}
        </form>
      )}
    </div>
  );
};
