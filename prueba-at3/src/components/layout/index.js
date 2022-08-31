import React, { useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
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
        <ToastContainer toastStyle={{ fontFamily: "NotoSans-Regular" }} />{" "}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default Layout;
