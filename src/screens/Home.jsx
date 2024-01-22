import React, { useState } from "react";
import Header from "../components/Header";
import InputBar from "../components/InputBar";
import TodoList from "../components/TodoList";
import { Box, Paper } from "@mui/material";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [taskInput, setTaskInput] = useState("");

  const addTaskandler = () => {
    setTodos([
      ...todos,
      {
        value: taskInput,
        id: Date.now().toString(36).substring(4),
        isCompleted: false,
      },
    ]);
    setTaskInput("");
  };

  const UpdateHandler = () => {
    let newList = todos.map(function (currentItem) {
      if (currentItem.id === editId) {
        return {
          ...currentItem,
          value: taskInput,
        };
      } else {
        return currentItem;
      }
    });
    setTodos(newList);
    setEditId(null);
    setTaskInput("");
  };
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"50%"}
        margin={"0 auto"}
      >
        <Header />
        <Box marginTop={3}>
          <Paper elevation={2}>
            <Box paddingX={2} paddingY={4} minHeight={"300px"}>
              <InputBar
                addTaskandler={addTaskandler}
                UpdateHandler={UpdateHandler}
                setTaskInput={setTaskInput}
                taskInput={taskInput}
                editId={editId}
              />
              <TodoList
                todos={todos}
                setTodos={setTodos}
                setEditId={setEditId}
                setTaskInput={setTaskInput}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Home;
