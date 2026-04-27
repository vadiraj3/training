import { Divider, Typography } from "@mui/material";
import React from "react";
import Deliverables from "./Deliverables";

const Phases = ({ pha }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">Phase : {pha.phase}</Typography>
      <Typography variant="h6">Phase : {pha.progress}</Typography>
      <Divider sx={{ backgroundColor: "red", my: 2 }} />
      {pha.deliverables.map((delivery, deliveryindex) => (
        <Deliverables key={deliveryindex} delivery={delivery} />
      ))}
    </React.Fragment>
  );
};

export default Phases;
