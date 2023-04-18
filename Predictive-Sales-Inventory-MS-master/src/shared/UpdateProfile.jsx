import React, { useState } from "react";
import Drawer from "./Drawer";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Typography, Avatar, Box, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../api/api";
import Auth from "../modules/Auth/auth";

const UpdateProfile = ({ open, close }) => {
  const { getCurrentUser } = Auth;
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    currentPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmNewPassword: yup
      .string()
      .required("Type your password again")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (payload) => {
    try {
      const response = await api.put(
        `/api/editProfile/password/${getCurrentUser()?._id}`,
        payload
      );
      console.log(response);
      if (response.data.status === "OK") {
        close;
      } else {
        console.log("not done");
      }
    } catch (error) {}
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        // bgcolor: stringToColor(name),
      },
      children: `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`,
    };
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={close}
        title="Profile"
        onOk={handleSubmit(onSubmit)}
        okText="Update Password"
      >
        <Box marginX="35%">
          <Avatar
            {...stringAvatar(getCurrentUser()?.username)}
            sx={{ marginX: "50px" }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              color: "#E55934",
              marginX: "15px",
              marginTop: "15px",
            }}
          >
            {getCurrentUser()?.username}
          </Typography>
        </Box>
        <Box border="1px solid #F8F7FA" bgcolor="#F8F7FA" marginY={4}>
          <Box display="flex" justifyContent="space-evenly" marginY="15px">
            <Box
              display="flex"
              justifyContent="space-evenly"
              //   marginBottom="15px"
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Firstname:{" "}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {getCurrentUser()?.firstname}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              //   marginBottom="15px"
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Lastname:{" "}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {getCurrentUser()?.lastname}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-evenly" marginY="15px">
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", marginRight: "10px" }}
            >
              Role:{" "}
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {getCurrentUser()?.role}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "16px" }}>
            Change Password
          </Typography>
          <form>
            <Stack spacing={8} direction="column" mt="15px">
              <Controller
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    label="Current Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name="currentPassword"
                control={control}
              />
              <Controller
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name="newPassword"
                control={control}
              />
              <Controller
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    label="Confirm New Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name="confirmNewPassword"
                control={control}
              />
            </Stack>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

export default UpdateProfile;
