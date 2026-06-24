const transactions = [
  {
    id: 1,
    date: "22 Jun",
    description: "Starbucks",
    category: "Food",
    amount: "₹450",
  },
  {
    id: 2,
    date: "21 Jun",
    description: "Amazon",
    category: "Shopping",
    amount: "₹2400",
  },
];

const TransactionTable = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Transactions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left">Date</th>
            <th className="text-left">Description</th>
            <th className="text-left">Category</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="py-4">{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td className="text-right">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;