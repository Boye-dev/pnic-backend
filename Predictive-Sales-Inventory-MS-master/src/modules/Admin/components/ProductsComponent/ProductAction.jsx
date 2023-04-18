import React from "react";
import Drawer from "../../../../shared/Drawer";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../../api/api.js";
import { toast } from "react-toastify";

const ProductAction = ({ open, close, productId }) => {
  const validationSchema = yup.object().shape({
    vendorName: yup.string().required(),
    quantity: yup.number().positive().integer().required(),
    price: yup.number().required(),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      vendorName: "",
      quantity: "",
      price: "",
      productId: productId,
    },
  });

  console.log("drawer", productId);

  const onSubmit = async (payload, e) => {
    e.preventDefault();
    // const formData = new FormData();
    // const { vendorName, price, quantity, productId } = payload;

    // formData.append("vendorName", vendorName);
    // formData.append("productId", productId);
    // formData.append("quantity", quantity);
    // formData.append("price", price);

    try {
      const response = await api.post("/api/purchase", payload);
      if (response.data.status === "OK") {
        close;
        toast.success("Purchase Successfully Started");
      }
    } catch (error) {
      toast.error(error.response.data.actualError[0]);
    }
  };

  return (
    <>
      <Drawer
        title="Purchase Product"
        open={open}
        onClose={close}
        onOk={handleSubmit(onSubmit)}
        okText="Purchase Product"
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
                  label="Vendor Name"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="vendorName"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Price"
                  InputProps={{
                    startAdornment: "₦",
                    inputProps: {
                      min: 0,
                    },
                  }}
                  step="0.01"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="products[0].price"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Quantity"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="products[0].quantity"
              control={control}
            />

            <Controller
              name="products[0].productId"
              control={control}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <input
                  type="text"
                  {...fields}
                  placeholder="Product ID"
                  style={{ display: "none" }}
                />
              )}
            />
          </Stack>
        </form>
      </Drawer>
    </>
  );
};

export default ProductAction;
