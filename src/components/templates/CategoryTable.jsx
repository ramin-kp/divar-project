import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategories } from "../../services/admin";
import Loader from "./../Loader";
import customToast from "./../../utils/toast";
import { Box, Button } from "@mui/material";

function CategoryTable() {
  const { data, isLoading, error } = useQuery(["get-category"], getCategories);
  const queryClient = useQueryClient();
  const {
    mutate,
    data: deleteData,
    isLoading: isLoadingDelete,
    error: deleteError,
  } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-category"),
  });

  console.log({ deleteData, isLoadingDelete, deleteError });
  const useLinkClickHandler = (id) => {
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
              <Button
                variant="contained"
                color="mainColor"
                size="small"
                sx={{ fontWeight: "bold", fontSize: ".9rem" }}
                onClick={() => useLinkClickHandler(item._id)}
              >
                حذف دسته بندی
              </Button>
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
