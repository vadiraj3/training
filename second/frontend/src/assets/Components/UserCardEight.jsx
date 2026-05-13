import { Box, Card, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const UserCardEight = ({ name, email, education }) => {
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
          <Box>
            <Typography fontSize={22} pb={1}>
              Education
            </Typography>
            {education.map((cation, cationindex) => (
              <Fragment key={cationindex}>
                <Typography variant="h6">School :{cation.school}</Typography>
                <Typography variant="h6">Degree :{cation.degree}</Typography>
                <Typography variant="h6" pb={1}>
                  Year :{cation.year}
                </Typography>
                <Typography fontSize={22} pb={1} pt={1}>
                  Details
                </Typography>
                <Typography variant="h6">Gpa :{cation.details.gpa}</Typography>
                <Typography variant="h6">
                  Honors :{cation.details.honors}
                </Typography>
                <Typography variant="h6" pb={1}>
                  Major :{cation.details.major}
                </Typography>
              </Fragment>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardEight;
