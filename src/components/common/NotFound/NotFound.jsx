import React, { useContext } from "react";
import styles from "./NotFound.module.scss";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

export const NotFound = () => {
  const { lang } = useContext(LangContext);
  const { notSuchPage } = LANGUAGES[lang];
  return <div className={styles.root}>404 {notSuchPage}</div>;
};
