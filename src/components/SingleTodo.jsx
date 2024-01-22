import React from "react";
import { Box, Button, Typography } from "@mui/material";

const CustomCircle = () => {
  const circleStyle = {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    border: "2px solid #aa60ff",
    display: "inline-block",
    marginRight: "25px",
  };
  return (
    <>
      <div style={circleStyle}></div>
    </>
  );
};

const SingleTodo = ({ editHandler, removeTaskHandler, item }) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            color={"#aa60ff"}
            variant={"h6"}
            alignItems={"self-start"}
          >
            <CustomCircle />
            {item.value}
          </Typography>
        </Box>
        <Box>
          <Button
            size="small"
            variant="text"
            onClick={() => removeTaskHandler(item.id)}
          >
            Remove
          </Button>
          <Button
            size="small"
            variant="text"
            onClick={() => {
              editHandler(item);
            }}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SingleTodo;
