import { ClipboardX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">

      <ClipboardX
        size={70}
        className="mx-auto text-slate-300"
      />

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        No Tasks Found
      </h2>

      <p className="mt-2 text-slate-500">
        Create your first task to get started.
      </p>

    </div>
  );
};

export default EmptyState;