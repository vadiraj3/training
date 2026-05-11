import React, { useEffect, useState } from "react";
import { getOrgUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardOne from "../Components/UserCardOne";

const TaskPageOne = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getOrgUsers();
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
    return <div>Something went wronge ...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardOne
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          organization={user.organization}
          departments={user.departments}
        />
      ))}
    </Grid>
  );
};

export default TaskPageOne;
