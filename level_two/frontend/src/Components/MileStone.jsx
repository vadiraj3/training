import { Box, Typography } from "@mui/material";
import React from "react";

const MileStone = ({ stone }) => {
  return (
    <Box>
      <Typography variant="h6">Titla : {stone.title}</Typography>
      <Typography variant="h6">Duedate : {stone.dueDate}</Typography>
      <Typography variant="h6" pb={1}>
        Completion : {stone.completion}
      </Typography>
      {stone.blockers.map((block) => (
        <Typography variant="h6" pb={1}>
          {block}
        </Typography>
      ))}
    </Box>
  );
};

export default MileStone;
