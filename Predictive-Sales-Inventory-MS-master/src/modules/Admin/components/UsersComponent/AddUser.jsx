import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    role: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = () => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
      confirmPassword: "",
      username: "",
      firstname: "",
      lastname: "",
    },
  });

  return (
    <>
      <Stack spacing={8} direction="column" mt="15px">
        <Controller
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="First Name"
              fullWidth
              {...fields}
              value={data.firstname}
              onChange={handleChange}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
          name="firstname"
          control={control}
        />
        <Controller
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Last Name"
              fullWidth
              {...fields}
              value={data.lastname}
              onChange={handleChange}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
          name="lastname"
          control={control}
        />
        <Controller
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Username"
              fullWidth
              {...fields}
              value={data.username}
              onChange={handleChange}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
          name="username"
          control={control}
        />
        <FormControl>
          <Controller
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <Select
                labelId="role"
                id="demo-simple-select"
                value={data.role}
                label="Age"
                onChange={handleChange}
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
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Email Address"
              fullWidth
              {...fields}
              value={data.email}
              onChange={handleChange}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              {...fields}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
              value={data.password}
              onChange={handleChange}
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
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              {...fields}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
              value={data.confirmPassword}
              onChange={handleChange}
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
    </>
  );
};

export default AddUser;
