import { Divider, Typography } from "@mui/material";
import React from "react";

const Inventory = (inven) => {
  return (
    <React.Fragment>
      <Typography variant="h6">Inventory sku: {inven.sku}</Typography>
      <Typography variant="h6">Inventory quantity: {inven.quantity}</Typography>
      <Divider sx={{ backgroundColor: "brown", my: 2 }} />
    </React.Fragment>
  );
};

export default Inventory;
