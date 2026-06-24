import KPICard from "../components/dashboard/KPICard";
import SearchBar from "../components/dashboard/SearchBar";
import Filter from "../components/dashboard/Filter";

import IncomeExpenseChart from "../components/dashboard/Charts/IncomeExpenseChart";
import ExpensePieChart from "../components/dashboard/Charts/ExpensePieChart";
import MonthlyExpenseChart from "../components/dashboard/Charts/MonthlyExpenseChart";

import TransactionTable from "../components/dashboard/TransactionTable";

import {
  FaWallet,
  FaMoneyBillWave,
  FaPiggyBank,
  FaBullseye,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* <h1 className="text-3xl font-bold text-slate-800">
        Dashboard
      </h1> */}

      {/* KPI Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <KPICard
          title="Total Income"
          value="₹85,000"
          change="+12%"
          positive={true}
          icon={<FaWallet />}
        />

        <KPICard
          title="Expenses"
          value="₹52,300"
          change="-5%"
          positive={false}
          icon={<FaMoneyBillWave />}
        />

        <KPICard
          title="Savings"
          value="₹32,700"
          change="+18%"
          positive={true}
          icon={<FaPiggyBank />}
        />

        <KPICard
          title="Budget Left"
          value="₹7,700"
          change="+4%"
          positive={true}
          icon={<FaBullseye />}
        />

      </div>

      {/* Search */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <SearchBar />

        <Filter />

      </div>

      {/* Charts */}

      <div className="grid gap-6 lg:grid-cols-2">

        <IncomeExpenseChart />

        <ExpensePieChart />

      </div>

      {/* Bottom Section */}

      <div className="grid gap-6 lg:grid-cols-2">

        <MonthlyExpenseChart />

        <TransactionTable />

      </div>

    </div>
  );
};

export default Dashboard;