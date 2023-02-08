import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectRoutes from "./pages/ProtectRoutes";
import WithSidebar from "./pages/WithSidebar";

const paths = [
  {
    path: "dashboard",
    element: lazy(() => import("./pages/Dashboard")),
  },
];

const AdminRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route element={<WithSidebar />}>
            {paths.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AdminRouter;
