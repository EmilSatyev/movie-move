import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { APP_NAME, LANGUAGES } from "../../../constants";
import { ErrorBoundary, MoviesList } from "../../common";
import { LangContext } from "../../common/App/App";
import {ErrorFallback} from "../../common/ErrorBoundary/ErrorFallback";

export const Home = () => {
  const { lang } = useContext(LangContext);
  const { moviesWord, loadingWord } = LANGUAGES[lang];
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME}: ${moviesWord ? moviesWord : loadingWord}`}</title>
      </Helmet>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MoviesList />
      </ErrorBoundary>
    </>
  );
};
