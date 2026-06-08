import React, { useEffect, useState } from "react";
import { getAdvancedUsers } from "../services/api";
import UserCard9 from "../../../../frontend/src/components/UserCard9";
import { Grid } from "@mui/material";

const TaskCard9 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getAdvancedUsers();
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
    return <div>Something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCard9
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          workHistory={user.workHistory}
          projects={user.projects}
        />
      ))}
    </Grid>
  );
};

export default TaskCard9;
