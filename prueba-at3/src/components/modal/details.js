import "./details.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import Button from "@mui/material/Button";

const Details = ({ site = null, closeModal }) => (
  <div>
    <h2>
      <FormattedMessage id="details" defaultMessage="Detalles" />
    </h2>
    <div className="column2">
      <div className="label semi">
        <FormattedMessage id="name" defaultMessage="Name" />
        <span>{site.name}</span>
      </div>
      <div className="label semi">
        <FormattedMessage id="key" defaultMessage="Key" />
        <span>{site.key}</span>
      </div>
    </div>
    <div className="column2">
      <div className="label semi">
        <FormattedMessage id="Site" defaultMessage="Site" />
        <span>{site.site}</span>
      </div>
      <div className="label semi">
        <FormattedMessage id="cretateDate" defaultMessage="Cretate Date" />
        <span>{new Date(site.createDate).toLocaleDateString()}</span>
      </div>
    </div>
    <div className="column">
      <div className="label">
        <FormattedMessage id="description" defaultMessage="Public Path" />
        <span>{site.description}</span>
      </div>
    </div>
    <div className="column">
      <div className="label">
        <FormattedMessage id="path" defaultMessage="Public Path" />
        <span>{site.path}</span>
      </div>
    </div>
    <div className="column">
      <div className="label">
        <FormattedMessage id="publicPath" defaultMessage="Public Path" />
        <span>{site.publicPath}</span>
      </div>
    </div>

    <div className="button">
      <Button variant="outlined" onClick={() => closeModal()}>
        Cancelar
      </Button>
    </div>
  </div>
);

export default Details;
