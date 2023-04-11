import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchForm.module.scss";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setMoviesPage } from "../../../store/moviesReducer";
import { clearSelectedGenres } from "../../../store/genresReducer";
import { setActorsPage } from "../../../store/actorsReducer";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

export const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isActorsPage, setIsActorsPage] = useState(false);
  const { lang } = useContext(LangContext);
  const { findWord, actorWord, movieWord } = LANGUAGES[lang];

  useEffect(() => {
    setIsActorsPage(location.pathname.includes("actor"));
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      dispatch(setMoviesPage(1));
      dispatch(setActorsPage(1));
      dispatch(clearSelectedGenres());
      navigate(
        `/movie-move/${isActorsPage ? "search_actor" : "search_movie"}/${searchText}`
      );
      setSearchText("");
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className={styles.root}>
      <input
        onChange={onChange}
        value={searchText}
        type="text"
        placeholder={`${findWord} ${isActorsPage ? actorWord : movieWord}...`}
      />
      <button type="submit">
        <SvgSelector name="search" />
      </button>
    </form>
  );
};
