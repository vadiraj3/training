import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCompanyUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCard6 from "../../../../frontend/src/components/UserCard6";

const TaskCard6 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
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
        <UserCard6
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          company={user.company}
          address={user.address}
        />
      ))}
    </Grid>
  );
};

export default TaskCard6;
