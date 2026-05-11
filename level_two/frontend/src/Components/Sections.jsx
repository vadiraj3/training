import { Divider, Typography } from "@mui/material";
import React from "react";
import Inventory from "./Inventory";

const Sections = ({ section }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">Sections code: {section.code}</Typography>
      <Typography variant="h6">Sections code: {section.capacity}</Typography>
      <Typography variant="h6">Sections code: {section.utilization}</Typography>
      <Divider sx={{ backgroundColor: "brown", my: 2 }} />
      {section.inventory.map((inven, invenindex) => (
        <Inventory key={invenindex} inven={inven} />
      ))}
    </React.Fragment>
  );
};

export default Sections;
