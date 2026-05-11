import React, { useEffect, useState } from "react";
import { getCompanyUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardSeven from "../assets/Components/UserCardSeven";

const TaskPageSeven = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const datafatch = async () => {
      try {
        const apiData = await getCompanyUsers();
        setData(apiData.data);
        console.log(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    datafatch();
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
        <UserCardSeven
          key={user.id}
          name={user.name}
          email={user.email}
          company={user.company}
        />
      ))}
    </Grid>
  );
};

export default TaskPageSeven;
