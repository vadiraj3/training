import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard4 from "../components/UserCard4";
import { getHobbiesUsers } from "../services/api";

const Task4 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      {
        setLoading === true;
      }
      try {
        const apiData = await getHobbiesUsers();
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

export default Task4;
