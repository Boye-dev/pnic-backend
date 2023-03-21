import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth from "../auth";
import { AdminPaths, CashierPaths, StockManPaths } from "../../../routes/paths";

const Signin = () => {
  const { setWithExpiry } = Auth;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setWithExpiry("user", data.user);
      data.user.role === "Admin"
        ? navigate(AdminPaths.DASHBOARD)
        : data.user.role === "Stock Manager"
        ? navigate(StockManPaths.DASHBOARD)
        : navigate(CashierPaths.SALES);
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <Box
        sx={{
          border: "1px solid blue",
          height: "251px",
          backgroundColor: "#0D81FF",
        }}
      ></Box>
      <Box marginX="30%">
        <form>
          <Box
            sx={{
              width: "82.25%",
              border: "1px",
              borderRadius: "25px",
              boxShadow: "1px -1px 2px 10px rgba(78, 89, 140, 0.05)",
              background: "#FFFFFF",
              marginTop: "-70px",
              padding: "85px 48px 100px 48px",
            }}
          >
            <Stack spacing={8} direction="column" mt="15px">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
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
            </Stack>
          </Box>
          <Box mt={5}>
            <Button
              fullWidth
              disableElevation
              variant="contained"
              sx={{
                padding: "10px",
                fontSize: "16px",
                fontWeight: 600,
                height: "40px",
              }}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit());
              }}
              // disabled={isLoading}
              // startIcon={
              //   isLoading && (
              //     <CircularProgress
              //       size={16}
              //       sx={{
              //         fontSize: 1,
              //       }}
              //     />
              //   )
              // }
            >
              Sign In
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Signin;
