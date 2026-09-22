import { Button, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const TaskUserCard = ({ id, title, dueDate, priority }) => {
  const navigate = useNavigate();

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/tasks/${id}`,
      );
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2">{dueDate}</Typography>
        <Typography variant="subtitle2">{priority}</Typography>

        <button onClick={() => navigate(`/tasks-put-page/${id}`)}>
          Update
        </button>

        <Button onClick={handelDelete}>Delete</Button>
      </Card>
    </Grid>
  );
};

export default TaskUserCard;
