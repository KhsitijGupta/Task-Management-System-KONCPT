import { useMemo, useState } from "react";
import { Search, Trash2, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import {
  deleteTaskAdmin,
  getAllTasks,
} from "../../../Redux/features/admin/adminSlice";

import { updateTaskStatus } from "../../../Redux/features/task/taskSlice";

const TaskTable = ({ tasks = [], loading }) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.user?.name?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter ? task.status === statusFilter : true;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, search, statusFilter]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Task?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTaskAdmin(id));
      }
    });
  };

  const handleComplete = async (id) => {
    await dispatch(
      updateTaskStatus({
        id,
        status: "Completed",
      }),
    );

    dispatch(getAllTasks());
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        Loading Tasks...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow">
      {/* Header */}

      <div className="p-5 border-b flex flex-col md:flex-row gap-4 justify-between">
        <h2 className="text-xl font-semibold">Tasks</h2>

        <div className="flex gap-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg pl-10 pr-4 py-2"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Title</th>

              <th className="px-6 py-3 text-left">User</th>

              <th className="px-6 py-3 text-center">Priority</th>

              <th className="px-6 py-3 text-center">Status</th>

              <th className="px-6 py-3 text-center">Due Date</th>

              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10">
                  No Tasks Found
                </td>
              </tr>
            ) : (
              filteredTasks.map((task) => (
                <tr key={task._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{task.title}</td>

                  <td className="px-6 py-4">{task.user?.name || "-"}</td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : task.status === "In Progress"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      {task.status !== "Completed" && (
                        <button
                          onClick={() => handleComplete(task._id)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <CheckCircle size={20} />
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(task._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
