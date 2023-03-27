import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoadingButton = ({
  isLoading,
  variant = "contained",
  color = "primary",
  children,
  onClick,
}) => {
  const ColorButton = styled(Button)(() => ({
    backgroundColor: "#FF7F11",
    color: "white",
  }));

  return (
    <>
      <ColorButton onClick={onClick} disabled={isLoading}>
        {isLoading && (
          <CircularProgress
            size={20}
            color="primary"
            sx={{ marginRight: "14px" }}
          />
        )}
        {children}
      </ColorButton>
    </>
  );
};

export default LoadingButton;
