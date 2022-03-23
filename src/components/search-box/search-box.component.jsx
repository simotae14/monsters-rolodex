import React, { Component } from 'react';

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
        className={className}
        type='search'
        placeholder={placeholder}
      />
    )
  };
}

export default SearchBox;
