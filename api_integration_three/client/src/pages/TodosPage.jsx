import React, { useState } from "react";
import { useGetTodosQuery } from "../store/api/todosApi";
import { Button, Grid } from "@mui/material";
import TodosCard from "../components/TodosCard";
import TodosModal from "../components/TodosModal";

const TodosPage = () => {
  const { data, isLoading, isError } = useGetTodosQuery();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpen}>
        Add Todos
      </Button>
      <Grid container spacing={2}>
        {data.map((todos) => (
          <TodosCard
            key={todos.id}
            id={todos.id}
            title={todos.title}
            dueDate={todos.dueDate}
            priority={todos.priority}
            status={todos.status}
            subTasks={todos.subTasks}
          />
        ))}
      </Grid>

      {open && <TodosModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default TodosPage;
