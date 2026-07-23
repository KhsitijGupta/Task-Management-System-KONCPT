import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDashboardStats,
  getAllUsers,
  getAllTasks,
  setSelectedTab,
} from "../../Redux/features/admin/adminSlice";

import Header from "../Components/Header/Header";
import StatsCards from "../Components/StatsCards/StatsCards";
import UsersTable from "../Components/UserTable/UserTable";
import TasksTable from "../Components/TaskTable/TaskTable";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { dashboard, users, tasks, loading, selectedTab } = useSelector(
    (state) => state.admin,
  );

  useEffect(() => {
    dispatch(getDashboardStats());
    dispatch(getAllUsers());
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto p-2">
        <div className="my-2 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <button
            onClick={() => dispatch(setSelectedTab("dashboard"))}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              selectedTab === "dashboard"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => dispatch(setSelectedTab("users"))}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              selectedTab === "users"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Users
          </button>

          <button
            onClick={() => dispatch(setSelectedTab("tasks"))}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              selectedTab === "tasks"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Tasks
          </button>
        </div>

        {selectedTab === "dashboard" && <StatsCards stats={dashboard} />}

        {selectedTab === "users" && <UsersTable users={users} />}

        {selectedTab === "tasks" && <TasksTable tasks={tasks} />}
      </main>
    </div>
  );
};

export default AdminDashboard;
