const Filter = () => {
  return (
    <select className="h-12 min-w-[220px] rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100">

      <option>All Categories</option>
      <option>Food</option>
      <option>Shopping</option>
      <option>Travel</option>
      <option>Salary</option>
      <option>Bills</option>

    </select>
  );
};

export default Filter;