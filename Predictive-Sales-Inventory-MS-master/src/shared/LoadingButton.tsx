import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IButtonProps{
  isLoading?: boolean;
  children: string | React.ReactElement;
  onClick: () => void;
}

const LoadingButton = ({
  isLoading,
  children,
  onClick,
}:IButtonProps ) => {
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
