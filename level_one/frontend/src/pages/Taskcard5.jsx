import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getSkillsUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCard5 from "../../../../frontend/src/components/UserCard5";

const Taskcard5 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apidata = await getSkillsUsers();
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
    return <div>something went wronge..</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
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

export default Taskcard5;
