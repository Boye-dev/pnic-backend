import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Drawer from "../../../../shared/Drawer";
import api from "../../../../api/api.js";

const AddUser = ({ open, close }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    role: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required("Type your password again")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (payload) => {
    try {
      const response = await api.post("/api/signup", payload);
      console.log(response);
      if (response.status === 200) {
        console.log("done");
        close;
      } else {
        console.log("not done");
      }
    } catch (error) {}
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={close}
        title="Add users"
        onOk={handleSubmit(onSubmit)}
        okText="ADD"
      >
        <form>
          <Stack spacing={8} direction="column" mt="15px">
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="First Name"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="firstname"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Last Name"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="lastname"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Username"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="username"
              control={control}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Controller
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <Select
                    labelId="role"
                    id="demo-simple-select"
                    label="Role"
                    {...fields}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  >
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Stock Manager"}>Stock Manager</MenuItem>
                    <MenuItem value={"Cashier"}>Cashier</MenuItem>
                  </Select>
                )}
                name="role"
                control={control}
              />
            </FormControl>
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Email Address"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="email"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Password"
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
              name="password"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Confirm Password"
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
              name="confirmPassword"
              control={control}
            />
          </Stack>
        </form>
      </Drawer>
    </>
  );
};

export default AddUser;
