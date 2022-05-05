import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: SearchBoxProps) => {
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
