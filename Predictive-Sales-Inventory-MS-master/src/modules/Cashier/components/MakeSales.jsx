import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { CashierPaths } from "../../../routes/paths";
import api from "../../../api/api";
import Auth from "../../Auth/auth";
import { formatCurrency } from "../../../shared/Categpries";
// import FormHelperText from "@mui/material/FormHelperText";
// import Autocomplete from "@mui/material/Autocomplete";
// import ClearIcon from "@mui/icons-material/Clear";
// import Chip from "@mui/material/Chip";

const MakeSales = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = Auth;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    api.get("/api/products").then((response) => {
      const data = response.data.products;
      setProducts(data);
      console.log(data);
    });
  }, []);

  const validationSchema = yup.object().shape({
    quantitySold: yup.number().positive().integer().required(),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      quantitySold: "",
    },
  });

  const handleProductChange = (event) => {
    const productId = event.target.value;
    setSelectedProduct(productId);
    setProductId(productId);

    // find the selected product's price
    const selectedProduct = products.find(
      (product) => product._id === productId
    );
    setProductPrice(selectedProduct.price);
  };

  const handleQuantityChange = (event) => {
    const quantity = event.target.value;
    setTotalPrice(productPrice * quantity);
  };

  const onSubmit = async (payload) => {
    // const formData = new FormData();
    // const { quantitySold, productId } = payload;

    try {
      const response = await api.post(`/api/input-sale/${productId}`, payload);
      if (response.data.status === "OK") {
        navigate(CashierPaths.RECEIPT);
        toast.success("Product Successfully Added");
      }
    } catch (error) {
      toast.error(error.response.data.actualError[0]);
    }
  };

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

                {/* <Controller
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
                /> */}
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Product</InputLabel>
                  <Controller
                    render={({
                      field: { ref, ...fields },
                      fieldState: { error },
                    }) => (
                      <Select
                        labelId="product"
                        id="demo-simple-select"
                        label="Product"
                        {...fields}
                        // value={selectedProduct}
                        error={Boolean(error?.message)}
                        helperText={error?.message}
                        onChange={handleProductChange}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        {products?.map((product) => (
                          <MenuItem key={product._id} value={product._id}>
                            {" "}
                            {product.name}{" "}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                    name="product"
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
                      label="Quantity Sold"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      onChange={(event) => {
                        fields.onChange(event);
                        handleQuantityChange(event);
                      }}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                    />
                  )}
                  name="quantitySold"
                  control={control}
                />
                <Typography>
                  Total Cost of Items Bought: {formatCurrency(totalPrice)}{" "}
                </Typography>

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
                    handleSubmit(onSubmit());
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
