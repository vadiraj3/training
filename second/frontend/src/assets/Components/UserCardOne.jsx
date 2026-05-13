import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";

const UserCardOne = ({ id, name, email, profile }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box
        sx={{
          boxShadow: "0px 2px 10px #00000029",
          mt: 2,
        }}
      >
        <Card sx={{ p: 2, textAlign: "start" }}>
          <Box sx={{ width: "100px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pravatar.cc/150?img=1"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant="h5">{id}</Typography>
          <Typography variant="h2" sx={{ color: "orange" }}>
            {name}
          </Typography>
          <Typography variant="h3" sx={{ color: "blue" }}>
            {email}
          </Typography>
          <Typography variant="h4" sx={{ color: "blue" }}>
            {profile}
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardOne;
