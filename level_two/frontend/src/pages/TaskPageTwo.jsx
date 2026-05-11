import React, { useEffect, useState } from "react";
import { getProjectsUsers } from "../services/api";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Grid } from "@mui/material";
import UserCardTwo from "../Components/UserCardTwo";

const TaskPageTwo = () => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getProjectsUsers();
        setdata(apiData.data);
        console.log(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
            aria-label="Loading…"
          />
        </Box>
      </div>
    );
  }

  if (error) {
    return <div>something went wronge</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardTwo
          key={user.id}
          name={user.name}
          email={user.email}
          projects={user.projects}
        />
      ))}
    </Grid>
  );
};

export default TaskPageTwo;
