import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/axios";

// ==========================
// Initial State
// ==========================

const initialState = {
  dashboard: null,
  users: [],
  tasks: [],

  selectedTab: "dashboard",

  loading: false,
  error: null,
};

// ==========================
// Dashboard
// ==========================

export const getDashboardStats = createAsyncThunk(
  "admin/getDashboardStats",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/admin/dashboard");
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch dashboard.",
      );
    }
  },
);

// ==========================
// Users
// ==========================

export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/admin/users");
      console.log(data);
      return data.data;
    } catch (error) {
        console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users.",
      );
    }
  },
);

// ==========================
// Tasks
// ==========================

export const getAllTasks = createAsyncThunk(
  "admin/getAllTasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/admin/tasks");
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch tasks.",
      );
    }
  },
);

// ==========================
// Update User Role
// ==========================

export const updateUserRole = createAsyncThunk(
  "admin/updateUserRole",
  async ({ id, role }, { dispatch, rejectWithValue }) => {
    try {
      await api.patch(`/admin/users/${id}/role`, { role });

      dispatch(getAllUsers());

      return true;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update role.",
      );
    }
  },
);

// ==========================
// Delete User
// ==========================

export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await api.delete(`/admin/users/${id}`);

      dispatch(getAllUsers());
      dispatch(getDashboardStats());

      return true;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete user.",
      );
    }
  },
);

// ==========================
// Delete Task
// ==========================

export const deleteTaskAdmin = createAsyncThunk(
  "admin/deleteTaskAdmin",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await api.delete(`/admin/tasks/${id}`);

      dispatch(getAllTasks());
      dispatch(getDashboardStats());

      return true;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete task.",
      );
    }
  },
);

// ==========================
// Slice
// ==========================

const adminSlice = createSlice({
  name: "admin",

  initialState,

  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },

    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // Dashboard
      .addCase(getDashboardStats.fulfilled, (state, action) => {
        state.dashboard = action.payload;
      })

      // Users
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      // Tasks
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })

      // Pending
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )

      // Fulfilled
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/") &&
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        },
      )

      // Rejected
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { clearAdminError, setSelectedTab } = adminSlice.actions;

export default adminSlice.reducer;
