import React, { useContext, useEffect, useState } from "react";
import styles from "./MoviePage.module.scss";
import { API_KEY, APP_NAME, LANGUAGES } from "../../../constants";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import {
  clearSelectedGenres,
  setSelectedGenres,
} from "../../../store/genresReducer";
import { useDispatch } from "react-redux";
import {
  Cast,
  ImageCardLoader,
  Poster,
  Rating,
  TextLoader,
} from "../../common";
import { LangContext } from "../../common/App/App";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [actorsData, setActorsData] = useState({});
  const [status, setStatus] = useState("loading");

  const { title, tagline, vote_average, overview, genres, poster_path } =
    movieData;
  const { cast } = actorsData;
  const { lang } = useContext(LangContext);
  const { genresWord, apiLang, singleMovieError, loadingWord } = LANGUAGES[lang];

  useEffect(() => {
    const movieDataPromise = axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${apiLang}`
    );
    const actorsDataPromise = axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=${apiLang}`
    );
    Promise.all([movieDataPromise, actorsDataPromise])
      .then(([movieResponse, actorsResponse]) => {
        setMovieData(movieResponse.data);
        setActorsData(actorsResponse.data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [movieId, apiLang]);

  const onClick = (id) => {
    dispatch(clearSelectedGenres());
    dispatch(setSelectedGenres(id));
  };

  useEffect(() => {
    if (status === "error") {
      throw Error(singleMovieError);
    }
  }, [status,singleMovieError]);

  return (
    <>
      <Helmet>
        <title>{`${APP_NAME}: ${title ? title : loadingWord}`}</title>
      </Helmet>
      <>
        <div className={styles.root__card}>
          {status === "loading" ? (
            <div className={styles.root__poster}>
              <ImageCardLoader />
            </div>
          ) : (
            <Poster className={styles.root__poster} poster_path={poster_path} />
          )}

          {status === "loading" ? (
            <TextLoader />
          ) : (
            <div className={styles.root__info}>
              <h1>{title}</h1>
              <span className={styles.root__tagline}>{tagline}</span>
              <Rating
                className={styles.root__votes}
                vote_average={vote_average}
              />
              {overview && <p className={styles.root__overview}>{overview}</p>}
              {genres?.length > 0 && (
                <>
                  <h5 className={styles.root__subtitle}>{genresWord}: </h5>
                  <ul className={styles.root__genres}>
                    {genres?.map(({ id, name }) => (
                      <li key={id}>
                        <Link to="" onClick={() => onClick(id)}>
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
        {cast?.length > 0 && <Cast cast={cast} mode="actor" />}
      </>
    </>
  );
};
