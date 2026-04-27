import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getClientsUsers } from "../services/api";
import UserCardSeven from "../Components/UserCardSeven";

const TaskPageSeven = () => {
  const [data, setData] = useState();
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getClientsUsers();
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setloading(false);
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
        <UserCardSeven
          key={user.id}
          name={user.name}
          email={user.email}
          clientPortfolio={user.clientPortfolio}
        />
      ))}
    </Grid>
  );
};

export default TaskPageSeven;
