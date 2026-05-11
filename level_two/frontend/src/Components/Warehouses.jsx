import { Divider, Typography } from "@mui/material";
import React from "react";
import Sections from "./Sections";

const Warehouses = ({ ware }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">warehouses Id : {ware.warehouseId}</Typography>
      <Typography variant="h6">
        warehouses city : {ware.address.city}
      </Typography>
      <Typography variant="h6">
        warehouses country : {ware.address.country}
      </Typography>
      <Divider sx={{ backgroundColor: "brown", my: 2 }} />
      {ware.sections.map((section, secindex) => (
        <Sections key={secindex} section={section} />
      ))}
    </React.Fragment>
  );
};

export default Warehouses;
