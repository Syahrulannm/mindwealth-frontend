// File: src/pages/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("mw_token");
  if (!token) {
    // Kalau token gak ada, redirect ke login
    return <Navigate to="/admin/login" replace />;
  }
  // Kalau token ada, render children (dashboard)
  return children;
}
