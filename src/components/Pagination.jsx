import React from "react";
import "./Pagination.scss";
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
