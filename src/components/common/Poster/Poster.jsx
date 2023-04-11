import React, { useState } from "react";
import styles from "./Poster.module.scss";
import cnBind from "classnames/bind";
import ImageCardLoader from "../Loader/ImageCardLoader";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const cx = cnBind.bind(styles);

export const Poster = ({ className, poster_path }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={cx(styles.root, className)}>
      {poster_path ? (
        <>
          {!isImageLoaded && <ImageCardLoader />}
          <img
            onLoad={() => setIsImageLoaded(true)}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
            alt="poster"
          />
        </>
      ) : (
        <div className={styles.root__noImage}>
          <SvgSelector name="noImage" />
        </div>
      )}
    </div>
  );
};
