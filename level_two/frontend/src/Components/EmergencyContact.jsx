import { Divider, Typography } from "@mui/material";
import React from "react";

const EmergencyContact = ({ emer }) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle2">{emer.relation}</Typography>
      <Typography variant="subtitle2">{emer.name}</Typography>
      <Divider sx={{ my: 2, backgroundColor: "black" }} />
      {emer.methods.map((met, index) => (
        <React.Fragment key={index}>
          <Typography variant="subtitle2">{met.type}</Typography>
          <Typography variant="subtitle2">{met.value}</Typography>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default EmergencyContact;
