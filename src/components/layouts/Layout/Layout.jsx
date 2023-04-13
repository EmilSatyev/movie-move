import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Aside, ErrorBoundary, Header } from "../../common";
import { ErrorFallback } from "../../common/ErrorBoundary/ErrorFallback";

const Layout = () => {
  const location = useLocation();
  const [isShowAside, setIsShowAside] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsShowAside(
      !location.pathname.includes("actor") &&
        !location.pathname.includes("search")
    );
  }, [location]);

  return (
    <div className={styles.root}>
      <Header />

      {isShowAside && <Aside />}
      <main className={styles.root__main}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
