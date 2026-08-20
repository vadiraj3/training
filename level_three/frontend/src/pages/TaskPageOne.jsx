import React, { useEffect, useState } from "react";
import { getProfileInsights } from "../services/api";
import { Grid } from "@mui/material";
import UserCardOne from "../components/UserCardOne";

const TaskPageOne = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getProfileInsights();
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
    return <div>Loading ... </div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardOne
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          profile={user.profile}
          devices={user.devices}
          badges={user.badges}
          activity={user.activity}
        />
      ))}
    </Grid>
  );
};

export default TaskPageOne;
