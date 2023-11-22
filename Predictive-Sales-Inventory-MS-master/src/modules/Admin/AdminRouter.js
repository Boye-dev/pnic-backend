import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProtectRoutes from "./pages/ProtectRoutes";
import Records from "./pages/Records";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import WithSidebar from "./pages/WithSidebar";

// const paths = [
//   {
//     path: "dashboard",
//     element: lazy(() => import("./pages/Dashboard")),
//   },
//   {
//     path: "users",
//     element: lazy(() => import("./pages/Users")),
//   },
// ];

const AdminRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<ProtectRoutes />}> */}
          <Route element={<WithSidebar getCurrentAdmin="Admin" />}>
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path={"users"} element={<Users />} />
            <Route path={"products"} element={<Products />} />
            <Route path={"records"} element={<Records />} />
            <Route path={"settings"} element={<Settings />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default AdminRouter;
