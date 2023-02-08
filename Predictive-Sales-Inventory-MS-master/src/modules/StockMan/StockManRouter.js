import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectRoutes from "../Admin/pages/ProtectRoutes";

const paths = [
  {
    path: "product",
    element: lazy(() => import("./pages/Product")),
  },
];

const StockManRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectRoutes />}>
          {paths.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default StockManRouter;
