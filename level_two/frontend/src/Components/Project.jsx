import { Box, Typography } from "@mui/material";
import React from "react";
import MileStone from "./MileStone";

const Project = ({ pro }) => {
  return (
    <Box>
      <Typography variant="h6">projectId : {pro.projectId}</Typography>
      <Typography variant="h6">name : {pro.name}</Typography>
      <Typography variant="h6" pb={2}>
        status : {pro.status}
      </Typography>
      <Typography variant="h5">MILESTONE</Typography>
      {pro.milestones.map((stone) => (
        <MileStone stone={stone} />
      ))}
    </Box>
  );
};

export default Project;
