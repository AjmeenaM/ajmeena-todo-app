import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box marginTop={8}>
      <Typography
        paddingY={2}
        bgcolor={"#aa60ff"}
        variant={"h6"}
        textAlign={"center"}
        color={"#ffffff"}
        fontWeight={"bold"}
      >
        My todos
      </Typography>
    </Box>
  );
};

export default Header;
