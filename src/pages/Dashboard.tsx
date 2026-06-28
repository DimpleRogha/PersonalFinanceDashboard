import { useState } from "react";

import KPICard from "../components/dashboard/KPICard";
import SearchBar from "../components/dashboard/SearchBar";
import Filter from "../components/dashboard/Filter";

import IncomeExpenseChart from "../components/dashboard/Charts/IncomeExpenseChart";
import ExpensePieChart from "../components/dashboard/Charts/ExpensePieChart";
import MonthlyExpenseChart from "../components/dashboard/Charts/MonthlyExpenseChart";
import TransactionTable from "../components/dashboard/TransactionTable";

import { transactions } from "../data/transactions";


import {
  calculateIncome,
  calculateExpenses,
  calculateSavings,
  getIncome,
  getExpenses,
  getMonthTransaction,
  percentageChange,
} from "../utils/finance";

import {
  FaWallet,
  FaMoneyBillWave,
  FaPiggyBank,
  FaBullseye,
} from "react-icons/fa";

const Dashboard = () => {
    const currentMonth = 5;
    const previousMonth = 4;
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearch =
        transaction.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
        transaction.category
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesCategory =
        selectedCategory === "All" ||
        transaction.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });


  const currentTransactions = getMonthTransaction(
    transactions,
    currentMonth
  );

  const previousTransactions = getMonthTransaction(
    transactions,
    previousMonth
  );

  // Overall KPIs
  const income = calculateIncome(transactions);
  const expenses = calculateExpenses(transactions);
  const savings = calculateSavings(transactions);

  // Budget
  const budget = 100000;
  const budgetLeft = budget - expenses;

  // Monthly changes
  const incomeChange = percentageChange(
    getIncome(currentTransactions),
    getIncome(previousTransactions)
  );

  const expenseChange = percentageChange(
    getExpenses(currentTransactions),
    getExpenses(previousTransactions)
  );

  const savingsChange = percentageChange(
    calculateSavings(currentTransactions),
    calculateSavings(previousTransactions)
  );

  const budgetChange = percentageChange(
    budgetLeft,
    budget
  );

  return (
    <div className="space-y-8">

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <KPICard
          title="Total Income"
          value={income}
          change={incomeChange}
          positive={incomeChange >= 0}
          icon={<FaWallet />}
        />

        <KPICard
          title="Total Expenses"
          value={expenses}
          change={expenseChange}
          positive={expenseChange <= 0}
          icon={<FaMoneyBillWave />}
        />

        <KPICard
          title="Savings"
          value={savings}
          change={savingsChange}
          positive={savingsChange >= 0}
          icon={<FaPiggyBank />}
        />

        <KPICard
          title="Budget Left"
          value={budgetLeft}
          change={budgetChange}
          positive={budgetLeft > 0}
          icon={<FaBullseye />}
        />

      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />

        <Filter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />

      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">

        <IncomeExpenseChart />

        <ExpensePieChart />

      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">

        <MonthlyExpenseChart />

        <TransactionTable 
            transactions={filteredTransactions}
        />

      </div>

    </div>
  );
};

export default Dashboard;