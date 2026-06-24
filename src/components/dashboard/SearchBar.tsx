import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">

      <HiOutlineSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search transactions..."
        className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

    </div>
  );
};

export default SearchBar;