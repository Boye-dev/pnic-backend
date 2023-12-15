import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import { ReactComponent as LogoutIcon } from "../assets/svgs/logout.svg";

import {
  ADMIN_NAV_ITEMS,
  CASHIER_NAV_ITEMS,
  STOCK_MAN_NAV_ITEMS,
} from '../../src/constants/navbarItems'
import { Link } from "react-router-dom";
// import Auth from "../modules/Auth/auth";
import { Box } from "@mui/material";
import { INavItem } from "../../src/constants/navbarItems";

export const drawerWidth = 212;

const SideNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
  flex: 1, // set flex to 1 to fill the available space
  display: "flex", // set display to flex to make the items in the list align vertically
  flexDirection: "column",
});

const NavBar = ({getCurrentAdmin} : {getCurrentAdmin: string}) => {
  // const { getCurrentAdmin } = Auth;
  const [activeIndex, setActiveIndex] = useState<number| null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const getButtonStyle = (index: number) => {
    return activeIndex === index
      ? {
          borderBottom: "5px solid #FF7F11",
          borderRadius: "0px 0px 10px 10px",
          "&.Mui-selected:focus": {
            outline: "none",
          },
        }
      : {};
  };

  const getTextStyle = (index: number) => {
    return activeIndex === index
      ? {
          color: "blue",
          fontWeight: "bold",
        }
      : {};
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          paddingLeft: "25px",
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
        <SideNav sx={{ marginX: "25px" }}>
          {/* {getCurrentAdmin()?.role === "Admin" */}
          {getCurrentAdmin === "Admin"
            ? ADMIN_NAV_ITEMS.map((x: INavItem, index: number) => (
                <ListItem key={x.name} disablePadding>
                  <ListItemButton
                    sx={{ marginY: "10px", ...getButtonStyle(index) }}
                    component={Link}
                    to={x.url}
                    onClick={() => handleItemClick(index)}
                  >
                    <ListItemIcon>{x.icon()}</ListItemIcon>
                    <ListItemText
                      primary={x.name}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: "medium",
                        letterSpacing: 0,
                        ...getTextStyle(index),
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            // : getCurrentAdmin()?.role === "Stock Manager"
            : getCurrentAdmin === "Stock Manager"
            ? STOCK_MAN_NAV_ITEMS.map((x: INavItem, index: number) => (
                <ListItem key={x.name} disablePadding>
                  <ListItemButton
                    sx={{ marginY: "10px", ...getButtonStyle(index) }}
                    component={Link}
                    to={x.url}
                    onClick={() => handleItemClick(index)}
                  >
                    <ListItemIcon>{x.icon()}</ListItemIcon>
                    <ListItemText
                      primary={x.name}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: "medium",
                        letterSpacing: 0,
                        ...getTextStyle(index),
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            : CASHIER_NAV_ITEMS.map((x: INavItem, index: number) => (
                <ListItem key={x.name} disablePadding>
                  <ListItemButton
                    sx={{ marginY: "10px", ...getButtonStyle(index) }}
                    component={Link}
                    to={x.url}
                    onClick={() => handleItemClick(index)}
                  >
                    <ListItemIcon>{x.icon()}</ListItemIcon>
                    <ListItemText
                      primary={x.name}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: "medium",
                        letterSpacing: 0,
                        ...getTextStyle(index),
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
          <Box sx={{ position: "absolute", paddingBottom: "10px", bottom: 0 }}>
            <ListItem key={"Log Out"} disablePadding>
              <ListItemButton component={Link} to={"/login"}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Log Out"}
                  primaryTypographyProps={{
                    fontSize: "14px",
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </SideNav>
      </Drawer>
    </>
  );
};

export default NavBar;
