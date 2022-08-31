import "./listSites.scss";
import React from "react";
// import Pagination from "common/components/pagination";
import CardItem from "./cardItem";

const ListSites = React.memo(({ listSites }) => {
  console.log("in");
  return (
    <>
      <div className="cards_wrap">
        {listSites.map((e, index) => (
          <CardItem data={e} key={index} />
        ))}
      </div>
      {/* <Pagination data={listProducts} countPage={8} changeList={setList} /> */}
    </>
  );
});

export default ListSites;
