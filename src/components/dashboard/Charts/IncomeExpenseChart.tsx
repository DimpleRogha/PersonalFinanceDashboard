import { incomeExpenseData } from "../../../data/incomeExpenseData";
import { theme } from "../../../styles/theme";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const IncomeExpenseChart = () => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Income vs Expenses
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly comparison
        </p>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={incomeExpenseData}>
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

          <Line
            type="monotone"
            dataKey="income"
            stroke={theme.colors.success}
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke={theme.colors.danger}
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;