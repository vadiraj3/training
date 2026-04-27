import { Divider, Typography } from "@mui/material";
import React from "react";
import Phases from "./Phases";

const Initiatives = ({ initi }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">Initial code : {initi.code}</Typography>
      <Typography variant="h6">Initial code :{initi.theme}</Typography>
      <Divider sx={{ backgroundColor: "red", my: 2 }} />
      {initi.phases.map((pha, phaindex) => (
        <Phases key={phaindex} pha={pha} />
      ))}
    </React.Fragment>
  );
};

export default Initiatives;
