import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import cnBind from "classnames/bind";
import { useDispatch } from "react-redux";
import { setMoviesPage } from "../../../store/moviesReducer";
import { setActorsPage } from "../../../store/actorsReducer";

const cx = cnBind.bind(styles);

export const Pagination = ({ page, totalPages, mode = "movie" }) => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState([]);

  const changePage = (page) => {
    window.scrollTo(0, 0);
    if (mode === "movie") {
      dispatch(setMoviesPage(page));
    } else {
      dispatch(setActorsPage(page));
    }
  };
  useEffect(() => {
    totalPages = Math.min(totalPages, 500);

    if (totalPages <= 5) {
      setPages(Array.from({ length: totalPages }, (_, index) => index + 1));
    } else if (page < 5) {
      setPages([1, 2, 3, 4, 5, "rightDots", totalPages]);
    } else if (page >= 5 && !(totalPages - page < 4)) {
      setPages([
        1,
        "leftDots",
        page - 1,
        page,
        page + 1,
        "rightDots",
        totalPages,
      ]);
    } else {
      setPages([
        1,
        "leftDots",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]);
    }
  }, [page, totalPages]);

  return (
    <div className={styles.root}>
      <ul>
        {pages.map((p) => {
          if (p === "rightDots" || p === "leftDots") {
            return <li key={p}>...</li>;
          }
          return (
            <li key={p} className={cx({ [styles.active]: p === page })}>
              <button onClick={() => changePage(p)}>{p}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

