import { Button, TextField } from "@mui/material";

import { useState } from "react";
import customToast from "../../utils/toast";
import { useMutation } from "@tanstack/react-query";
import { postCategory } from "../../services/admin";

function CategoryForm() {
  const [categoryData, setCategoryData] = useState({
    name: "",
    slug: "",
    icon: "",
  });
  const { data, error, isLoading, mutate } = useMutation(postCategory);
  console.log({ data, isLoading, error });
  const changeHandler = (event) => {
    setCategoryData({
      ...categoryData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!categoryData.name || !categoryData.slug || !categoryData.icon) {
      customToast("error", "لطفا همه فیلد هارو پر کنید");
      return;
    }
    mutate(categoryData);
  };
  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: "20px",
        paddingTop: "10px",
        borderTop: "solid #991b1b",
      }}
    >
      <h1>دسته بندی</h1>
      <TextField
        id="outlined-basic"
        label=" دسته بندی خود را وارد کنید"
        variant="outlined"
        name="name"
        color="mainColor"
      />
      <TextField
        id="outlined-basic"
        label="اسلاگ مورد نظر را وارد کنید"
        variant="outlined"
        name="icon"
        color="mainColor"
      />
      <TextField
        id="outlined-basic"
        label="آیکون مورد نظر را وارد کنید"
        variant="outlined"
        name="slug"
        color="mainColor"
      />
      <Button variant="contained" type="submit" color="mainColor">
        ایجاد
      </Button>
    </form>
  );
}

export default CategoryForm;
