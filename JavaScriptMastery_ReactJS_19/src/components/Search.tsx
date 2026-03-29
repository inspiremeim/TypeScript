type SearchProps = {
  searchText: string;
  fnSearchTerm: (searchTerm: string) => void;
};

const Search = ({ searchText, fnSearchTerm }: SearchProps) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />

        <input
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => fnSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
