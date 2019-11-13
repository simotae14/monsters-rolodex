import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleOnChange}) => {
  return (
    <input className="search" type='search' placeholder={placeholder} onChange={handleOnChange} />
  );
};
