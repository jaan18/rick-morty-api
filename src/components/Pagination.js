import React from "react";

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePreviousPage = () => {
    onPrevious();
  };

  const handleNextPage = () => {
    onNext();
  };

  return (
    <div className="container py-5">
      <nav>
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item">
              <button
                className="page-link"
                class="btn btn-lg btn-outline-success "
                onClick={handlePreviousPage}
              >
                Previous
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button
                className="page-link"
                class="btn btn-lg btn-outline-success "
                onClick={handleNextPage}
              >
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};
