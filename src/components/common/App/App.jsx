import React, { createContext, useState } from "react";
import AppRouter from "../../../router";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import {ErrorFallback} from "../ErrorBoundary/ErrorFallback";

export const LangContext = createContext(null);

export const App = () => {
  const [lang, setLang] = useState("ru");

  return (
    <HelmetProvider>
      <LangContext.Provider value={{ lang, setLang }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppRouter />
        </ErrorBoundary>
      </LangContext.Provider>
    </HelmetProvider>
  );
};
