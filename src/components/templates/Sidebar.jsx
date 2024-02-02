import { Box, Typography } from "@mui/material";

function Sidebar({ categories }) {
  return (
    <Box component="div" width="15%">
      <Typography
        variant="h6"
        pb={1}
        fontWeight="600"
        borderBottom="solid #991b1b"
      >
        دسته‌ بندی‌ها
      </Typography>

      {categories.data.slice(0, 6).map((item) => (
        <Box
          key={item._id}
          component="div"
          display="flex"
          alignItems="center"
          gap={2}
          my={3}
        >
          <img src={`/images/${item.icon}.svg`} />
          <Box component="div">{item.name}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default Sidebar;
