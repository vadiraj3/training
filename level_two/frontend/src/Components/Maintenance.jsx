import { Box, Typography } from "@mui/material";
import React from "react";

const Maintenance = ({ tory }) => {
  return (
    <Box>
      <Typography variant="h6">{tory.date}</Typography>
      <Typography variant="h6">{tory.notes}</Typography>
      <Typography variant="h6">{tory.cost}</Typography>
    </Box>
  );
};

export default Maintenance;
