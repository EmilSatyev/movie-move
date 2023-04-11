import React, { useContext } from "react";
import styles from "./LangSwitcher.module.scss";
import cnBind from "classnames/bind";
import { LangContext } from "../App/App";

const cx = cnBind.bind(styles);

export const LangSwitcher = () => {
  const { lang, setLang } = useContext(LangContext);
  const switchLang = () => {
    setLang(lang === "ru" ? "en" : "ru");
  };

  return (
    <div className={styles.root}>
      <button
        onClick={() => switchLang("ru")}
        className={cx({ [styles.active]: lang === "ru" })}
      >
        РУ
      </button>
      {" "}/{" "}
      <button
        onClick={() => switchLang("en")}
        className={cx({ [styles.active]: lang === "en" })}
      >
        EN
      </button>
    </div>
  );
};

