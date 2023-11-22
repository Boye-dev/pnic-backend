import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WithSidebar from "../Admin/pages/WithSidebar";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Records from "./pages/Records";
import Settings from "./pages/Settings";
import ProtectRoutes from "./ProtectedRoutes";

const StockManRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<ProtectRoutes />}> */}
          <Route element={<WithSidebar getCurrentAdmin="Stock Manager" />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Product />} />
            <Route path="settings" element={<Settings />} />
            <Route path="records" element={<Records />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default StockManRouter;
