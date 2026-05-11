import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard3 from "../components/UserCard3";
import { getMediumUsers } from "../services/api";

const Task3 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      {
        setLoading === true;
      }
      try {
        const apiData = await getMediumUsers();
        setData(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFetch();
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

export default Task3;
