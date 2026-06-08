import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getEducationUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCard7 from "../../../../frontend/src/components/UserCard7";

const TaskCard7 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getEducationUsers();
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
      {data.map((item) => (
        <UserCard7
          key={item.id}
          id={item.id}
          name={item.name}
          email={item.email}
          education={item.education}
        />
      ))}
    </Grid>
  );
};

export default TaskCard7;
