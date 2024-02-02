import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Main({ posts }) {
  console.log(posts);
  return (
    <Grid container spacing={3} mb={5}>
      {posts.data.posts.map((item) => (
        <Grid item xs={6} md={4} key={item._id}>
          <Card>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                p: "20px",
              }}
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL}${item.images[0]}`}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",

                  borderRadius: "10px",
                }}
              />

              <Box
                component="div"
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="space-between"
              >
                <Typography variant="p" fontWeight="600">
                  {item.options.title}
                </Typography>
                <Box
                  component="div"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="space-between"
                >
                  <span>تومان {item.amount.toLocaleString()}</span>
                  <span>{item.options.city}</span>
                </Box>
              </Box>
            </Box>
            <CardActions sx={{ width: "100%" }}>
              <Button
                size="small"
                variant="contained"
                color="mainColor"
                sx={{ width: "100%" }}
              >
                مشخصات
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Main;
