import React, {useContext} from "react";
import styles from "./Nav.module.scss";
import { navigationRoutes } from "../../../router/routes";
import { NavLink } from "react-router-dom";
import {LangContext} from "../App/App";
import {LANGUAGES} from "../../../constants";

export const Nav = () => {
  const { lang } = useContext(LangContext);

  return (
    <nav className={styles.root}>
      <ul>
        {navigationRoutes.slice(0, 2).map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>{LANGUAGES[lang][title]}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
