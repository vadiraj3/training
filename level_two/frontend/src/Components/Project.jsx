import { Box, Typography } from "@mui/material";
import React from "react";
import MileStone from "./MileStone";

const Project = ({ pro }) => {
  return (
    <Box>
      <Typography variant="h6">Project ID : {pro.projectId}</Typography>
      <Typography variant="h6">Name : {pro.name}</Typography>
      <Typography variant="h6" pb={1}>
        Status : {pro.status}
      </Typography>
      <Typography variant="h4">MILESTONES</Typography>
      {pro.milestones.map((stone) => (
        <MileStone stone={stone} />
      ))}
    </Box>
  );
};

export default Project;
