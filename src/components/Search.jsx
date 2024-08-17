import { Search as SearchImg } from "../assets";
import Close from "../assets";

const Search = ({
  searchQuery,
  handleChange,
  searchRestaurant,
  resetSearchQuery,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchRestaurant();
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative flex items-center flex-1">
        <input
          className="h-full flex-1 p-4 border border-solid border-black rounded-3xl focus:outline-none focus:border-orange-600"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          data-testid="search-input"
        />
        {searchQuery ? (
          <span
            className="h-6 absolute right-4 cursor-pointer"
            onClick={resetSearchQuery}
          >
            <Close height={20} width={20} />
          </span>
        ) : (
          <img className="h-6 absolute right-4" src={SearchImg} />
        )}
      </div>
      <button
        className="mx-4 rounded-lg bg-orange-600 text-white p-3 font-bold"
        onClick={searchRestaurant}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
