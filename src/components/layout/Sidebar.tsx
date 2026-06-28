import {
  HiOutlineHome,
  HiOutlineCreditCard,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const Sidebar = () => {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">

      <div className="border-b border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          FinSight
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Personal Finance
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">

        <button className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-600 transition hover:bg-blue-100">
          <HiOutlineHome size={22} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100">
          <HiOutlineCreditCard size={22} />
          Transactions
        </button>

        {/* <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100">
          <HiOutlineChartBar size={22} />
          Analytics
        </button> */}

        <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100">
          <HiOutlineCog6Tooth size={22} />
          Settings
        </button>

      </nav>

    </aside>
  );
};

export default Sidebar;