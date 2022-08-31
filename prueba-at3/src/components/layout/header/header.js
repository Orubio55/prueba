import "./header.scss";
import React, { useContext } from "react";
import LanguageContext from "context/language";

const Header = React.memo(() => {
  const { locale, setLocale } = useContext(LanguageContext);
  return (
    <div className="header">
      <nav className="nav">
        <div className="boxlogotitle">
          <div className="title">App Sites</div>
        </div>

        <div className="language">
          <span
            onClick={() => setLocale("en")}
            className={locale === "en" ? "active" : ""}
          >
            en
          </span>
          <span
            onClick={() => setLocale("es")}
            className={locale === "es" ? "active" : ""}
          >
            es
          </span>
        </div>
      </nav>
    </div>
  );
});

export default Header;
