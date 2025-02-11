

const Search = () => {
  return (
    <div className="mb-7 w-full flex justify-center">
      <form action="" onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-md bg-gray-800 rounded-2xl shadow-md px-4 py-2">
        <input
          className="flex-1 px-3 py-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none" type="search"
            placeholder="Search..."
        />
        <button type="submit" className="ml-2 text-white">
        <i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  );
};

export default Search;
