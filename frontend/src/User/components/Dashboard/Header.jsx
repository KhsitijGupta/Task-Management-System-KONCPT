import { Bell, LogOut, Menu, Plus, Search, UserCircle2, X } from "lucide-react";
import { useState } from "react";
import { logout } from "../../../Redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Header = ({ user, onCreateTask, search, setSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure?",
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/login");
      }
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-black">
              <span className="text-blue-600">Task</span>
              <span>Flow</span>
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:block flex-1 max-w-lg mx-10">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="w-full rounded-xl border bg-gray-50 pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onCreateTask}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3"
            >
              <Plus size={18} />
              Create
            </button>

            <div className="flex items-center gap-3 rounded-xl border px-4 py-2">
              <UserCircle2 className="text-blue-600" size={40} />

              <div>
                <h3 className="font-semibold">{user?.name || "Guest"}</h3>

                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 hover:bg-red-100"
            >
              <LogOut size={18} />
            </button>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t py-5 md:hidden space-y-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-xl border bg-gray-50 pl-12 pr-4 py-3 outline-none"
              />
            </div>

            <button
              onClick={onCreateTask}
              className="w-full rounded-xl bg-blue-600 py-3 text-white"
            >
              Create Task
            </button>

            <div className="flex items-center gap-3">
              <UserCircle2 size={45} className="text-blue-600" />

              <div>
                <h3 className="font-semibold">{user?.name || "Guest User"}</h3>

                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full rounded-xl bg-red-500 py-3 text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
