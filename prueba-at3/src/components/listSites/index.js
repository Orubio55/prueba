import "./listSites.scss";
import React, { useState } from "react";
import Pagination from "components/pagination";
import CardItem from "./cardItem";

const ListSites = React.memo(
  ({ listSites, onHandleEdit, onHandleCreate, onHandleDetails }) => {
    const [list, setList] = useState([]);

    return (
      <>
        <div className="cards_wrap">
          {list.map((e, index) => (
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
        <Pagination data={listSites} countPage={16} changeList={setList} />
      </>
    );
  }
);

export default ListSites;
