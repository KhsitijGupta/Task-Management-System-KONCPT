import { useMemo, useState } from "react";
import { Trash2, Search } from "lucide-react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import {
  deleteUser,
  updateUserRole,
} from "../../../Redux/features/admin/adminSlice";

const UsersTable = ({ users = [], loading }) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Delete User?",
      text: `Are you sure you want to delete ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
      }
    });
  };

  const handleRoleChange = (id, role) => {
    dispatch(
      updateUserRole({
        id,
        role,
      }),
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        Loading Users...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 border-b">
        <h2 className="text-xl font-semibold">Users</h2>

        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>

              <th className="px-6 py-3 text-left">Email</th>

              <th className="px-6 py-3 text-center">Role</th>

              <th className="px-6 py-3 text-center">Change Role</th>

              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{user.name}</td>

                  <td className="px-6 py-4">{user.email}</td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="border rounded-lg px-3 py-2"
                    >
                      <option value="user">User</option>

                      <option value="admin">Admin</option>
                    </select>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDelete(user._id, user.name)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
