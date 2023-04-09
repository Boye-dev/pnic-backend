import React from "react";
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
import Drawer from "../../../../shared/Drawer";
import api from "../../../../api/api.js";
import { toast } from "react-toastify";
// import { useMutation, useQueryClient } from "react-query";

const NewProduct = ({ open, close }) => {
  const [mainImage, setMainImage] = React.useState([]);

  const categories = [
    "Beverages",
    "Pasteries",
    "Canned Foods",
    "Dairy",
    "Baking Ingredients",
    "Cereals",
    "Frozen Foods",
    "Fruits and Vegetables",
    "Detergents",
    "Toiletries",
    "Fresh Food",
    "Clothing and Apparel",
    "Electronics",
    "Furniture and Decor",
    "Beauty and Cosmetics",
    "Books and Stationery",
    "Sports and Fitness",
    "Toys and Games",
    "Food and Beverages",
    "Gifts and Souvenirs",
  ];

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    unit: yup.number().positive().integer().required(),
    category: yup.string().required(),
    price: yup.number().required(),
    // mainImage: yup.mixed().required(),
  });

  const onImageChange1 = (e) => {
    const [file] = e.target.files;
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setMainImage(imageFile);
      };
      img.onerror = () => {
        return false;
      };

      img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
  };

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

  const onSubmit = async (payload, e) => {
    e.preventDefault();
    const formData = new FormData();
    const { name, description, price, unit, category } = payload;

    formData.append("name", name);
    formData.append("unit", unit);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("mainImage", mainImage);

    try {
      const response = await api.post("/api/addProduct", formData);
      if (response.data.status === "OK") {
        close;
        toast.success("Product Successfully Added");
      }
    } catch (error) {
      toast.error(error.response.data.actualError[0]);
    }
  };

  return (
    <>
      {" "}
      <Drawer
        open={open}
        onClose={close}
        title="Add Products"
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
                  label="Product Name"
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
            <FormControl>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Controller
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <Select
                    labelId="category"
                    id="demo-simple-select"
                    label="Category"
                    {...fields}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                        },
                      },
                    }}
                  >
                    {categories?.map((category) => (
                      <MenuItem key={category} value={category}>
                        {" "}
                        {category}{" "}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                name="category"
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
              name="price"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Unit"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="unit"
              control={control}
            />
            <Controller
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Description"
                  fullWidth
                  {...fields}
                  inputRef={ref}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
              name="description"
              control={control}
            />
            <label htmlFor={"picture"} style={{ cursor: "pointer" }}>
              {" "}
              Product Image
            </label>
            <input
              type="file"
              id="picture"
              style={{ display: "none" }}
              onChange={onImageChange1}
            />
          </Stack>
        </form>
      </Drawer>
    </>
  );
};

export default NewProduct;
