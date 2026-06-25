import type { Transaction } from "../types/transaction";

export const calculateIncome = (
  transactions: Transaction[]
) => {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateExpenses = (
  transactions: Transaction[]
) => {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateSavings = (
  transactions: Transaction[]
) => {
  return (
    calculateIncome(transactions) -
    calculateExpenses(transactions)
  );
};

export const getMonthTransaction = (
    transactions: Transaction[],
    month: number 
) => {
    return transactions.filter(
        (transaction) => 
            new Date(transaction.date).getMonth() === month
    );
}

export const getIncome = (transactions: Transaction[]) =>
  transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

export const getExpenses = (transactions: Transaction[]) =>
  transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

export const percentageChange = (
  current: number,
  previous: number
) => {
  if (previous === 0) return 100;

  return Number(
    (((current - previous) / previous) * 100).toFixed(1)
  );
};

export const getIncomeExpenseChartData = (transactions: Transaction[]) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return months.map((month, index) => {
    const monthTransactions = transactions.filter(
      (transaction) =>
        new Date(transaction.date).getMonth() === index
    );

    return {
      month,
      income: getIncome(monthTransactions),
      expense: getExpenses(monthTransactions),
    };
  });
};

export const getExpenseBreakdown = (transactions: Transaction[]) => {
  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const categories: Record<string, number> = {};

  expenses.forEach((transaction) => {
    categories[transaction.category] =
      (categories[transaction.category] || 0) +
      transaction.amount;
  });

  return Object.entries(categories).map(([name, value]) => ({
    name,
    value,
  }));
};

export const getMonthlySpending = (transactions: Transaction[]) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return months.map((month, index) => {
    const monthTransactions = transactions.filter(
      (transaction) =>
        transaction.type === "expense" &&
        new Date(transaction.date).getMonth() === index
    );

    return {
      month,
      spending: getExpenses(monthTransactions),
    };
  });
};