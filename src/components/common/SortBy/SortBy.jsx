import { useEffect, useState, useRef, useContext } from "react";
import styles from "./SortBy.module.scss";
import cnBind from "classnames/bind";
import { useDispatch } from "react-redux";
import { setMoviesPage, setSortBy } from "../../../store/moviesReducer";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { LangContext } from "../App/App";
import { LANGUAGES } from "../../../constants";

const cx = cnBind.bind(styles);
const sortByData = [
  {
    id: 1,
    name: "popularity",
    title: "популярности",
    enTitle: "popularity",
  },
  {
    id: 2,
    name: "vote_count",
    title: "рейтингу",
    enTitle: "vote ",
  },
  {
    id: 3,
    name: "release_date",
    title: "дате выхода",
    enTitle: "release date",
  },
];
export const SortBy = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortByObj, setSortByObj] = useState({
    name: "popularity",
    enTitle: "popularity",
    title: "популярности",
    order: "desc",
  });
  const ref = useRef();
  const { lang } = useContext(LangContext);
  const { sortByWord } = LANGUAGES[lang];

  useEffect(() => {
    const { name, order } = sortByObj;
    dispatch(setSortBy({ name, order }));
  }, [sortByObj]);

  useEffect(() => {
    const checkIsClickedOutside = (e) => {
      if (isDropdownOpen && ref.current && !ref.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", checkIsClickedOutside);

    return () => {
      document.removeEventListener("click", checkIsClickedOutside);
    };
  }, [isDropdownOpen]);

  const onClickHandler = ({ name, title, enTitle }) => {
    setSortByObj({ name, title, enTitle, order: "desc" });
    setIsDropdownOpen(false);
    dispatch(setMoviesPage(1));
  };

  const toggleOrder = () => {
    setSortByObj({
      ...sortByObj,
      order: sortByObj.order === "desc" ? "asc" : "desc",
    });
    dispatch(setMoviesPage(1));
  };

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.root__top}>
        <span>{sortByWord}: </span>
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {sortByObj[lang === "en" ? "enTitle" : "title"]}
        </button>
        <button className={styles.root__orderBtn} onClick={toggleOrder}>
          <SvgSelector name={sortByObj.order} />
        </button>
      </div>
      <div
        className={cx(styles.root__dropdown, { [styles.show]: isDropdownOpen })}
      >
        <ul className={styles.root__dropdownList}>
          {sortByData.map(({ id, title, name, enTitle }) => (
            <li key={id} className={styles.root__dropdownItem}>
              <button onClick={() => onClickHandler({ name, title, enTitle })}>
                {lang === "en" ? enTitle : title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

