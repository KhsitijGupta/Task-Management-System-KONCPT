import { CalendarDays, Flag, X } from "lucide-react";

const TaskDetailsModal = ({ open, task, onClose }) => {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-y-scroll h-[90vh]">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-2xl font-bold">Task Details</h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">{task.title}</h3>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Description</h4>
            <p className="leading-7 text-slate-600">
              {task.description || "No description"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Priority</p>
              <div className="mt-2 flex items-center gap-2">
                <Flag size={18} />
                {task.priority}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-2">{task.status}</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 col-span-2">
              <p className="text-sm text-slate-500">Due Date</p>

              <div className="mt-2 flex items-center gap-2">
                <CalendarDays size={18} />
                {new Date(task.dueDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
