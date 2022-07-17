import React from 'react';

const BookMark = ({ status, ...rest }) => {
  return (
    <button
      type="button"
      className="btn btn-light mx-auto"
      onClick={() => rest.onChange()}
    >
      <i
        className={!status ? 'bi bi-bookmark' : 'bi bi-bookmark-star-fill'}
      ></i>
    </button>
  );
};

export default BookMark;
