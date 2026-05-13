import { Box, Card, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const UserCardFive = ({ name, email, workHistory }) => {
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
          <Box>
            {workHistory.map((history, index) => (
              <Fragment key={index}>
                <Typography variant="h6" pb={1}>
                  Company Name : {history.company.name}
                </Typography>
                <Typography variant="h6">
                  Company Location : {history.company.location.city}
                </Typography>
                <Typography variant="h6" pb={1}>
                  Country : {history.company.location.country}
                </Typography>
                <Typography variant="h6" pb={1}>
                  Compnay Position : {history.position}
                </Typography>
                <Typography variant="h6">
                  Duration : {history.duration}
                </Typography>

                {history.projects.map((pro, proindex) => (
                  <Fragment key={proindex}>
                    <Typography variant="h6" pb={1}>
                      Project Name : {pro.name}
                    </Typography>
                    {pro.tech.map((tech, techindex) => (
                      <Fragment key={techindex}>
                        <Typography variant="h6" pb={1}>
                          Project Tech {tech}
                        </Typography>
                        <Typography variant="h6" pb={1}>
                          {pro.description}
                        </Typography>
                      </Fragment>
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardFive;
