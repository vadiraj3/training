import { Chip } from "@mui/material";
import React from "react";

const Bonuses = ({ bonus }) => {
  return (
    <React.Fragment>
      <Chip label={bonus.type} variant="outlined" />
      <Chip label={bonus.amount} variant="outlined" />
      <Chip label={bonus.paidOn} variant="outlined" />
    </React.Fragment>
  );
};

export default Bonuses;
