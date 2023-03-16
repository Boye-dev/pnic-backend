// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";

// const ElevationScroll = (props) => {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// };

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

// const PersonalizedAppBar = (props) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <ElevationScroll {...props}>
//         <AppBar position="static">
//           <Toolbar>
//             {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography> */}
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="What do you need..."
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//             <Box sx={{ flexGrow: 1 }} />
//             <Box sx={{ display: { xs: "none", md: "flex" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="show 4 new mails"
//                 color="inherit"
//               >
//                 <Badge badgeContent={4} color="error">
//                   <MailIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size="large"
//                 aria-label="show 17 new notifications"
//                 color="inherit"
//               >
//                 <Badge badgeContent={17} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size="large"
//                 edge="end"
//                 aria-label="account of current user"
//                 aria-controls={menuId}
//                 aria-haspopup="true"
//                 onClick={handleProfileMenuOpen}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//             </Box>
//             <Box sx={{ display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="show more"
//                 aria-controls={mobileMenuId}
//                 aria-haspopup="true"
//                 onClick={handleMobileMenuOpen}
//                 color="inherit"
//               >
//                 <MoreIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// };

// export default PersonalizedAppBar;

import { Box, useMediaQuery, Typography, Avatar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as NotificationsIcon } from "../assets/svgs/notification.svg";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { drawerWidth } from "./NavBar";
import Auth from "../modules/Auth/auth";

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
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const PersonalizedAppBar = () => {
  const theme = useTheme();
  const { getCurrentUser } = Auth;

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
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PersonalizedAppBar;
