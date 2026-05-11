import { Divider, Typography } from "@mui/material";
import React from "react";

const Reimbursements = ({ reimbu }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" color="brown">
        Category : {reimbu.category}
      </Typography>
      <Divider sx={{ backgroundColor: "black", my: 2 }} />
      {reimbu.entries.map((entry, index) => (
        <React.Fragment key={index}>
          <Typography variant="h6" color="purple">
            Entries Month : {entry.month}
          </Typography>
          <Typography variant="h6" color="purple">
            Entries Amount : {entry.amount}
          </Typography>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Reimbursements;
