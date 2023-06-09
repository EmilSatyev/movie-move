import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { APP_NAME, LANGUAGES } from "../../../constants";
import { useParams } from "react-router-dom";
import { ActorsList, ErrorBoundary } from "../../common";
import { LangContext } from "../../common/App/App";
import {ErrorFallback} from "../../common/ErrorBoundary/ErrorFallback";

export const ActorSearch = () => {
  const { searchQuery } = useParams();
  const { lang } = useContext(LangContext);
  const { loadingWord, searchActors } = LANGUAGES[lang];

  return (
    <>
      <Helmet>
        <title>{`${APP_NAME}: ${searchActors ? searchActors : loadingWord}`}</title>
      </Helmet>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ActorsList searchQuery={searchQuery} />
      </ErrorBoundary>
    </>
  );
};
