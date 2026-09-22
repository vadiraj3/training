import React, { useEffect, useState } from "react";
import { getTasksInsights } from "../../services/api";
import { Button, Grid } from "@mui/material";
import TaskUserCard from "./TaskUserCard";
import { useNavigate } from "react-router-dom";

const TasksGetPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fatch = async () => {
      try {
        const apiData = await getTasksInsights();
        console.log(apiData);
        setData(apiData.data);
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
    return <div>Error...</div>;
  }
  return (
    <Grid container spacing={2}>
      <Button onClick={() => navigate("/tasks-post-page")}>
        Add New Tasks
      </Button>
      {data.map((task) => (
        <TaskUserCard
          key={task.id}
          id={task.id}
          title={task.title}
          dueDate={task.dueDate}
          priority={task.priority}
        />
      ))}
    </Grid>
  );
};

export default TasksGetPage;
