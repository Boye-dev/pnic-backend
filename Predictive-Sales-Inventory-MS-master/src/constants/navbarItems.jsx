import { ReactComponent as LogoutOn } from "../assets/svgs/logout.svg";
import { ReactComponent as DashboardIcon } from "../assets/svgs/homeWhite.svg";
import { ReactComponent as UserIcon } from "../assets/svgs/user.svg";
import { ReactComponent as ProductIcon } from "../assets/svgs/product.svg";
import { ReactComponent as RecordIcon } from "../assets/svgs/records.svg";
import { ReactComponent as SettingsIcon } from "../assets/svgs/settings.svg";
import { AdminPaths, StockManPaths, CashierPaths } from "../routes/paths";

export const ADMIN_NAV_ITEMS = [
  {
    name: "Dashboard",
    url: AdminPaths.DASHBOARD,
    icon: (active) => <DashboardIcon />,
  },
  {
    name: "Users",
    url: "",
    icon: (active) => <UserIcon />,
  },
  {
    name: "Product",
    url: "",
    icon: (active) => <ProductIcon />,
  },
  {
    name: "Records",
    url: "",
    icon: (active) => <RecordIcon />,
  },
  {
    name: "Settings",
    url: "",
    icon: (active) => <SettingsIcon />,
  },
];

export const STOCK_MAN_NAV_ITEMS = [
  {
    name: "Produts",
    url: StockManPaths.PRODUCT,
    icon: (active) => <ProductIcon />,
  },
  {
    name: "Records",
    url: "",
    icon: (active) => <RecordIcon />,
  },
  {
    name: "Settings",
    url: "",
    icon: (active) => <SettingsIcon />,
  },
];

export const CASHIER_NAV_ITEMS = [
  {
    name: "Sales",
    url: CashierPaths.SALES,
    icon: (active) => <ProductIcon />,
  },
];

export const LOGOUT_NAV = {
  name: "Logout",
  url: "",
  icon: (active) => <LogoutOn />,
  // bottom: true,
};
