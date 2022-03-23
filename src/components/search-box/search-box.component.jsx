import React, { Component } from 'react';
import './search-box.styles.css';
class SearchBox extends Component {
  render() {
    const {
      onChangeHandler,
      className,
      placeholder,
    } = this.props;
    return (
      <input
        onChange={onChangeHandler}
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
      />
    )
  };
}

export default SearchBox;
