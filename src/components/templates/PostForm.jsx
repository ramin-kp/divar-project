import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../../services/admin";
import customToast from "./../../utils/toast";
import axios from "axios";
import { getCookie } from "../../utils/cookie";

function PostForm() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: "",
    images: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useQuery(["get-category"], getCategories);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({
        ...form,
        [name]: event.target.value,
      });
    } else {
      const validate = event?.target.files[0].type.split("/")[0] !== "image";
      if (validate) {
        customToast("error", "لطفا عکس محصول را وارد کنید");
        return;
      }
      setForm({
        ...form,
        [name]: event.target.files[0],
      });
    }
  };
  useEffect(() => {
    setForm({
      title: "",
      content: "",
      amount: "",
      city: "",
      category: "",
      images: "",
    });
  }, [isLoading]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !form.amount ||
      !form.category ||
      !form.city ||
      !form.content ||
      !form.images ||
      !form.title
    ) {
      customToast("error", "تمام فیلد هارو پر کنید");
      return;
    }
    setIsLoading(true);
    const token = getCookie("accessToken");
    const formData = new FormData();

    for (let i in form) {
      formData.append(i, form[i]);
    }
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        customToast("success", "محصول جدید با موفقیت ثبت شد");
        setIsLoading(false);
      })
      .catch((err) => {
        customToast("مشکلی پیش آمده است");
        setIsLoading(false);
      });
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
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
        value={form.title}
      />
      <TextField
        id="outline-basic"
        label="توضیحات محصول را وارد کنید"
        variant="outlined"
        multiline
        rows={4}
        color="mainColor"
        name="content"
        value={form.content}
      />
      <TextField
        id="outline-basic"
        label="قیمت محصول را وارد کنید"
        variant="outlined"
        color="mainColor"
        type="number"
        name="amount"
        value={form.amount}
      />
      <TextField
        id="outline-basic"
        label="نام شهر را وارد کنید"
        variant="outlined"
        color="mainColor"
        name="city"
        value={form.city}
      />
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label" color="mainColor">
          دسته بندی
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label="دسته بندی "
          color="mainColor"
          size="medium"
          name="category"
          value={form.category}
          onChange={changeHandler}
          sx={{ maxWidth: "150px" }}
        >
          {data?.data.slice(0, 6).map((item) => (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        component="label"
        endIcon={<CloudUploadIcon />}
        color="mainColor"
        sx={{ fontSize: "1rem", fontWeight: "600", width: "30%" }}
      >
        آپلود عکس محصول
        <input type="file" name="images" hidden />
      </Button>
      <LoadingButton
        variant="contained"
        type="submit"
        color="mainColor"
        loading={isLoading}
        disabled={isLoading}
        sx={{ fontSize: "1rem", fontWeight: "600", width: "30%" }}
      >
        <span>ثبت محصول</span>
      </LoadingButton>
    </form>
  );
}

export default PostForm;
