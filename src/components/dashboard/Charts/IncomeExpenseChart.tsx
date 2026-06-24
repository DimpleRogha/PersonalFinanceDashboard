import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", income: 50000, expense: 35000 },
  { month: "Feb", income: 60000, expense: 42000 },
  { month: "Mar", income: 55000, expense: 39000 },
  { month: "Apr", income: 70000, expense: 48000 },
];

const IncomeExpenseChart = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Income vs Expenses
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line dataKey="income" />

          <Line dataKey="expense" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;