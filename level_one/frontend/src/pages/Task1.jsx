import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { getSimpleUsers } from "../services/api";
import { Grid } from "@mui/material";

const Task1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const apiData = await getSimpleUsers();

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
    return <div>loading...</div>;
  }

  if (error === true) {
    return <div>Some thing went wrong </div>;
  }

  return (
    <Grid container spacing={2}>
      {data.data.map((user) => (
        <UserCard
          key={user}
          id={user.id}
          name={user.name}
          email={user.email}
          profile={user.profile}
          Avatar={user.Avatar}
        />
      ))}
    </Grid>
  );
};

export default Task1;
