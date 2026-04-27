import React, { useEffect, useState } from "react";
import { getFinanceUsers } from "../services/api";
import { Box, Grid } from "@mui/material";
import UserCardEight from "../Components/UserCardEight";
import CircularProgress from "@mui/material/CircularProgress";

const TaskPageEight = () => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const datafatch = async () => {
      try {
        const apiData = await getFinanceUsers();
        setdata(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    datafatch();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    );
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardEight
          key={user.id}
          name={user.name}
          email={user.email}
          compensation={user.compensation}
        />
      ))}
    </Grid>
  );
};

export default TaskPageEight;
