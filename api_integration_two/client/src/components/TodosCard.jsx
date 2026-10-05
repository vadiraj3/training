import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TodosModal from "./TodosModal";
import { deleteTodos } from "../services/todosApi";

const TodosCard = ({ id, title, dueDate, priority, status, subTasks }) => {
  const [openTodosModal, setOpenTodosModal] = useState(false);

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await deleteTodos(id);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <Stack spacing={2} p={2}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">{dueDate}</Typography>
          <Typography variant="subtitle2">{priority}</Typography>
          <Typography variant="subtitle2">{status}</Typography>
          {subTasks.map((tasks, index) => (
            <Box key={index} p={2}>
              <Typography variant="subtitle2">{tasks.title}</Typography>
              <Typography variant="subtitle2">
                Done{tasks.done ? "" : ""}
              </Typography>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" onClick={() => setOpenTodosModal(true)}>
              Edit
            </Button>
            <Button variant="contained" onClick={handelDelete}>
              Delete
            </Button>
          </Box>
        </Stack>
      </Card>
      {openTodosModal && (
        <TodosModal
          open={openTodosModal}
          setOpen={setOpenTodosModal}
          id={id}
          propTitle={title}
          propDueDate={dueDate}
          PropPriority={priority}
          propStatus={status}
          propSubTasks={subTasks}
        />
      )}
    </Grid>
  );
};

export default TodosCard;
