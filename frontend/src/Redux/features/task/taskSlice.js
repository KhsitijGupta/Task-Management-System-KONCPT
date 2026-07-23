import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/axios";

// ==========================
// Initial State
// ==========================

const initialState = {
  tasks: [],
  task: null,

  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  },

  filters: {
    search: "",
    status: "",
    priority: "",
    sortBy: "createdAt",
    order: "desc",
  },

  loading: false,
  error: null,
};

// ==========================
// Get Tasks
// ==========================

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters, pagination } = getState().task;

      const { data } = await api.get("/tasks", {
        params: {
          page: pagination.page,
          limit: pagination.limit,
          search: filters.search,
          status: filters.status,
          priority: filters.priority,
          sortBy: filters.sortBy,
          order: filters.order,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch tasks.",
      );
    }
  },
);

// ==========================
// Create Task
// ==========================

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData, { dispatch, rejectWithValue }) => {
    try {
      await api.post("/tasks/createTask", taskData);

      dispatch(getTasks());

      return;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create task.",
      );
    }
  },
);

// ==========================
// Update Task
// ==========================

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, taskData }, { dispatch, rejectWithValue }) => {
    try {
      await api.put(`/tasks/${id}`, taskData);

      dispatch(getTasks());

      return;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update task.",
      );
    }
  },
);

// ==========================
// Delete Task
// ==========================

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await api.delete(`/tasks/${id}`);

      dispatch(getTasks());

      return;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete task.",
      );
    }
  },
);

// ==========================
// Update Status
// ==========================

export const updateTaskStatus = createAsyncThunk(
  "tasks/updateTaskStatus",
  async ({ id, status }, { dispatch, rejectWithValue }) => {
    try {
      await api.patch(`/tasks/${id}/status`, {
        status,
      });

      dispatch(getTasks());

      return;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update task.",
      );
    }
  },
);

// ==========================
// Slice
// ==========================

const taskSlice = createSlice({
  name: "task",

  initialState,

  reducers: {
    clearTaskError(state) {
      state.error = null;
    },

    setSearch(state, action) {
      state.filters.search = action.payload;
      state.pagination.page = 1;
    },

    setStatus(state, action) {
      state.filters.status = action.payload;
      state.pagination.page = 1;
    },

    setPriority(state, action) {
      state.filters.priority = action.payload;
      state.pagination.page = 1;
    },

    setSort(state, action) {
      state.filters.sortBy = action.payload.sortBy;
      state.filters.order = action.payload.order;
    },

    setPage(state, action) {
      state.pagination.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;

        state.tasks = action.payload.data;

        state.pagination = action.payload.pagination;
      })

      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addMatcher(
        (action) =>
          action.type.startsWith("tasks/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )

      .addMatcher(
        (action) =>
          action.type.startsWith("tasks/") &&
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        },
      )

      .addMatcher(
        (action) =>
          action.type.startsWith("tasks/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});

export const {
  clearTaskError,
  setSearch,
  setStatus,
  setPriority,
  setSort,
  setPage,
} = taskSlice.actions;

export default taskSlice.reducer;
