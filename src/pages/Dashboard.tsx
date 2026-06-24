import KPICard from "../components/dashboard/KPICard";
import Filter from "../components/dashboard/Filter"; 
import IncomeExpenseChart from "../components/dashboard/Charts/IncomeExpenseChart";
import TransactionTable from "../components/dashboard/TransactionTable";

import {
    FaWallet, 
    FaMoneyBillWave,
    FaPiggyBank,
    FaBullseye,
} from "react-icons/fa";
import SearchBar from "../components/dashboard/SearchBar";

const Dashboard = () => {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

        <div className="mb-8 flex items-center justify-between">
            <SearchBar />
            <Filter />
        </div>

        <div className="mb-8">
            <IncomeExpenseChart />
        </div>

        <TransactionTable />


      </div>
    </>
  );
};

export default Dashboard;