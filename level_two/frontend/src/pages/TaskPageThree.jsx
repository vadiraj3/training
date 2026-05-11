import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCardThree from "../Components/UserCardThree";
import { getContactsUsers } from "../services/api";

const TaskPageThree = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getContactsUsers();
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
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Something went wronge ...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardThree
          key={user.id}
          name={user.name}
          email={user.email}
          communication={user.communication}
        />
      ))}
    </Grid>
  );
};

export default TaskPageThree;
