import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCardFour from "../Components/UserCardFour";
import { getScheduleUsers } from "../services/api";

const TaskPageFour = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getScheduleUsers();
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
    return <div> Something went wronge ...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardFour
          key={user.id}
          name={user.name}
          email={user.email}
          weeklySchedule={user.weeklySchedule}
        />
      ))}
    </Grid>
  );
};

export default TaskPageFour;
