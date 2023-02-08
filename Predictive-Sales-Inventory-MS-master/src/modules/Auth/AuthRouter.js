import React from "react";
import ProtectRoutes from "../Admin/pages/ProtectRoutes";

const paths = [
  {
    path: "signin",
    element: lazy(() => import("./pages/Signin")),
  },
];

const AuthRouter = () => {
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

export default AuthRouter;
