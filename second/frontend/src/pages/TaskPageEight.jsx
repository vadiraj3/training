import React, { useEffect, useState } from "react";
import { getEducationUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardEight from "../assets/Components/UserCardEight";

const TaskPageEight = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apidata = await getEducationUsers();
        setData(apidata.data);
        console.log(apidata);
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
        <UserCardEight
          key={user.id}
          name={user.name}
          email={user.email}
          education={user.education}
        />
      ))}
    </Grid>
  );
};

export default TaskPageEight;
