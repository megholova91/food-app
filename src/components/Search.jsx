import { Search as SearchImg } from "../assets";

const Search = ({ searchQuery, handleChange, searchRestaurant }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchRestaurant();
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative flex items-center flex-1">
        <input
          className="h-full flex-1 p-4 border border-solid border-black"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          data-testid="search-input"
        />
        <img className="h-6 absolute right-2" src={SearchImg} />
      </div>
      <button
        className="border border-black bg-slate-300 rounded-lg p-3 mx-4"
        onClick={searchRestaurant}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
