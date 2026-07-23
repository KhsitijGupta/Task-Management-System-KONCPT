import { Users, ListTodo, Clock3, CircleCheckBig } from "lucide-react";

const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: "Total Users",
      value: stats?.totalUsers || 0,
      icon: <Users size={28} />,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Total Tasks",
      value: stats?.totalTasks || 0,
      icon: <ListTodo size={28} />,
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    {
      title: "Pending Tasks",
      value: stats?.pendingTasks || 0,
      icon: <Clock3 size={28} />,
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      title: "Completed Tasks",
      value: stats?.completedTasks || 0,
      icon: <CircleCheckBig size={28} />,
      bg: "bg-green-100",
      text: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>

              <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
            </div>

            <div className={`${card.bg} ${card.text} p-3 rounded-full`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
