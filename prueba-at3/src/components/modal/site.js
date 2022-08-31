import "./site.scss";
import React, { useState } from "react";
import SimpleInput from "components/inputs/simpleInput";

const Site = ({ site = null, onClickEvent }) => {
  const [data, setData] = useState(site);
  console.log(data);

  return (
    <div>
      <div className="column2">
        <SimpleInput
          type="text"
          label="Name"
          classFieldName="semi"
          value={data?.name}
          validation={(value) =>
            value !== null && value !== "" && value !== undefined
          }
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
          validation={(value) =>
            value !== null && value !== "" && value !== undefined
          }
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
          validation={(value) =>
            value !== null && value !== "" && value !== undefined
          }
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
          validation={(value) =>
            value !== null && value !== "" && value !== undefined
          }
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
          validation={(value) =>
            value !== null && value !== "" && value !== undefined
          }
          onChange={(value) =>
            setData({
              ...data,
              publicPath: value,
            })
          }
        />
      </div>

      <div>
        <button type="button" onClick={() => onClickEvent(data)}>
          crear
        </button>
      </div>
    </div>
  );
};

export default Site;
