import { Chip, Divider, Typography } from "@mui/material";
import React from "react";
import Initiatives from "./Initiatives";

const YearlyObjectives = ({ object }) => {
  return (
    <React.Fragment>
      <Chip label={object.objective} variant="outlined" />
      <Divider sx={{ backgroundColor: "red", my: 2 }} />
      <Typography variant="h6">Owner Id : {object.owner.id}</Typography>
      <Typography variant="h6">Owner name : {object.owner.name}</Typography>
      <Divider sx={{ backgroundColor: "red", my: 2 }} />
      {object.initiatives.map((initi, initiobject) => (
        <Initiatives key={initiobject} initi={initi} />
      ))}
    </React.Fragment>
  );
};

export default YearlyObjectives;
