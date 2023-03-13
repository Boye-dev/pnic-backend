import "./App.css";
import NavBar from "./shared/NavBar";
import React, { useState, useTransition, Suspense, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRouter from "./modules/Admin/AdminRouter";
import StockManRouter from "./modules/StockMan/StockManRouter";
import CashierRouter from "./modules/Cashier/CashierRouter";
import Signin from "./modules/Auth/pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/admin/*" element={<AdminRouter />} />
        <Route exact path="/stockManager/*" element={<StockManRouter />} />
        <Route exact path="/cashier/*" element={<CashierRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
