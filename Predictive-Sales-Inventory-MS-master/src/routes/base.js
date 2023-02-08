import {
  ADMIN_NAV_ITEMS,
  STOCK_MAN_NAV_ITEMS,
  CASHIER_NAV_ITEMS,
} from "constants/navbarItems";
import { lazy } from "react";
// import MainLayout from "shared/layouts/Main";
import { BasePaths } from "./paths";

const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("modules/Auth/AuthRouter")),
    Layout: null,
    useAuth: false,
  },
  {
    path: `${BasePaths.ADMIN}/*`,
    exact: true,
    component: lazy(() => import("modules/Admin/AdminRouter")),
    Layout: MainLayout,
    useAuth: true,
    sidenavItems: ADMIN_NAV_ITEMS,
  },
  {
    path: `${BasePaths.STOCK_MANAGER}/*`,
    exact: true,
    component: lazy(() => import("modules/StockMan/StockManRouter")),
    Layout: MainLayout,
    useAuth: true,
    sidenavItems: STOCK_MAN_NAV_ITEMS,
  },
  {
    path: `${BasePaths.CASHIER}/*`,
    exact: true,
    component: lazy(() => import("modules/Cashier/CashierRouter")),
    Layout: MainLayout,
    useAuth: true,
    sidenavItems: CASHIER_NAV_ITEMS,
  },
  {
    path: "*",
    exact: false,
    component: lazy(() => import("shared/components/NotFound")),
    Layout: null,
    useAuth: false,
  },
];

export default BaseRoutes;
