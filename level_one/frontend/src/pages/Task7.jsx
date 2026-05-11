import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard7 from "../components/UserCard7";
import { getEducationUsers } from "../services/api";

const Task7 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      {
        loading === true;
      }
      try {
        const apiData = await getEducationUsers();
        setData(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  if (error === true) {
    return <div>something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.data.map((user) => (
        <UserCard7
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          education={user.education}
        />
      ))}
    </Grid>
  );
};

export default Task7;
