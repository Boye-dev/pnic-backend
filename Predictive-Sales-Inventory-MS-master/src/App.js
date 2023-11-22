import "./App.css";
import NavBar from "./shared/NavBar";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AdminRouter = lazy(() => import("./modules/Admin/AdminRouter"));
const StockManRouter = lazy(() => import("./modules/StockMan/StockManRouter"));
const CashierRouter = lazy(() => import("./modules/Cashier/CashierRouter"));
const Signin = lazy(() => import("./modules/Auth/pages/Signin"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>
        <h2>Loading</h2>
      </div>}>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/admin/*" element={<AdminRouter />} />
          <Route exact path="/stockManager/*" element={<StockManRouter />} />
          <Route exact path="/cashier/*" element={<CashierRouter />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
