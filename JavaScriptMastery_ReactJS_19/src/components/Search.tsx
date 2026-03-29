import type { FC, SubmitEventHandler } from "react";

type SearchProps = {
  searchText: string;
  fnSearchTerm: (searchTerm: string) => void;
};

const Search: FC<SearchProps> = ({ searchText, fnSearchTerm }) => {
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div>
        <img src="search.svg" alt="Search" />

        <input
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => fnSearchTerm(e.currentTarget.value)}
          aria-label="Search movies"
        />
      </div>
    </form>
  );
};

export default Search;
