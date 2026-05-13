import { Box, Card, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const UserCardSix = ({ name, email, profile, skills }) => {
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
          <Typography variant="h6" sx={{ color: "red", pb: 1 }}>
            profile : {profile}
          </Typography>
          <Box>
            {skills.map((skill, skillindex) => (
              <Fragment key={skillindex}>
                <Typography variant="h6" color="purple">
                  {skill.name}
                </Typography>
                <Typography variant="h6" color="green">
                  {skill.level}
                </Typography>
                <Typography variant="h6" pb={1} color="brown">
                  {skill.years}
                </Typography>
              </Fragment>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardSix;
