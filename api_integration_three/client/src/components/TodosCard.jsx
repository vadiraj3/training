import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDeleteTodosMutation } from "../store/api/todosApi";
import TodosModal from "./TodosModal";

const TodosCard = ({ id, title, dueDate, priority, status, subTasks }) => {
  const [todosModalOpen, setTodosModalOpen] = useState(false);

  const [todosDelete] = useDeleteTodosMutation();

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await todosDelete(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <Box p={2}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">{dueDate}</Typography>
          <Typography variant="subtitle2">{priority}</Typography>
          <Typography variant="subtitle2">{status}</Typography>
          {subTasks.map((task, index) => (
            <Box key={index}>
              <Typography variant="subtitle2">{task.title}</Typography>
              <Typography variant="subtitle2">
                DONE {task.done ? "" : ""}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={() => setTodosModalOpen(true)}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Card>

      {todosModalOpen && (
        <TodosModal
          open={todosModalOpen}
          setOpen={setTodosModalOpen}
          id={id}
          propTitle={title}
          propDueDate={dueDate}
          propPriority={priority}
          propStatus={status}
          propSubTasks={subTasks}
        />
      )}
    </Grid>
  );
};

export default TodosCard;
