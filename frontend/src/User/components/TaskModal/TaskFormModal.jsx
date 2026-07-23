import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { createTask, updateTask } from "../../../Redux/features/task/taskSlice";

const TaskFormModal = ({ open, onClose, task }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.task);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate?.split("T")[0],
      });
    } else {
      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        status: "Pending",
        dueDate: "",
      });
    }
  }, [task]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!formData.title) {
      Swal.fire("Validation", "Title is required.", "warning");
      return false;
    }
    const alphabetCount = (formData.title.match(/[A-Za-z]/g) || []).length;

    if (alphabetCount < 4) {
      Swal.fire(
        "Validation",
        "Title must contain at least 4 alphabet letters.",
        "warning",
      );
      return false;
    }

    if (!formData.description.trim()) {
      Swal.fire("Validation", "Description is required.", "warning");

      return false;
    }
    if (formData.description.trim().length > 400) {
      Swal.fire(
        "Validation",
        "Description cannot be more than 400 characters.",
        "warning",
      );
      return false;
    }

    if (!formData.dueDate) {
      Swal.fire("Validation", "Due date is required.", "warning");
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(formData.dueDate);

    if (dueDate < today) {
      Swal.fire("Validation", "Due date cannot be in the past.", "warning");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (task) {
      await dispatch(
        updateTask({
          id: task._id,
          taskData: formData,
        }),
      );

      Swal.fire({
        icon: "success",
        title: "Task Updated",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      await dispatch(createTask(formData));

      Swal.fire({
        icon: "success",
        title: "Task Created",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl h-[90vh] overflow-y-scroll rounded-lg bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {task ? "Edit Task" : "Create New Task"}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the details below to manage your task.
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-red-100 hover:text-red-600"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="space-y-2 p-4">
          {/* Title */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write task description..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Priority + Status */}
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            {/* Due Date */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 border-t border-gray-100 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Saving..." : task ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskFormModal;
