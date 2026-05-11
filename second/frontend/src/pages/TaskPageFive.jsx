import React, { useEffect, useState } from "react";
import { getAdvancedUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardFive from "../assets/Components/UserCardFive";

const TaskPageFive = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const datafatch = async () => {
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
    datafatch();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardFive
          key={user.id}
          name={user.name}
          email={user.email}
          workHistory={user.workHistory}
        />
      ))}
    </Grid>
  );
};

export default TaskPageFive;
