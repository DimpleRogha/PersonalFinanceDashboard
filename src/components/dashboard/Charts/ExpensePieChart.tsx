import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { transactions } from "../../../data/transactions";
import { getExpenseBreakdown } from "../../../utils/finance";
import { theme } from "../../../styles/theme";

const COLORS = [
  theme.colors.primary,
  theme.colors.success,
  theme.colors.warning,
  theme.colors.danger,
  "#8B5CF6",
];

const ExpensePieChart = () => {
     const chartData = getExpenseBreakdown(transactions);

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Expense Breakdown
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Spending by category
        </p>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            innerRadius={55}
            paddingAngle={3}
          >
            {chartData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;