import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/axios";

// ==========================
// Initial State
// ==========================

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

// ==========================
// Register
// ==========================

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/register", formData);

      localStorage.setItem("token", data.data.token);
      localStorage.setItem("role", data.data.user.role);

      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed.",
      );
    }
  },
);

// ==========================
// Login
// ==========================

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", formData);

      localStorage.setItem("token", data.data.token);
      localStorage.setItem("role", data.data.user.role);

      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Invalid email or password.",
      );
    }
  },
);

// ==========================
// Get Profile
// ==========================

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/profile");

      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to fetch profile.",
      );
    }
  },
);

// ==========================
// Slice
// ==========================

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==========================
      // Register
      // ==========================

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role;
        state.isAuthenticated = true;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Login
      // ==========================

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role;
        state.isAuthenticated = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Profile
      // ==========================

      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.role = action.payload.role;
        state.isAuthenticated = true;
      })

      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
