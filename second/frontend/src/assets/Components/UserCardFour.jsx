import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

export const UserCardFour = ({ id, name, email, profile, hobbies }) => {
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
            {name}
          </Typography>
          <Typography variant="h5" sx={{ color: "blue" }}>
            {email}
          </Typography>
          <Typography variant="h6" sx={{ color: "blue" }}>
            {profile}
          </Typography>
          <Box>
            {hobbies.map((hobby, index) => (
              <Typography variant="h6" key={index}>
                {hobby}
              </Typography>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
