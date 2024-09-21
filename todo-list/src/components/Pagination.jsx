import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
  goToFirstPage,
  goToLastPage,
}) => {
  return (
    <div className="pagination-container">
      <button
        className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={goToFirstPage}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        {"<"} Prev
      </button>
      {[...Array(totalPages).keys()].map((number) => (
        <button
          key={number + 1}
          onClick={() => paginate(number + 1)}
          className={`pagination-btn ${
            currentPage === number + 1 ? "active" : ""
          }`}
        >
          {number + 1}
        </button>
      ))}
      <button
        className={`pagination-btn ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next {">"}
      </button>
      <button
        className={`pagination-btn ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={goToLastPage}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
