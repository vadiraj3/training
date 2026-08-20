/* eslint-disable no-unused-vars */
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCardFive from "../components/UserCardFive";
import { getRiskInsights } from "../services/api";

const TaskPageFive = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getRiskInsights();
        setData(apiData.data);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardFive
          key={user.id}
          id={user.id}
          owner={user.owner}
          riskRegister={user.riskRegister}
        />
      ))}
    </Grid>
  );
};

export default TaskPageFive;
