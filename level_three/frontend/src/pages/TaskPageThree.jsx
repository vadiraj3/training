import React, { useEffect, useState } from "react";
import { getWarehouseInsights } from "../services/api";
import { Grid } from "@mui/material";
import UserCardThree from "../components/UserCardThree";

const TaskPageThree = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getWarehouseInsights();
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
    <div>Something went wronge...</div>;
  }
  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardThree
          key={user.id}
          id={user.id}
          owner={user.owner}
          warehouse={user.warehouse}
        />
      ))}
    </Grid>
  );
};

export default TaskPageThree;
