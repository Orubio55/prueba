import React, { useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LanguageContext from "context/language";
import translations from "translations";
import { IntlProvider } from "react-intl";
import Header from "components/layout/header/header";
import Router from "./router";

const Layout = () => {
  const [locale, setLocale] = useState("en");
  const languageValue = useMemo(() => ({ locale, setLocale }), [locale]);
  return (
    <LanguageContext.Provider value={languageValue}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Header />
        <div className="containerAplication">
          <Router />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default Layout;
