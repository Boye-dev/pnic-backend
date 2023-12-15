import { ReactComponent as LogoutOn } from "../assets/svgs/logout.svg";
import { ReactComponent as DashboardIcon } from "../assets/svgs/homeWhite.svg";
import { ReactComponent as UserIcon } from "../assets/svgs/user.svg";
import { ReactComponent as ProductIcon } from "../assets/svgs/productIcon.svg";
import { ReactComponent as RecordIcon } from "../assets/svgs/records.svg";
// import { ReactComponent as SettingsIcon } from "../assets/svgs/settings.svg";
import { AdminPaths, StockManPaths, CashierPaths } from "../routes/paths";

export interface INavItem {
  name: string;
  url: string;
  icon: (active?: boolean) => React.ReactElement;
}[]

export const ADMIN_NAV_ITEMS: INavItem[] = [
  {
    name: "Dashboard",
    url: AdminPaths.DASHBOARD,
    icon: (active) => <DashboardIcon />,
  },
  {
    name: "Users",
    url: AdminPaths.USERS,
    icon: (active) => <UserIcon />,
  },
  {
    name: "Product",
    url: AdminPaths.PRODUCTS,
    icon: (active) => <ProductIcon />,
  },
  {
    name: "Records",
    url: AdminPaths.RECORDS,
    icon: (active) => <RecordIcon />,
  },
  // {
  //   name: "Settings",
  //   url: AdminPaths.SETTINGS,
  //   icon: (active) => <SettingsIcon />,
  // },
];

export const STOCK_MAN_NAV_ITEMS: INavItem[] = [
  {
    name: "Dashboard",
    url: StockManPaths.DASHBOARD,
    icon: (active) => <DashboardIcon />,
  },
  {
    name: "Products",
    url: StockManPaths.PRODUCTS,
    icon: (active) => <ProductIcon />,
  },
  {
    name: "Records",
    url: StockManPaths.RECORD,
    icon: (active) => <RecordIcon />,
  },
  // {
  //   name: "Settings",
  //   url: StockManPaths.SETTINGS,
  //   icon: (active) => <SettingsIcon />,
  // },
];

export const CASHIER_NAV_ITEMS: INavItem[] = [
  {
    name: "Dashboard",
    url: CashierPaths.DASHBOARD,
    icon: (active) => <DashboardIcon />,
  },
  {
    name: "Products",
    url: CashierPaths.PRODUCTS,
    icon: (active) => <ProductIcon />,
  },
  {
    name: "Sales",
    url: CashierPaths.SALES,
    icon: (active) => <ProductIcon />,
  },
];

export const LOGOUT_NAV: INavItem = {
  name: "Logout",
  url: "",
  icon: (active) => <LogoutOn />,
  // bottom: true,
};
