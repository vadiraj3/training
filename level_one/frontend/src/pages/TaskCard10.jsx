import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getComplexUsers } from "../services/api";
import UserCard10 from "../../../../frontend/src/components/UserCard10";

const TaskCard10 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getComplexUsers();
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
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }
  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <UserCard10
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          profile={user.profile}
          address={user.address}
          contact={user.contact}
          social={user.social}
          workHistory={user.workHistory}
          projects={user.projects}
          education={user.education}
          hobbies={user.hobbies}
          skills={user.skills}
        />
      ))}
    </Grid>
  );
};

export default TaskCard10;
