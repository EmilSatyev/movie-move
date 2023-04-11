import React, {useContext} from "react";
import { Helmet } from "react-helmet-async";
import {APP_NAME, LANGUAGES} from "../../../constants";
import { ActorsList, ErrorBoundary } from "../../common";
import {LangContext} from "../../common/App/App";
import {ErrorFallback} from "../../common/ErrorBoundary/ErrorFallback";

export const Actors = () => {
  const { lang } = useContext(LangContext);
  const { actorsWord, loadingWord } = LANGUAGES[lang];

  return (
    <>
      <Helmet>
        <title>{`${APP_NAME}: ${actorsWord ? actorsWord : loadingWord}`}</title>
      </Helmet>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ActorsList />
      </ErrorBoundary>
    </>
  );
};

