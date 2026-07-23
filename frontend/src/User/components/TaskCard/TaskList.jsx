import EmptyState from "./EmptyState";
import TaskSkeleton from "../Loader/TaskSkeleton";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, loading, onView, onEdit, onDelete, onComplete }) => {
  if (loading) {
    return <TaskSkeleton />;
  }

  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 mt-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
