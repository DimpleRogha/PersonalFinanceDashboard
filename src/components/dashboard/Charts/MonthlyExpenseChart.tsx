import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { monthlySpendingData } from "../../../data/monthlySpendingData";
import { theme } from "../../../styles/theme";

const MonthlyExpenseChart = () => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Monthly Spending
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Total monthly expenses
        </p>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={monthlySpendingData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E8F0"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="spending"
            fill={theme.colors.primary}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyExpenseChart;