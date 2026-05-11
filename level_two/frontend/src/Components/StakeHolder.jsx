import { Typography } from "@mui/material";
import React from "react";
import Contracts from "./Contracts";

const StakeHolder = ({ client, stake }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" color="grey">
        Role : {stake.role}
      </Typography>
      <Typography variant="h6" color="red">
        Contact : {stake.contact.name}
      </Typography>
      <Typography variant="h6" color="red">
        Contact : {stake.contact.email}
      </Typography>

      {client.contracts.map((contra, contraindex) => (
        <Contracts key={contraindex} contra={contra} />
      ))}
    </React.Fragment>
  );
};

export default StakeHolder;
