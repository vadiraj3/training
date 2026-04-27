import React, { useEffect, useState } from "react";
import { getReviewsUsers } from "../services/api";
import { Grid } from "@mui/material";
import UserCardSix from "../Components/UserCardSix";

const TaskPageSix = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getReviewsUsers();
        setData(apiData.data);
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
    return <div>somethimg went wronge...</div>;
  }
  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCardSix
          key={user.id}
          name={user.name}
          email={user.email}
          performance={user.performance}
        />
      ))}
    </Grid>
  );
};

export default TaskPageSix;
