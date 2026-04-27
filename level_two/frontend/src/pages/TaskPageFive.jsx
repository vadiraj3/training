import React, { useEffect, useState } from "react";
import { getAssetsUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardfive from "../Components/UserCardfive";

const TaskPageFive = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getAssetsUsers();
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
    return <div>Loading ...</div>;
  }

  if (error) {
    <div>something went wronge...</div>;
  }
  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardfive
          key={user.id}
          name={user.name}
          email={user.email}
          assets={user.assets}
        />
      ))}
    </Grid>
  );
};

export default TaskPageFive;
