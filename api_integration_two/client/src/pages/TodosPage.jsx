import React, { useEffect, useState } from "react";
import { getTodos } from "../services/todosApi";
import { Button, Grid } from "@mui/material";
import TodosCard from "../components/TodosCard";
import TodosModal from "../components/TodosModal";

const TodosPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fatch = async () => {
      try {
        const apidata = await getTodos();
        console.log(apidata);
        setData(apidata.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Todos
      </Button>
      <Grid container spacing={2}>
        {data.map((todo) => (
          <TodosCard
            key={todo.id}
            id={todo.id}
            title={todo.title}
            dueDate={todo.dueDate}
            priority={todo.priority}
            status={todo.status}
            subTasks={todo.subTasks}
          />
        ))}
      </Grid>

      {open && <TodosModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default TodosPage;
