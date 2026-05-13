import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardSeven = ({ name, email, company }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box
        sx={{
          boxShadow: "0px 2px 10px #00000029",
          mt: 2,
        }}
      >
        <Card sx={{ p: 2, textAlign: "start" }}>
          <Typography variant="h3" sx={{ color: "orange" }}>
            Name : {name}
          </Typography>
          <Typography variant="h5" sx={{ color: "blue" }}>
            Email : {email}
          </Typography>
          <Typography fontSize={26} color="black">
            Company
          </Typography>
          <Typography variant="h6" sx={{ color: "red", pb: 1 }}>
            Company Name : {company.name}
          </Typography>
          <Typography fontSize={26} color="black">
            Address
          </Typography>
          <Typography variant="h6" sx={{ color: "red" }}>
            Street : {company.address.street}
          </Typography>
          <Typography variant="h6" sx={{ color: "green" }}>
            City : {company.address.city}
          </Typography>
          <Typography variant="h6" sx={{ color: "brown", pb: 1 }}>
            ZipCode : {company.address.zipCode}
          </Typography>
          <Typography variant="h6" sx={{ color: "purple" }}>
            Employees : {company.employees}
          </Typography>
          <Typography variant="h6" sx={{ color: "purple", pb: 1 }}>
            Founded : {company.founded}
          </Typography>
          <Box></Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardSeven;
