import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedAuthRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token") != null;
  return !isLoggedIn ? children : <Navigate to={"/"} />;
}
