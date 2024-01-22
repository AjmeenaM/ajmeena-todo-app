import { Box, TextField, Button, Paper } from "@mui/material";
import React from "react";

const InputBar = ({
  addTaskandler,
  UpdateHandler,
  setTaskInput,
  taskInput,
  editId,
}) => {
  return (
    <>
      <Box alignItems={"center"} display={"flex"}>
        <Box flexGrow={4}>
          <TextField
            fullWidth
            size="small"
            placeholder="write your todos"
            variant="outlined"
            onChange={(e) => setTaskInput(e.target.value)}
            value={taskInput}
          ></TextField>
        </Box>
        <Box marginLeft={1} display={"flex"} justifyContent={"flex-end"}>
          {editId ? (
            <Button size="small" variant={"contained"} onClick={UpdateHandler}>
              Update
            </Button>
          ) : (
            <Button
              disabled={!taskInput}
              size="small"
              variant="outlined"
              onClick={addTaskandler}
            >
              ADD
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default InputBar;
