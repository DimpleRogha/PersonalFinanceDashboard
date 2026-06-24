import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      <div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-full bg-slate-100 p-3 transition hover:bg-slate-200">
          <HiOutlineMagnifyingGlass size={20} />
        </button>

        <button className="rounded-full bg-slate-100 p-3 transition hover:bg-slate-200">
          <HiOutlineBell size={20} />
        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
            D
          </div>

          <div className="hidden md:block">
            <p className="font-semibold">
              Dimple
            </p>

            <p className="text-sm text-slate-500">
              Student
            </p>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;