import React, { useState } from "react";
import ListSites from "components/listSites";
import ModalWrapper from "components/modal";
import Site from "components/modal/site";
import Details from "components/modal/details";
import { isNotError } from "utils/error";
import { toast } from "react-toastify";
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
    if (isNotError(r)) {
      toast.success("Create successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }
    setModalView(false);
  };

  const onEdit = async (data) => {
    const r = await putSite(data);
    if (isNotError(r)) {
      toast.success("Edit successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }
    setModalView(false);
  };

  const onHandleEdit = (e) => {
    setModalChildren(
      <Site
        site={e}
        onClickEvent={onEdit}
        closeModal={() => setModalView(false)}
        title="Editar"
      />
    );
    setModalView(true);
  };

  const onHandleCreate = () => {
    setModalChildren(
      <Site
        onClickEvent={onCreate}
        closeModal={() => setModalView(false)}
        title="Creacion"
      />
    );
    setModalView(true);
  };

  const onHandleDetails = (e) => {
    setModalChildren(
      <Details site={e} closeModal={() => setModalView(false)} />
    );
    setModalView(true);
  };

  return (
    <>
      <ListSites
        listSites={sites}
        onHandleEdit={(e) => onHandleEdit(e)}
        onHandleCreate={() => onHandleCreate()}
        onHandleDetails={(e) => onHandleDetails(e)}
      />
      <ModalWrapper open={modalView} onClose={() => setModalView(false)}>
        {modalChildren}
      </ModalWrapper>
    </>
  );
};

export default List;
