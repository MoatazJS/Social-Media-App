import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

export default function MainLayout() {
  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
