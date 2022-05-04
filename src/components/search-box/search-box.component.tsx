import './search-box.styles.css';

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
};

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: string) => void;
};

type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type ItalianAddress = {
  street: string;
  region: string;
}

type Address = CanadianAddress | USAddress | ItalianAddress;

const Address: Address = {
  street: 'adas',
  region: 'adasd',
  state: 'ciao'
};

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: SearchBoxProps) => {
  return (
    <input
      onChange={(e) => onChangeHandler(e)}
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
