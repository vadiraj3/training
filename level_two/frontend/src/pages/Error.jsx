import { Alert, Box } from "@mui/material";
import React from "react";

const Error = ({ errorMessage = "Something went wrong" }) => {
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
      <Alert severity="error"> {errorMessage}</Alert>
    </Box>
  );
};

export default Error;
