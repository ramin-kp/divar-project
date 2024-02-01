import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useEffect, useState } from "react";
import customToast from "../../utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCategory } from "../../services/admin";

function CategoryForm() {
  const [categoryData, setCategoryData] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const queryClient = useQueryClient();
  const { data, error, isLoading, mutate } = useMutation(postCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-category"),
  });

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

  useEffect(() => {
    if (data?.status === 201) {
      customToast("success", "دسته بندی مورد نظر با موفقیت ایجاد شد");
    } else if (error) {
      customToast("error", "مشکلی پیش آمده لطفا بعدا دوباره امتحان کنید");
    }
  }, [data]);

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: "25px",
        paddingTop: "10px",
        borderTop: "solid #991b1b",
      }}
    >
      <h1 style={{ padding: "14px 0", borderBottom: "solid #991b1b" }}>
        دسته بندی جدید
      </h1>
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

      <LoadingButton
        variant="contained"
        type="submit"
        loading={isLoading}
        disabled={isLoading}
        color="mainColor"
      >
        <span>ایجاد</span>
      </LoadingButton>
    </form>
  );
}

export default CategoryForm;
