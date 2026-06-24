const Filter = () => {
  return (
    <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none">
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