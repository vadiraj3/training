import { Divider, Typography } from "@mui/material";
import React from "react";

const MileStone = ({ title, dueDate, completion, blockers }) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="subtitle2">{dueDate}</Typography>
      <Typography variant="subtitle2">{completion}</Typography>
      <Divider sx={{ my: 2, backgroundColor: "black" }} />
      {blockers.map((block, index) => (
        <Typography variant="subtitle2" key={index}>
          {block}
        </Typography>
      ))}
    </React.Fragment>
  );
};

export default MileStone;
