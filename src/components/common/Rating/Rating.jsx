import React, { useContext, useEffect, useState } from "react";
import styles from "./Rating.module.scss";
import cnBind from "classnames/bind";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

const cx = cnBind.bind(styles);

export const Rating = ({ className, vote_average }) => {
  const [rating, setRating] = useState(vote_average);
  const { lang } = useContext(LangContext);
  const { noRate } = LANGUAGES[lang];
  useEffect(() => {
    if (vote_average) {
      setRating(vote_average.toFixed(1));
    }
  }, [vote_average]);

  return (
    <div
      className={cx(styles.root, className, {
        [styles.root__noRating]: !rating,
      })}
    >
      <SvgSelector name="star" />
      <span>{rating ? rating : noRate}</span>
    </div>
  );
};
