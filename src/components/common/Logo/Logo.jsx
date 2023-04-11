import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

export const Logo = () => {
  return (
    <Link to="" className={styles.root}>
      <img src={logo} alt="Logo" />
    </Link>
  );
};
