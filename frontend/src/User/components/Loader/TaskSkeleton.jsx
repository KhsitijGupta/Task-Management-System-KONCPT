const TaskSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-3xl bg-white p-6 shadow"
        >
          <div className="h-6 w-1/2 rounded bg-slate-200" />

          <div className="mt-5 h-4 rounded bg-slate-200" />

          <div className="mt-3 h-4 w-4/5 rounded bg-slate-200" />

          <div className="mt-10 h-10 rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
};

export default TaskSkeleton;
