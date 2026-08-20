// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getKnowledgeInsights } from "../services/api";
import { Grid } from "@mui/material";
import UserCardSix from "../components/UserCardSix";

const TaskPageSix = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getKnowledgeInsights();
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
        <UserCardSix
          key={user.id}
          id={user.id}
          editor={user.editor}
          knowledgeBase={user.knowledgeBase}
        />
      ))}
    </Grid>
  );
};

export default TaskPageSix;
