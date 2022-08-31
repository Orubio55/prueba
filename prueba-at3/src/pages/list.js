import React from "react";
import { useGetSitesQuery, usePostSiteMutation } from "api/apiSlice";

const List = () => {
  const { data: sites = [] } = useGetSitesQuery({});
  const [postSite] = usePostSiteMutation();

  const onHna = async () => {
    const r = await postSite({
      description: "jdh",
      path: "hht",
      publicPath: "publicPath",
      key: "key",
      name: "dfed",
    });
    console.log(r);
  };

  return (
    <>
      <div>{sites.map((e) => e.name)}</div>
      <br />
      <div onClick={() => onHna()}>aqui has de click</div>
    </>
  );
};

export default List;
