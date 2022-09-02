import React from "react";
import { FormattedMessage } from "react-intl";
import "./error.scss";

const ErrorPage = React.memo(() => (
  <section>
    <header>
      <h1>404</h1>
      <h1>
        <FormattedMessage id="error" defaultMessage="Not found" />
      </h1>
    </header>
  </section>
));

export default ErrorPage;
