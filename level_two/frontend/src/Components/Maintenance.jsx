import { Typography } from "@mui/material";
import React from "react";

const Maintenance = ({ tory }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">history :{tory.date}</Typography>
      <Typography variant="h6">history :{tory.notes}</Typography>
      <Typography variant="h6">history :{tory.cost}</Typography>
    </React.Fragment>
  );
};

export default Maintenance;
