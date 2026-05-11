import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loader = ({ loadingMessage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "78vh",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress size={60} thickness={5} aria-label="Loading…" />
      <Typography>Loading {loadingMessage}...</Typography>
    </Box>
  );
};

export default Loader;
