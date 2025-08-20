// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import api from "../../utils/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Menggunakan path relatif, bukan URL lengkap
      // src/utils/api.js harus sudah diatur untuk menggunakan baseURL yang benar
      const res = await api.post("/auth/login", { email, password });
      console.log("Login response:", res.data);
      localStorage.setItem("mw_token", res.data.token);
      window.location.href = "/admin";
    } catch (err) {
      console.log(err); // Tambahkan ini untuk melihat detail error
      // Set error message dari response atau default message
      setErr(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Admin Login</h2>
        <form onSubmit={submit} className="space-y-6">
          {err && <div className="bg-red-100 text-red-700 p-2 mb-3 rounded">{err}</div>}
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </label>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
