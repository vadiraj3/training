import React, { useEffect, useState } from "react";
import { getKnowledgeInsights } from "../services/api";
import { Grid } from "@mui/material";
import UserCardFour from "../components/UserCardFour";

const TaskPageFour = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apidata = await getKnowledgeInsights();
        setData(apidata.data);
        console.log(apidata);
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
        <UserCardFour
          key={user.id}
          id={user.id}
          editor={user.editor}
          knowledgeBase={user.knowledgeBase}
        />
      ))}
    </Grid>
  );
};

export default TaskPageFour;
