import React from "react";
import styles from "./Aside.module.scss";
import { ErrorBoundary,Genres } from "../../common/";
import {ErrorFallback} from "../ErrorBoundary/ErrorFallback";

export const Aside = () => {
  return (
    <aside className={styles.root}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Genres />
      </ErrorBoundary>
    </aside>
  );
};

