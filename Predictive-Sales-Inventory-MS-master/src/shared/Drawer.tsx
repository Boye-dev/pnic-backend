import { Close } from "@mui/icons-material";
import { Button, Drawer as MUIDrawer, Typography, Box } from "@mui/material";
import React from "react";
import LoadingButton from "./LoadingButton";

interface IDrawerProps {
  open : boolean;
  onClose: () => boolean;
  children: React.ReactNode;
  title:  string;
  cancelText: string;
  onOk: () => void;
  okText: string;
}

const Drawer = ({
  open,
  onClose,
  children,
  title = "Title",
  cancelText = "Cancel",
  onOk,
  okText = "Submit",
}: IDrawerProps) => {
  return (
    <MUIDrawer
      sx={{ minWidth: "100px", position: "relative" }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        minWidth={"504px"}
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid #E5E5EA"
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: "#1E0A3C",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>
        <Close onClick={() => onClose()} sx={{ cursor: "pointer" }} />
      </Box>
      <Box sx={{ zIndex: 1, overflowY: "auto" }} p={2}>
        {children}
      </Box>
      <Box
        minWidth={"504px"}
        p={2}
        bgcolor="#F8F7FA"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        position="fixed"
        sx={{ bottom: 0, zIndex: 1, right: 0 }}
      >
        <Button
          variant={okText ? "text" : "contained"}
          onClick={() => onClose()}
          sx={{ marginRight: "1rem" }}
        >
          <Typography>{cancelText}</Typography>
        </Button>
        {onOk && <LoadingButton onClick={onOk}>{okText}</LoadingButton>}
      </Box>
    </MUIDrawer>
  );
};

export default Drawer;
