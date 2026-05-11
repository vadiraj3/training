import React, { useEffect, useState } from "react";
import { getFullUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCard8 from "../components/UserCard8";

const Task8 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      {
        loading === true;
      }
      try {
        const apiData = await getFullUsers();
        setData(apiData);
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
      {data.data.map((user) => (
        <UserCard8
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          hobbies={user.hobbies}
          skills={user.skills}
          education={user.education}
        />
      ))}
    </Grid>
  );
};

export default Task8;
