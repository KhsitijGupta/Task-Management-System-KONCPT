import { Filter, Plus, Search, ArrowDownUp } from "lucide-react";

const Toolbar = ({
  filters,
  setSearch,
  setStatus,
  setPriority,
  setSort,
  onCreateTask,
}) => {
  return (
    <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        {/* Search */}
        <div className="relative w-full xl:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search task..."
            value={filters.search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Status */}
          <div className="relative">
            <Filter
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={filters.status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-8 text-sm outline-none transition hover:border-blue-400 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <select
            value={filters.priority}
            onChange={(e) => setPriority(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition hover:border-blue-400 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* Sort */}
          <div className="relative">
            <ArrowDownUp
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              onChange={(e) =>
                setSort({
                  sortBy: e.target.value,
                  order: "desc",
                })
              }
              className="rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-8 text-sm outline-none transition hover:border-blue-400 focus:ring-4 focus:ring-blue-100"
            >
              <option value="createdAt">Created Date</option>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={onCreateTask}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Plus size={18} />
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
