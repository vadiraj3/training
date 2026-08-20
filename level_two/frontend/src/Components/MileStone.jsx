import { Box, Typography } from "@mui/material";
import React from "react";

const MileStone = ({ stone }) => {
  return (
    <Box>
      <Typography variant="h6">status : {stone.title}</Typography>
      <Typography variant="h6">dueDate : {stone.dueDate}</Typography>
      <Typography variant="h6" pb={2}>
        completion : {stone.completion}
      </Typography>
      {stone.blockers.map((block) => (
        <Typography variant="h6" pb={2}>
          Blockers : {block}
        </Typography>
      ))}
    </Box>
  );
};

export default MileStone;
