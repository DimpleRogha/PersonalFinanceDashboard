import type { Transaction } from "../types/transaction";

export const transactions: Transaction[] = [
  // May
  {
    id: 1,
    date: "2026-05-05",
    description: "Salary",
    category: "Salary",
    amount: 60000,
    type: "income",
  },
  {
    id: 2,
    date: "2026-05-08",
    description: "Rent",
    category: "Rent",
    amount: 18000,
    type: "expense",
  },
  {
    id: 3,
    date: "2026-05-15",
    description: "Amazon",
    category: "Shopping",
    amount: 3200,
    type: "expense",
  },

  // June
  {
    id: 4,
    date: "2026-06-03",
    description: "Salary",
    category: "Salary",
    amount: 65000,
    type: "income",
  },
  {
    id: 5,
    date: "2026-06-10",
    description: "Starbucks",
    category: "Food",
    amount: 450,
    type: "expense",
  },
  {
    id: 6,
    date: "2026-06-14",
    description: "Uber",
    category: "Travel",
    amount: 680,
    type: "expense",
  },
  {
    id: 7,
    date: "2026-06-18",
    description: "Electricity Bill",
    category: "Bills",
    amount: 3100,
    type: "expense",
  },
];