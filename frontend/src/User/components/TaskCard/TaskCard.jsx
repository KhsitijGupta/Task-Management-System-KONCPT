import {
  CalendarDays,
  CheckCircle2,
  Edit2,
  Eye,
  Flag,
  Trash2,
} from "lucide-react";

const priorityColors = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const statusColors = {
  Pending: "bg-orange-100 text-orange-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Completed: "bg-green-100 text-green-600",
};

const   TaskCard = ({ task, onView, onEdit, onDelete, onComplete }) => {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">{task.title}</h2>

          <p className="mt-2 h-[72px] overflow-hidden text-sm leading-6 text-slate-500">
            {task.description || "No description available"}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Info */}

      <div className="mt-6 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusColors[task.status]
          }`}
        >
          {task.status}
        </span>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={16} />

          {new Date(task.dueDate).toLocaleDateString()}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <Flag size={16} />
        {task.priority} Priority
      </div>

      {/* Footer */}

      <div className="mt-7 flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => onView(task)}
            className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 py-3 text-slate-700 transition hover:bg-slate-700 hover:text-white"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() => onEdit(task)}
            className="flex items-center justify-center rounded-xl border border-blue-200 bg-blue-50 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <Edit2 size={18} />
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="flex items-center justify-center rounded-xl border border-red-200 bg-red-50 py-3 text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            <Trash2 size={18} />
          </button>
        </div>
        {task.status !== "Completed" && (
          <button
            onClick={() => onComplete(task._id)}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-1.5 font-medium text-white transition hover:bg-green-700"
          >
            <CheckCircle2 size={18} />
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
