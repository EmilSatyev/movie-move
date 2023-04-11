import React from "react";
import styles from "./Header.module.scss";
import cnBind from "classnames/bind";
import { SearchForm, Nav, Logo, LangSwitcher } from "../../common";

const cx = cnBind.bind(styles);

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <Logo />
        <SearchForm />
        <Nav />
        <LangSwitcher />
      </div>
    </header>
  );
};
