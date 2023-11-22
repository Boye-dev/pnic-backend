import { Box, useMediaQuery, Typography, Avatar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { styled, useTheme, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as NotificationsIcon } from "../assets/svgs/notification.svg";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { drawerWidth } from "./NavBar";
import Auth from "../modules/Auth/auth";
import Drawer from "./Drawer";
import api from "../api/api";
import EmptyState from "./EmptyState";
import UpdateProfile from "./UpdateProfile";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    paddingLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: theme.palette.common.white,
  color: theme.palette.common.black,
  boxShadow: "inset 0px -1px 0px #E5E5EA",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch",
    },
  },
}));

const stringAvatar = (name) => {
  return {
    sx: {
      // bgcolor: stringToColor(name),
    },
    children: `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`,
  };
};

const PersonalizedAppBar = () => {
  const theme = useTheme();
  const { getCurrentUser } = Auth;
  const [openNotification, setOpenNotification] = useState(false);
  const [notification, setNotification] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    getNotification();
  }, []);

  const getNotification = () => {
    api.get("/api/notifications").then((response) => {
      const notification = response.data.notification;
      // setLoading(false);
      setNotification(notification);
    });
  };

  const handleDrawer = () => {
    setOpenNotification(!openNotification);
  };

  const mobile =
    useMediaQuery(theme.breakpoints.down("sm")) && !drawerConfig?.isMobile;

  return (
    <>
      <AppBar position="fixed" open={!mobile} elevation={0}>
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            component="div"
            sx={{
              width: "100%",
            }}
          >
            <Box
              border="1px solid #009DDC"
              borderRadius="15px"
              width="70%"
              height="100%"
              paddingY="8px"
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="What do you need..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box
              border="1px solid #009DDC"
              borderRadius="10px"
              paddingY="10px"
              paddingX="15px"
              width="fit-content"
              cursor="pointer"
              onClick={() => {
                handleDrawer(true);
                console.log("jola");
              }}
            >
              <NotificationsIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                border: "1px solid #009DDC",
                borderRadius: "10px",
                padding: "6px",
                width: "208px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Avatar {...stringAvatar(getCurrentUser()?.username)} />
              <Typography sx={{ fontSize: "18px", color: "#E55934" }}>
                {getCurrentUser()?.username}
              </Typography>
              <KeyboardArrowDownIcon
                color="warning"
                onClick={() => setOpenProfile(!openProfile)}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openNotification}
        onClose={() => handleDrawer()}
        title="Notification"
        cancelText="Close"
      >
        <Box>
          {notification?.length > 0 ? (
            notification.map((item) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    border: "1px solid #e0dcdc",
                    backgroundColor: "#e0dcdc",
                  }}
                >
                  <Typography>{item.name}</Typography>
                </Box>
              );
            })
          ) : (
            <Box sx={{ width: "200px", margin: "200px 50px 100px 150px" }}>
              <EmptyState emptyText="No notification" />
            </Box>
          )}
        </Box>
      </Drawer>
      <UpdateProfile
        open={openProfile}
        close={() => setOpenProfile(!openProfile)}
      />
    </>
  );
};

export default PersonalizedAppBar;
