import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../Auth/auth";

const ProtectRoutes = () => {
  const { getCurrentAdmin } = Auth;

  return (
    <>
      {getCurrentAdmin()?.role === "Stock Manager" ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectRoutes;