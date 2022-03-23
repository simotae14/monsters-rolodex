import React from 'react';
import './search-box.styles.css';
const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}) => {
  return (
    <input
      onChange={onChangeHandler}
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
    />
  );
}

export default SearchBox;
