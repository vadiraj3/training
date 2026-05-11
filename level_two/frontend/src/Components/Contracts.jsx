import { Chip, Divider, Typography } from "@mui/material";
import React from "react";

const Contracts = ({ contra }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" color="green">
        Code : {contra.code}
      </Typography>
      <Typography variant="h6" color="green ">
        value : {contra.value}
      </Typography>
      <Divider sx={{ backgroundColor: "black", my: 2 }} />
      {contra.renewals.map((renew, index) => (
        <React.Fragment key={index}>
          <Chip label={renew.year} variant="outlined" />
          <Chip label={renew.status} variant="outlined" />
        </React.Fragment>
      ))}
      <Divider sx={{ backgroundColor: "black", my: 2 }} />
    </React.Fragment>
  );
};

export default Contracts;
