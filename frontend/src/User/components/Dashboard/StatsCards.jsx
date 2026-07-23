import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  LoaderCircle,
} from "lucide-react";

const StatsCards = ({
  totalTasks,
  pendingTasks,
  inProgressTasks,
  completedTasks,
}) => {
  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: ClipboardList,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-500",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: Clock3,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      border: "border-yellow-500",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      icon: LoaderCircle,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      border: "border-indigo-500",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: CheckCircle2,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      border: "border-green-500",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`group rounded-3xl border-l-4 ${item.border} bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-800">
                  {item.value}
                </h2>

              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                <Icon
                  className={`${item.iconColor} transition duration-300 group-hover:scale-110`}
                  size={20}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;