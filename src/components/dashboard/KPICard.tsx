import type { ReactNode } from "react";

interface KPICardProps {
  title: string;
  value: number;
  change: number;
  positive: boolean;
  icon: ReactNode;
}

const KPICard = ({
  title,
  value,
  change,
  positive,
  icon,
}: KPICardProps) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-800">
            ₹{value.toLocaleString("en-IN")}
          </h2>

          <div
            className={`mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              positive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {positive ? "▲" : "▼"} {Math.abs(change).toFixed(1)}% this month
          </div>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

      </div>
    </div>
  );
};

export default KPICard;