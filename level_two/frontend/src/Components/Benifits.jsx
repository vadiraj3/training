import { Typography } from "@mui/material";
import React from "react";

const Benifits = ({ benefit }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" color="green">
        Benefits name : {benefit.name}
      </Typography>
      <Typography variant="h6" color="green">
        Monthly Benefits : {benefit.monthly}
      </Typography>
    </React.Fragment>
  );
};

export default Benifits;
