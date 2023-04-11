import React, { useContext, useEffect, useState } from "react";
import styles from "./ActorPage.module.scss";

import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY, APP_NAME, LANGUAGES } from "../../../constants";
import { Helmet } from "react-helmet-async";
import { Cast, ImageCardLoader, Poster, TextLoader } from "../../common";
import { LangContext } from "../../common/App/App";

export const ActorPage = () => {
  const { actorId } = useParams();
  const [actorData, setActorData] = useState({});
  const [moviesData, setMoviesData] = useState({});
  const [status, setStatus] = useState("loading");
  const { name, profile_path, biography } = actorData;
  const { cast } = moviesData;

  const { lang } = useContext(LangContext);
  const { apiLang, singleActorError, loadingWord } = LANGUAGES[lang];

  useEffect(() => {
    const actorDataPromise = axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=${apiLang}`
    );
    const moviesDataPromise = axios(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=${apiLang}`
    );
    Promise.all([actorDataPromise, moviesDataPromise])
      .then(([actorResponse, moviesResponse]) => {
        setActorData(actorResponse.data);
        setMoviesData(moviesResponse.data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [actorId, apiLang]);

  useEffect(() => {
    if (status === "error") {
      throw Error(singleActorError);
    }
  }, [status]);

  return (
    <>
      <Helmet>
        <title>{`${APP_NAME}: ${name ? name : loadingWord}`}</title>
      </Helmet>
      <>
        <div className={styles.root__card}>
          {status === "loading" ? (
            <div className={styles.root__poster}>
              <ImageCardLoader />
            </div>
          ) : (
            <Poster
              className={styles.root__poster}
              poster_path={profile_path}
            />
          )}
          {status === "loading" ? (
            <TextLoader />
          ) : (
            <div className={styles.root__info}>
              <h1 className={styles.root__title}>{name}</h1>
              {biography && <p className={styles.root__bio}>{biography}</p>}
            </div>
          )}
        </div>
        {cast?.length > 0 && <Cast cast={cast} mode="movie" />}
      </>
    </>
  );
};
