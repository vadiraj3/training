import React, { useEffect, useState } from "react";
import { getBasicUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardTwo from "../assets/Components/UserCardTwo";

const TaskPageTwo = () => {
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
      {
        setLoading(false);
      }
    };
    dataFatch();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>something went wronge ...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardTwo
          key={user.id}
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

export default TaskPageTwo;
