// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  // Agar sirf admin ke liye hai aur admin login nahi hai
  if (adminOnly && !admin) {
    return <Navigate to="/admin/login" replace />;
  }

  // Agar sirf user ke liye hai aur user login nahi hai
  if (!adminOnly && !user) {
    return <Navigate to="/login" replace />;
  }

  // agar login hai (user/admin), to children render kar do
  return children;
};

export default ProtectedRoute;
