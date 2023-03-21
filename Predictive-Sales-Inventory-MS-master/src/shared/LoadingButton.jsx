import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoadingButton = ({
  isLoading = false,
  variant = "contained",
  color = "primary",
  children,
  className,
  onClick,
  blue,
}) => {
  const ColorButton = styled(Button)(() => ({
    backgroundColor: "#FF7F11",
    color: "white",
  }));

  // return (
  //   {blue ?
  //     <Button
  //     onClick={onClick}
  //     variant={variant}
  //     disableRipple
  //     disableElevation
  //     disabled={isLoading}
  //       color
  //     {...props}
  //     className={className}
  //   >
  //     {isLoading && (
  //       <CircularProgress
  //         size={20}
  //         color="primary"
  //         sx={{ marginRight: "14px" }}
  //       />
  //     )}
  //     {children}
  //   </Button> : <ColorButton/
  //   }

  // );

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
