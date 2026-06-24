import type { ReactNode } from "react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-slate-500">{title}</h3>

        <div className="text-2xl text-blue-600">
          {icon}
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-slate-800">
        {value}
      </h2>

      <p
        className={`mt-2 text-sm font-medium ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </p>
    </div>
  );
};

export default KPICard;