import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getHobbiesUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCard4 from "../../../../frontend/src/components/UserCard4";

const TaskCard4 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getHobbiesUsers();
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
    return <div>something went wronge..</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCard4
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          profile={user.profile}
          hobbies={user.hobbies}
        />
      ))}
    </Grid>
  );
};

export default TaskCard4;
