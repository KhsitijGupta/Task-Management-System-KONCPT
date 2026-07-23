import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { ArrowLeft } from "lucide-react";

import { clearError, loginUser } from "../../Redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated, role } = useSelector(
    (state) => state.auth,
  );

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Email is required.",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please enter a valid email.",
      });
      return false;
    }

    if (!formData.password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Password is required.",
      });
      return false;
    }

    if (formData.password.length < 8) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Password must be at least 8 characters.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Login successful.",
      timer: 1500,
      showConfirmButton: false,
    });

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  }, [isAuthenticated, role, navigate]);
  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error,
      });

      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 lg:flex items-center justify-center px-12 xl:px-20">
          {/* Back to Home Button */}
          <Link
            to="/"
            className="absolute left-8 top-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-blue-700 hover:cursor-pointer z-20"
          >
            <ArrowLeft size={18} />
            Home
          </Link>

          {/* Background Blur */}
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 max-w-xl text-white mt-4">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-slate-900 border p-1.5 bg-white rounded-lg"
            >
              Task<span className="text-blue-600">Flow</span>
            </Link>

            <h1 className="mt-2 text-3xl font-bold leading-[1.15] tracking-tight xl:text-4xl">
              Organize Your Work.
              <br />
              Increase Productivity.
            </h1>

            <p className="mt-3 max-w-md text-md leading-6 text-blue-100">
              Manage projects, assign tasks, collaborate with your team, and
              complete work faster using one modern platform.
            </p>

            {/* Dashboard Mockup */}
            <div className="mt-6 rounded-3xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl">
              <div className="mb-3 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>

              <div className="space-y-4">
                <div className="h-12 rounded-xl bg-white/20"></div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-white/20 p-5">
                    <h3 className="text-3xl font-bold">245</h3>
                    <p className="mt-2 text-sm text-blue-100">Total Tasks</p>
                  </div>

                  <div className="rounded-2xl bg-white/20 p-5">
                    <h3 className="text-3xl font-bold">91%</h3>
                    <p className="mt-2 text-sm text-blue-100">Completed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-3 rounded-full bg-white/20">
                    <div className="h-full w-4/5 rounded-full bg-white"></div>
                  </div>

                  <div className="h-3 rounded-full bg-white/20">
                    <div className="h-full w-3/5 rounded-full bg-cyan-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-8 py-6 lg:px-12">
          <div className="w-full max-w-md">
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-xl">
              {/* Heading */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Welcome Back
                </h2>

                <p className="mt-1 text-base leading-7 text-slate-500">
                  Sign in to continue managing your tasks.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-[15px] outline-none transition duration-200 focus:border-blue-600 focus:bg-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 pr-12 text-[15px] outline-none transition duration-200 focus:border-blue-600 focus:bg-white"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center justify-between pt-1 text-sm">
                  <label className="flex cursor-pointer items-center gap-2 text-slate-600">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    Remember me
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-xl bg-blue-600 py-2 text-[15px] font-semibold text-white transition duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Divider */}
              <div className="my-4 flex items-center">
                <div className="h-px flex-1 bg-slate-200"></div>

                <span className="px-4 text-sm text-slate-400">OR</span>

                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              {/* Google */}
              <button className="w-full rounded-xl border border-slate-300 py-3 text-[15px] font-medium transition duration-200 hover:bg-slate-50">
                Continue with Google
              </button>

              {/* Footer */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
