import "./listSites.scss";
import React from "react";
// import Pagination from "common/components/pagination";
import CardItem from "./cardItem";

const ListSites = React.memo(
  ({ listSites, onHandleEdit, onHandleCreate, onHandleDetails }) => (
    <>
      <div className="cards_wrap">
        {listSites.map((e, index) => (
          <CardItem
            data={e}
            key={index}
            onEdit={() => onHandleEdit(e)}
            onDetails={() => onHandleDetails(e)}
          />
        ))}
      </div>
      <div onClick={() => onHandleCreate()} className="newSite">
        <span className="plus">
          <i className="fas fa-plus" />
        </span>
      </div>
      {/* <Pagination data={listProducts} countPage={8} changeList={setList} /> */}
    </>
  )
);

export default ListSites;
