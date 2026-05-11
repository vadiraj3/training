import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Box, Grid } from "@mui/material";
import { getStrategyUsers } from "../services/api";
import UserCardTen from "../Components/UserCardTen";
import Loader from "../Components/Loader";
import Error from "./Error";

const TaskPageTen = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getStrategyUsers();
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
    return <Loader loadingMessage="strategies" />;
  }

  if (error) {
    return <Error errorMessage="Error loading stra" />;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardTen
          key={user.id}
          name={user.name}
          email={user.email}
          strategyProfile={user.strategyProfile}
        />
      ))}
    </Grid>
  );
};

export default TaskPageTen;
