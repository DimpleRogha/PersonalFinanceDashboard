interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({
  selectedCategory,
  setSelectedCategory,
}: FilterProps) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="h-12 min-w-[220px] rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    >
      <option value="All">All Categories</option>
      <option value="Food">Food</option>
      <option value="Shopping">Shopping</option>
      <option value="Travel">Travel</option>
      <option value="Salary">Salary</option>
      <option value="Bills">Bills</option>
      <option value="Rent">Rent</option>
    </select>
  );
};

export default Filter;