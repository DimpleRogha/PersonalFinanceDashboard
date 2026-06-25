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