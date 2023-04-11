import React from "react";
import styles from "./ItemsList.module.scss";

export const ItemsList = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
