import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Loader from "./../Loader";
import { deleteCategory, getCategories } from "../../services/admin";
import customToast from "./../../utils/toast";

function CategoryTable() {
  const [categoryId, setCategoryId] = useState(null);
  const { data, isLoading } = useQuery(["get-category"], getCategories);
  const queryClient = useQueryClient();

  const {
    mutate,
    data: deleteData,
    isLoading: isLoadingDelete,
    error,
  } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-category"),
  });

  const ClickHandler = (id) => {
    setCategoryId(id);
    mutate(id);
  };

  useEffect(() => {
    if (deleteData?.status === 200) {
      customToast("success", "دسته بندی مورد نظر با موفقیت حذف شد");
    }
    if (error) {
      customToast("error", "مشکلی پیش آمده لطفا بعدا امتحان کنید");
    }
  }, [deleteData]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((item) => (
          <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={2}
            my={2}
            borderRadius={2}
            border="solid silver"
            key={item._id}
          >
            <Box component="div" display="flex" alignItems="center" gap={2}>
              <img
                src={`/images/${item.icon}.svg`}
                style={{ width: "25px", height: "25px" }}
              />

              <span>{item.name}</span>
            </Box>
            <Box
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
              width="350px"
            >
              <LoadingButton
                variant="contained"
                color="mainColor"
                size="small"
                sx={{ fontWeight: "bold", fontSize: ".9rem" }}
                onClick={() => ClickHandler(item._id)}
                loading={categoryId === item._id && isLoadingDelete}
              >
                حذف دسته بندی
              </LoadingButton>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  color: "#991b1b",
                }}
              >
                slug: {item.slug}
              </span>
            </Box>
          </Box>
        ))
      )}
    </div>
  );
}

export default CategoryTable;
