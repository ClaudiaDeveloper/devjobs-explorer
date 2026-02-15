function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por título..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-400"
    />
  );
}

export default SearchBar;
