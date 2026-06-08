import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getMediumUsers } from "../services/api";
import UserCard3 from "../../../../frontend/src/components/UserCard3";

const TaskCard3 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const datafatch = async () => {
      try {
        const apiData = await getMediumUsers();
        setData(apiData.data);
        console.log(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    datafatch();
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
        <UserCard3
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          contact={user.contact}
          profile={user.profile}
        />
      ))}
    </Grid>
  );
};

export default TaskCard3;
