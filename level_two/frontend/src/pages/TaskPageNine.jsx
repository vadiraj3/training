import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Box, Grid } from "@mui/material";
import UserCardNine from "../Components/UserCardNine";
import { getOperationsUsers } from "../services/api";
import Loader from "../Components/Loader";

const TaskPageNine = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getOperationsUsers();
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading) {
    return <Loader loadingMessage="operations" />;
  }

  if (error) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">This is an error Alert.</Alert>
      </Stack>
    );
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardNine
          key={user.id}
          name={user.name}
          email={user.email}
          regionalOperations={user.regionalOperations}
        />
      ))}
    </Grid>
  );
};

export default TaskPageNine;
