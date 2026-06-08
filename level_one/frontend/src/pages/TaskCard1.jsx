import React, { useEffect, useState } from "react";
import { getSimpleUsers } from "../services/api";
import UserCard from "../../../../frontend/src/components/UserCard";
import { Grid } from "@mui/material";

const TaskCard1 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getSimpleUsers();
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
    return <div>something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          profile={user.profile}
        />
      ))}
    </Grid>
  );
};

export default TaskCard1;
