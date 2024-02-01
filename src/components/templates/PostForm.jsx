import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../../services/admin";

function PostForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: "",
    images: "",
  });
  const { data } = useQuery(["get-category"], getCategories);

  const changeHandler = (event) => {
    const name = event.target.name;
    console.log(name);
  };

  return (
    <form
      onChange={changeHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "20px",
        width: "50%",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        py={3}
        borderBottom="solid #991b1b"
        width="30%"
      >
        ثبت محصول جدید
      </Typography>
      <TextField
        id="outline-basic"
        label="نام محصول را وارد کنید"
        variant="outlined"
        color="mainColor"
        name="title"
      />
      <TextField
        id="outline-basic"
        label="توضیحات محصول را وارد کنید"
        variant="outlined"
        multiline
        rows={4}
        color="mainColor"
        name="content"
      />
      <TextField
        id="outline-basic"
        label="قیمت محصول را وارد کنید"
        variant="outlined"
        color="mainColor"
        type="number"
        name="amount"
      />
      <TextField
        id="outline-basic"
        label="نام شهر را وارد کنید"
        variant="outlined"
        color="mainColor"
        name="city"
      />
      {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label" color="mainColor">
          دسته بندی
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label="دسته بندی "
          color="mainColor"
          size="medium"
          sx={{ maxWidth: "150px" }}
          name="category"
        >
          {data?.data.slice(0, 6).map((item) => (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      <select style={{ maxWidth: "150px" }} name="category">
        {data?.data.slice(0, 6).map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <Button
        variant="contained"
        component="label"
        sx={{ fontSize: "1rem", fontWeight: "600", width: "30%" }}
      >
        آپلود عکس محصول
        <input type="file" name="images" hidden />
      </Button>
      <Button
        variant="contained"
        component="label"
        color="mainColor"
        sx={{ fontSize: "1rem", fontWeight: "600", width: "30%" }}
      >
        ثبت محصول
      </Button>
    </form>
  );
}

export default PostForm;
