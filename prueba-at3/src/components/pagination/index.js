import "./pagination.scss";
import React, { useState, useMemo, useEffect } from "react";
import { totalPageFunc } from "utils/pagination";

const Pagination = React.memo(({ data, countPage, changeList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const numbers = useMemo(() => {
    const totalPage = totalPageFunc(data.length, countPage);
    let arrayNumbers = [];
    if (currentPage === 1) {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= 3; i++) {
        if (i <= totalPage) {
          arrayNumbers.push(i);
        }
      }
    } else if (currentPage === totalPage) {
      // eslint-disable-next-line no-plusplus
      for (let i = totalPage; i >= totalPage - 2; i--) {
        if (i > 0) {
          arrayNumbers.push(i);
        }
      }
      arrayNumbers.reverse();
    } else {
      arrayNumbers = [currentPage - 1, currentPage, currentPage + 1];
    }

    return arrayNumbers;
  }, [countPage, currentPage, data.length]);

  useEffect(() => {
    const listFinal = currentPage * countPage;
    changeList(data.slice(listFinal - countPage, listFinal));
  }, [changeList, countPage, currentPage, data]);

  return (
    <div className="paginationBox">
      {currentPage !== 1 ? (
        <span
          className="pagination-element"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &laquo;
        </span>
      ) : null}
      {numbers.map((number) => (
        <span
          className={`pagination-element ${
            number === currentPage ? "active" : ""
          } `}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </span>
      ))}
      {currentPage !== totalPageFunc(data.length, countPage) ? (
        <span
          className="pagination-element"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &raquo;
        </span>
      ) : null}
    </div>
  );
});

export default Pagination;
