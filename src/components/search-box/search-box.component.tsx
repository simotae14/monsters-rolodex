import './search-box.styles.css';

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
};

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void
}

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: ISearchBoxProps) => {
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
const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
  return true;
}
