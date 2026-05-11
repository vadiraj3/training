import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard2";
import { getBasicUsers } from "../services/api";
import UserCard2 from "../components/UserCard2";

const Task2 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const apiData = await getBasicUsers();
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
    return <div>Wating..</div>;
  }

  if (error === true) {
    return <div>Something went wronge</div>;
  }
  return (
    <Grid container spacing={2}>
      {data.data.map((user) => (
        <UserCard2
          key={user}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          contact={user.contact}
        />
      ))}
    </Grid>
  );
};

export default Task2;
