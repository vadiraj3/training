import React, { useEffect, useState } from "react";
import { getCampaignInsights } from "../services/api";
import { Grid } from "@mui/material";
import UserCardTwo from "../components/UserCardTwo";

const TaskPageTwo = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getCampaignInsights();
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
        <UserCardTwo
          key={user.id}
          id={user.id}
          owner={user.owner}
          email={user.email}
          campaign={user.campaign}
        />
      ))}
    </Grid>
  );
};

export default TaskPageTwo;
