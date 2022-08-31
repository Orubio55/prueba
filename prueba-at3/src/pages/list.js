import React, { useState } from "react";
import ListSites from "components/listSites";
import ModalWrapper from "components/modal";
import Site from "components/modal/site";
import { useGetSitesQuery, usePostSiteMutation } from "api/apiSlice";

const List = () => {
  const [modalView, setModalView] = useState(false);
  const { data: sites = [] } = useGetSitesQuery({});
  const [postSite] = usePostSiteMutation();

  const onCreate = async (data) => {
    const r = await postSite(data);
    console.log(r);
    setModalView(false);
  };

  return (
    <>
      <ListSites listSites={sites} />
      <br />
      <div onClick={() => setModalView(true)}>aqui has de click</div>
      <ModalWrapper open={modalView} onClose={() => setModalView(false)}>
        <Site onClickEvent={onCreate} />
      </ModalWrapper>
    </>
  );
};

export default List;
