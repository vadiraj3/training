import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard6 from "../components/UserCard6";
import { getCompanyUsers } from "../services/api";

const Task6 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      {
        loading === true;
      }
      try {
        const apiData = await getCompanyUsers();
        setData(apiData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  if (error === true) {
    return <div>something went wronge...</div>;
  }
  return (
    <Grid container spacing={2}>
      {data.data.map((user) => (
        <UserCard6
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          company={user.company}
          address={user.address}
          employees={user.employees}
          founded={user.founded}
        />
      ))}
    </Grid>
  );
};

export default Task6;
