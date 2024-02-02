import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";

import Loader from "./../Loader";
import { deletePost, getPost } from "../../services/user";
import customToast from "../../utils/toast";

function PostTable() {
  const [postId, setPostId] = useState(null);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["get-post-list"], getPost);

  const {
    data: deleteData,
    isLoading: isDeleteLoading,
    error,
    mutate,
  } = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries("get-post-list"),
  });

  const clickHandler = (id) => {
    setPostId(id);
    mutate(id);
  };
  useEffect(() => {
    if (deleteData?.status === 200) {
      customToast("success", `${deleteData.data.message}`);
    } else if (error) {
      customToast("error", "لطفا بعدا دوباره امتحان کنید");
    }
  }, [deleteData]);

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "10px 0",
        borderTop: "solid #991b1b",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>آگهی‌های ثبت شده</h3>
          {data.data.posts.map((item) => (
            <Box
              key={item._id}
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              my={4}
              border="solid silver"
              borderRadius="10px"
            >
              <Box component="div" display="flex">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${item.images}`}
                  style={{
                    width: "100px",
                    height: "70px",
                    borderRadius: "6px",
                  }}
                />
                <Box
                  component="div"
                  display="flex"
                  flexDirection="column"
                  gap={0.5}
                  ml={3}
                >
                  <Typography variant="p" fontSize="1rem" fontWeight="600">
                    {item.options.title}
                  </Typography>
                  <Typography
                    variant="p"
                    width="300px"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      color: "#6b7280",
                    }}
                  >
                    {item.options.content}
                  </Typography>
                  <Typography variant="p" fontSize="1rem" color="silver">
                    {item.options.city}
                  </Typography>
                </Box>
              </Box>
              <LoadingButton
                variant="contained"
                color="mainColor"
                loading={item._id === postId && isDeleteLoading}
                onClick={() => clickHandler(item._id)}
              >
                حذف آگهی
              </LoadingButton>
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={0.5}
              >
                <Typography variant="p" fontSize="1rem" fontWeight="600">
                  {new Date(item.createdAt).toLocaleDateString("fa-ir")}
                </Typography>
                <Typography variant="p" fontSize="1rem" color="#991b1b">
                  تومان {item.amount.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </>
      )}
    </div>
  );
}

export default PostTable;
