import React, { useEffect, useState } from "react";
import { getMediumUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardThree from "../assets/Components/UserCardThree";

const TaskPageThree = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getMediumUsers();
        setData(apiData.data);
        console.log(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      {
        setLoading(false);
      }
    };
    dataFatch();
  }, []);

  if (loading) {
    return <div>loading ...</div>;
  }

  if (error) {
    return <div>something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardThree
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

export default TaskPageThree;
