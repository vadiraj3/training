import React, { useEffect, useState } from "react";
import { getHobbiesUsers } from "../services/api";
import { Grid } from "@mui/material";
import { UserCardFour } from "../assets/Components/UserCardFour";

const TaskPageFour = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getHobbiesUsers();
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
        <UserCardFour
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

export default TaskPageFour;
