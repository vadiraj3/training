import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSkillsUsers } from "../services/api";
import UserCard5 from "../components/UserCard5";

const Task5 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      {
        setLoading === true;
      }
      try {
        const apiData = await getSkillsUsers();
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
    return <div>something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.data.map((user) => (
        <UserCard5
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </Grid>
  );
};

export default Task5;
