import "./site.scss";
import React, { useState } from "react";
import SimpleInput from "components/inputs/simpleInput";
import { isComplete, isNotEmpty } from "utils/validations";
import Button from "@mui/material/Button";

const Site = ({ site = null, onClickEvent, closeModal, title }) => {
  const [data, setData] = useState(site);

  return (
    <div>
      <h2>{title}</h2>
      <div className="column2">
        <SimpleInput
          type="text"
          label="Name"
          classFieldName="semi"
          value={data?.name}
          validation={(value) => isNotEmpty(value)}
          onChange={(value) =>
            setData({
              ...data,
              name: value,
            })
          }
        />
        <SimpleInput
          type="text"
          label="Key"
          classFieldName="semi"
          value={data?.key}
          validation={(value) => isNotEmpty(value)}
          onChange={(value) =>
            setData({
              ...data,
              key: value,
            })
          }
        />
      </div>
      <div className="column">
        <SimpleInput
          type="text"
          classFieldName="full"
          classInputName="full"
          label="Description"
          value={data?.description}
          validation={(value) => isNotEmpty(value)}
          onChange={(value) =>
            setData({
              ...data,
              description: value,
            })
          }
        />
        <SimpleInput
          type="text"
          classFieldName="full"
          classInputName="full"
          label="Path"
          value={data?.path}
          validation={(value) => isNotEmpty(value)}
          onChange={(value) =>
            setData({
              ...data,
              path: value,
            })
          }
        />
        <SimpleInput
          type="text"
          classFieldName="full"
          classInputName="full"
          label="Public Path"
          value={data?.publicPath}
          validation={(value) => isNotEmpty(value)}
          onChange={(value) =>
            setData({
              ...data,
              publicPath: value,
            })
          }
        />
      </div>

      <div className="buttons">
        <Button variant="outlined" onClick={() => closeModal()}>
          Cancelar
        </Button>
        <Button
          disabled={!isComplete(data)}
          variant="contained"
          onClick={() => onClickEvent(data)}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default Site;
