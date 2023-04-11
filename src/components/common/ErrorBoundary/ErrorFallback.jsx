import React, { useContext } from "react";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

export function ErrorFallback({ error }) {
  const { lang } = useContext(LangContext);
  const { errorSentence } = LANGUAGES[lang];

  return (
    <div>
      <h3>{errorSentence}</h3>
      <p>{error.message}</p>
    </div>
  );
}