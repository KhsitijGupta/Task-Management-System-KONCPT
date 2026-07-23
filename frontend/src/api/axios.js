import axios from "axios";
import Swal from "sweetalert2";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");

      Swal.fire({
        icon: "warning",
        title: "Session Expired",
        text: "Please login again.",
      });

      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
