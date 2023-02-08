import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const paths = [
  {
    path: "sales",
    element: lazy(() => import("./pages/Sales")),
  },
];

const CashierRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to="sales" replace />} />
        {paths.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </>
  );
};

export default CashierRouter;
