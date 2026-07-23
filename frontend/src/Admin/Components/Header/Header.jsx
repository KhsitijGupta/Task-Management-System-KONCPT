import { LogOut, ShieldCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/login");
      }
    });
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-3 rounded-xl">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-sm text-gray-500">Task Management System</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block text-right">
            <h3 className="font-semibold text-gray-800">{user?.name}</h3>

            <p className="text-sm text-gray-500">Administrator</p>
          </div>

          <div className="h-11 w-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold uppercase">
            {user?.name?.charAt(0) || "A"}
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
