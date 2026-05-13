import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAdvancedUsers } from "../services/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UserCard9 from "../components/UserCard9";

const Task9 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      {
        loading === true;
      }
      try {
        const apiData = await getAdvancedUsers();
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

export default Task9;
