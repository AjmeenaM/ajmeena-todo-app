import React from "react";
import SingleTodo from "./SingleTodo";
import { Box } from "@mui/material";

const TodoList = ({ todos, setTodos, setEditId, setTaskInput }) => {
  const editHandler = (item) => {
    setEditId(item.id);
    setTaskInput(item.value);
  };
  const removeTaskHandler = (id) => {
    const newList = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newList);
  };

  return (
    <Box marginTop={4}>
      {todos.map((item) => {
        return (
          <SingleTodo
            key={item.id}
            item={item}
            editHandler={editHandler}
            removeTaskHandler={removeTaskHandler}
          />
        );
      })}
    </Box>
  );
};

export default TodoList;
