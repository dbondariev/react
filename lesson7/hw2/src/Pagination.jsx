import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable =
    currentPage !== 1 ? (
      <button className="btn" onClick={goPrev}>
        ←
      </button>
    ) : (
      <button className="btn" onClick={goPrev} disabled={true}></button>
    );

  const isNextPageAvailable =
    totalItems / itemsPerPage > currentPage ? (
      <button className="btn" onClick={() => goNext()}>
        →
      </button>
    ) : (
      <button className="btn" onClick={() => goNext()} disabled={true}></button>
    );

  return (
    <div className="pagination">
      {isPrevPageAvailable}
      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvailable}
    </div>
  );
};

export default Pagination;
