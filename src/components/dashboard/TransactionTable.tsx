import type { Transaction } from "../../types/transaction";

interface TransactionTableProps {
    transactions: Transaction[];
}

const TransactionTable = ({
    transactions,
}: TransactionTableProps) => {
    console.log("transactions: transactions");

    const recentTransactions = [...transactions]
        .sort(
        (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 5);
    return (
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-800">
            Recent Transactions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
            Your latest financial activity
            </p>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full table-auto">
                <thead>
                    <tr className="border-b border-slate-200 text-sm text-slate-500">
                    <th className="py-4 text-left font-medium">Date</th>
                    <th className="text-left font-medium">Description</th>
                    <th className="text-left font-medium">Category</th>
                    <th className="text-right font-medium">Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {recentTransactions.length > 0 ? (
                        recentTransactions.map((transaction) => (
                        <tr
                            key={transaction.id}
                            className="border-b border-slate-100 transition hover:bg-slate-50"
                        >
                            <td className="py-5 text-slate-600">
                            {new Date(transaction.date).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                            </td>

                            <td className="font-medium text-slate-800">
                            {transaction.description}
                            </td>

                            <td>
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                {transaction.category}
                            </span>
                            </td>

                            <td
                            className={`text-right font-semibold ${
                                transaction.type === "income"
                                ? "text-green-600"
                                : "text-red-500"
                            }`}
                            >
                            {transaction.type === "income" ? "+" : "-"} ₹
                            {transaction.amount.toLocaleString("en-IN")}
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td
                            colSpan={4}
                            className="py-10 text-center text-slate-500"
                        >
                            No transactions found.
                        </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default TransactionTable;