import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Home from "./User/pages/Home";
import Login from "./User/pages/Login";
import Register from "./User/pages/Register";
import Dashboard from "./User/pages/Dashboard";
import NotFound from "./User/pages/NotFound";

import AdminDashboard from "./Admin/pages/AdminDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

import { getProfile } from "./Redux/features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect according to role */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              user?.role === "admin" ? (
                <Navigate to="/admin/dashboard" replace />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            ) : (
              <Home />
            )
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
