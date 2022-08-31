import React, { useState } from "react";
import ListSites from "components/listSites";
import ModalWrapper from "components/modal";
import Site from "components/modal/site";
import {
  useGetSitesQuery,
  usePostSiteMutation,
  usePutSiteMutation,
} from "api/apiSlice";

const List = () => {
  const [modalView, setModalView] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);
  const { data: sites = [] } = useGetSitesQuery({});
  const [postSite] = usePostSiteMutation();
  const [putSite] = usePutSiteMutation();

  const onCreate = async (data) => {
    const r = await postSite(data);
    console.log(r);
    setModalView(false);
  };

  const onEdit = async (data) => {
    const r = await putSite(data);
    console.log(r);
    setModalView(false);
  };

  return (
    <>
      <ListSites
        listSites={sites}
        onHandleEdit={(e) => {
          setModalChildren(<Site site={e} onClickEvent={onEdit} />);
          setModalView(true);
        }}
      />
      <br />
      <div
        onClick={() => {
          setModalChildren(<Site onClickEvent={onCreate} />);
          setModalView(true);
        }}
      >
        aqui has de click
      </div>
      <ModalWrapper open={modalView} onClose={() => setModalView(false)}>
        {modalChildren}
      </ModalWrapper>
    </>
  );
};

export default List;
