import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WithSidebar from "../Admin/pages/WithSidebar";
import ProtectRoutes from "./ProtectedRoutes";
import Sales from "./pages/Sales";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import MakeSales from "./components/MakeSales";
import Receipt from "./pages/Receipt";

const CashierRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route path={"make-sales"} element={<MakeSales />} />
          <Route path={"generate-receipt"} element={<Receipt />} />
          <Route element={<WithSidebar />}>
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path={"products"} element={<Product />} />
            <Route path={"sales"} element={<Sales />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default CashierRouter;
