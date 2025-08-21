import axios from "axios";
// Membuat instance axios dengan baseURL yang sesuai
// Pastikan VITE_API_URL sudah diatur di file .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, //|| "http://localhost:5000/api", // Ganti dengan URL API Anda
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor → kirim token kalau ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("mw_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response Interceptor → handle token kadaluarsa
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("mw_token");
      window.location.href = "/admin/login"; // Redirect ke login
    }
    return Promise.reject(error);
  }
);

export default api;
