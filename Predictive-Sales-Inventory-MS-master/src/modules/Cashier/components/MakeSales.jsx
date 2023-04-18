import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ClearIcon from "@mui/icons-material/Clear";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { CashierPaths } from "../../../routes/paths";
import api from "../../../api/api";
import Auth from "../../Auth/auth";

const MakeSales = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = Auth;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get("/api/products").then((response) => {
      const data = response.data.products;
      setProducts(data);
    });
  }, []);

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    unit: yup.number().positive().integer().required(),
    category: yup.string().required(),
    price: yup.number().required(),
    // mainImage: yup.mixed().required(),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      description: "",
      unit: "",
      category: "",
      price: "",
    },
  });

  const today = new Date();
  const dateString = today.toLocaleString();

  return (
    <Box sx={{ margin: "20px 200px" }}>
      <Box display="flex">
        <Box marginY="25px">
          <ArrowBackIcon
            sx={{ fontSize: "20px" }}
            onClick={() => navigate(CashierPaths.SALES)}
          />
        </Box>
        <Typography fontWeight="bold" fontSize="16px" margin="20px 120px">
          New Sales
        </Typography>
      </Box>
      <Box>
        <Box>
          <Box display="flex" justifyContent="space-between" margin="10px">
            <Typography>Date: {dateString}</Typography>
            <Typography>{getCurrentUser().username}</Typography>
          </Box>
          <Box>
            <form>
              <Stack spacing={8} direction="column" mt="15px">
                <Controller
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      label="Customer Name"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                    />
                  )}
                  name="name"
                  control={control}
                />

                <Controller
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <Autocomplete
                      getOptionLabel={(option) => option.name}
                      multiple
                      // options={Object.values(ROLES_OPTIONS)}
                      options={products}
                      //   value={value}
                      isOptionEqualToValue={(option, value) =>
                        option._id === value._id
                      }
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            // @ts-ignore
                            label={option.name}
                            {...getTagProps({ index })}
                            color="primary"
                            deleteIcon={<ClearIcon />}
                            sx={{
                              backgroundColor: (theme) =>
                                theme.palette.grey[100],
                              color: (theme) => theme.palette.text.primary,
                              borderRadius: "2px",

                              "& .MuiChip-deleteIcon": {
                                color: (theme) => theme.palette.text.primary,
                              },
                            }}
                            variant="filled"
                          />
                        ))
                      }
                      renderInput={({ ...params }) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Products to be bought"
                          inputRef={ref}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  )}
                  name="products"
                  control={control}
                />
                <Typography>Total Cost of Items Bought: ₦</Typography>
                {/* <FormControl variant="standard">
                  <FormLabel id="demo-error-radios">Payment Method:</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="payment-method"
                  >
                    <FormControlLabel
                      //   value="best"
                      control={<Radio />}
                      label="POS"
                    />
                    <FormControlLabel
                      //   value="worst"
                      control={<Radio />}
                      label="Cash"
                    />
                  </RadioGroup>
                </FormControl> */}
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <RadioGroup
                      row
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      sx={{ display: "flex" }}
                    >
                      <FormLabel
                        id="demo-error-radios"
                        sx={{ paddingTop: "10px", paddingRight: "10px" }}
                      >
                        Payment Method:
                      </FormLabel>
                      <FormControlLabel
                        value="pos"
                        control={<Radio />}
                        label="POS"
                      />
                      <FormControlLabel
                        value="cash"
                        control={<Radio />}
                        label="Cash"
                      />
                    </RadioGroup>
                  )}
                />
                <Button
                  //   fullWidth
                  disableElevation
                  variant="contained"
                  sx={{
                    padding: "10px",
                    fontSize: "16px",
                    fontWeight: 600,
                    height: "40px",
                    width: "200px",
                  }}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    // handleSubmit(onSubmit());
                    navigate(CashierPaths.RECEIPT);
                    setIsLoading(true);
                  }}
                  disabled={isLoading}
                  startIcon={
                    isLoading && (
                      <CircularProgress
                        size={16}
                        sx={{
                          fontSize: 1,
                        }}
                      />
                    )
                  }
                >
                  SELL
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MakeSales;
