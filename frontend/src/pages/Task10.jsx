import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getComplexUsers } from "../services/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UserCard10 from "../components/UserCard10";

const Task10 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      {
        loading === true;
      }
      try {
        const apiData = await getComplexUsers();
        setData(apiData.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading) {
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return <div>No work history found...</div>;
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
          education={user.education}
          hobbies={user.hobbies}
          skills={user.skills}
        />
      ))}
    </Grid>
  );
};

export default Task10;
