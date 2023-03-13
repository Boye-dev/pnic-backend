import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ADMIN_NAV_ITEMS,
  CASHIER_NAV_ITEMS,
  STOCK_MAN_NAV_ITEMS,
} from "../constants/navbarItems";
import { Link } from "react-router-dom";
import Auth from "../modules/Auth/auth";

export const drawerWidth = 212;

const NavBar = () => {
  const { getCurrentAdmin } = Auth;

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {/* <Divider /> */}
        <List>
          {getCurrentAdmin()?.role === "Admin"
            ? ADMIN_NAV_ITEMS.map((x) => (
                <ListItem key={x.name} disablePadding>
                  <ListItemButton component={Link} to={x.url}>
                    <ListItemIcon>{x.icon()}</ListItemIcon>
                    <ListItemText primary={x.name} />
                  </ListItemButton>
                </ListItem>
              ))
            : getCurrentAdmin()?.role === "StockManager"
            ? STOCK_MAN_NAV_ITEMS.map((x) => (
                <ListItem key={x.name} disablePadding>
                  <ListItemButton component={Link} to={x.url}>
                    <ListItemIcon>{x.icon()}</ListItemIcon>
                    <ListItemText primary={x.name} />
                  </ListItemButton>
                </ListItem>
              ))
            : CASHIER_NAV_ITEMS.map((x) => (
                <ListItem key={x.name} disablePadding>
                  <ListItemButton component={Link} to={x.url}>
                    <ListItemIcon>{x.icon()}</ListItemIcon>
                    <ListItemText primary={x.name} />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
