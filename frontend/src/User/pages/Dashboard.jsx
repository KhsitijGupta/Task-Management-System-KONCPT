import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getTasks,
  setSearch,
  setStatus,
  setPriority,
  setSort,
  deleteTask,
  setPage,
  updateTaskStatus,
} from "../../Redux/features/task/taskSlice";

import { logout } from "../../Redux/features/auth/authSlice";
import { useState } from "react";
import TaskFormModal from "../components/TaskModal/TaskFormModal";
import Header from "../components/Dashboard/Header";
import StatsCards from "../components/Dashboard/StatsCards";
import Toolbar from "../components/Dashboard/Toolbar";
import TaskList from "../components/TaskCard/TaskList";
import TaskDetailsModal from "../components/TaskModal/TaskDetailsModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tasks, loading, filters, pagination } = useSelector(
    (state) => state.task,
  );
  const { user } = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [viewModalOpen, setViewModalOpen] = useState(false);
  //   const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    dispatch(getTasks());
  }, [
    dispatch,
    filters.search,
    filters.status,
    filters.priority,
    filters.sortBy,
    filters.order,
  ]);

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;
  const handleComplete = (id) => {
    dispatch(
      updateTaskStatus({
        id,
        status: "Completed",
      }),
    );
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Task?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask(id));

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Task deleted successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };
  const handleCreate = () => {
    setSelectedTask(null);
    setOpenModal(true);
  };
  const handleEdit = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };
  const handleView = (task) => {
    setSelectedTask(task);
    setViewModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header
        user={user}
        search={filters.search}
        setSearch={(value) => dispatch(setSearch(value))}
        onCreateTask={handleCreate}
      />
      {/* Main */}

      <main className="max-w-7xl mx-auto p-4">
        {/* Stats */}

        <StatsCards
          totalTasks={totalTasks}
          pendingTasks={pendingTasks}
          inProgressTasks={inProgressTasks}
          completedTasks={completedTasks}
        />

        {/* Toolbar */}

        <Toolbar
          filters={filters}
          setSearch={(value) => dispatch(setSearch(value))}
          setStatus={(value) => dispatch(setStatus(value))}
          setPriority={(value) => dispatch(setPriority(value))}
          setSort={(value) => dispatch(setSort(value))}
          onCreateTask={handleCreate}
        />

        {/* Task Section */}

        <TaskList
          tasks={tasks}
          loading={loading}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
        {/* Pagination Section */}

        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            disabled={pagination.page === 1}
            onClick={() => dispatch(setPage(pagination.page - 1))}
            className="px-4 py-2 rounded-lg border disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-medium">
            Page {pagination.page} of {pagination.totalPages || 1}
          </span>

          <button
            disabled={
              pagination.page === pagination.totalPages ||
              pagination.totalPages === 0
            }
            onClick={() => dispatch(setPage(pagination.page + 1))}
            className="px-4 py-2 rounded-lg border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
      <TaskFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        task={selectedTask}
      />
      <TaskDetailsModal
        open={viewModalOpen}
        task={selectedTask}
        onClose={() => {
          setViewModalOpen(false);
          setSelectedTask(null);
        }}
      />
    </div>
  );
};

export default Dashboard;
