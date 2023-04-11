import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { APP_NAME, LANGUAGES } from "../../../constants";
import { useParams } from "react-router-dom";
import { ErrorBoundary, MoviesList } from "../../common";
import { LangContext } from "../../common/App/App";
import {ErrorFallback} from "../../common/ErrorBoundary/ErrorFallback";

export const MovieSearch = () => {
  const { searchQuery } = useParams();
  const { lang } = useContext(LangContext);
  const { loadingWord, searchMovies } = LANGUAGES[lang];

  return (
    <>
      <Helmet>
        <title>{`${APP_NAME}: ${searchMovies ? searchMovies : loadingWord}`}</title>
      </Helmet>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MoviesList searchQuery={searchQuery} />
      </ErrorBoundary>
    </>
  );
};
