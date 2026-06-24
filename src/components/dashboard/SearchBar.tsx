import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="relative w-full md:w-96">
      <HiOutlineSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search transactions..."
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;