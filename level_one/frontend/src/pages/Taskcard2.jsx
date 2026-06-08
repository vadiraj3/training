import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getBasicUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCard2 from "../../../../frontend/src/components/UserCard2";

const Taskcard2 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getBasicUsers();
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
    return <div>something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCard2
          key={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          contact={user.contact}
        />
      ))}
    </Grid>
  );
};

export default Taskcard2;
