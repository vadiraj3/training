import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardThree = ({ id, name, email, address, contact, profile }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box
        sx={{
          boxShadow: "0px 2px 10px #00000029",
          mt: 2,
        }}
      >
        <Card sx={{ p: 2, textAlign: "start" }}>
          <Typography variant="h4">id :{id}</Typography>
          <Typography variant="h3" sx={{ color: "orange", pb: 1 }}>
            Name : {name}
          </Typography>
          <Typography variant="h5" sx={{ color: "blue", pb: 1 }}>
            Email : {email}
          </Typography>
          <Typography variant="h5" sx={{ color: "red", pb: 1 }}>
            Address : {address.street}
          </Typography>
          <Typography variant="h5" sx={{ color: "red" }}>
            Address : {address.city}
          </Typography>
          <Typography variant="h5" sx={{ color: "red", pb: 1 }}>
            Address : {address.country}
          </Typography>
          <Typography variant="h5" sx={{ color: "green" }}>
            Contact : {contact.phone}
          </Typography>
          <Typography variant="h5" sx={{ color: "green", pb: 1 }}>
            Contact : {contact.email}
          </Typography>
          <Typography variant="h5" sx={{ color: "blue" }}>
            Profile : {profile.bio}
          </Typography>
          <Typography variant="h5" sx={{ color: "blue" }}>
            Profile : {profile.age}
          </Typography>
          <Typography variant="h5" sx={{ color: "blue" }}>
            Profile : {profile.joinDate}
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardThree;
