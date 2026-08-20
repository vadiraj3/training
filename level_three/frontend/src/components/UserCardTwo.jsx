import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardTwo = ({ id, owner, email, campaign }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box>
        <Card>
          <Box p={1} textAlign={"start"}>
            <Typography variant="h5">ID : {id}</Typography>
            <Typography variant="h5">owner : {owner}</Typography>
            <Typography variant="h6" pb={1}>
              email : {email}
            </Typography>
            <Typography fontSize={20} fontWeight={600}>
              campaign
            </Typography>
            <Typography variant="h6">name : {campaign.name}</Typography>
            <Typography variant="h6" pb={1}>
              budget : {campaign.budget}
            </Typography>
            <Typography variant="h6">
              region : {campaign.audience.region}
            </Typography>
            <Typography fontSize={20} fontWeight={600}>
              ageBands
            </Typography>
            {campaign.audience.ageBands.map((band) => (
              <Typography variant="h6" key={id}>
                {band}
              </Typography>
            ))}
            <Typography fontSize={20} fontWeight={600}>
              channels
            </Typography>
            {campaign.channels.map((chand) => (
              <Box key={id}>
                <Typography variant="h6">channel : {chand.channel}</Typography>
                <Typography variant="h6">spend : {chand.spend}</Typography>
                <Typography variant="h6" pb={1}>
                  status : {chand.status}
                </Typography>
              </Box>
            ))}
            <Typography fontSize={20} fontWeight={600}>
              stages
            </Typography>
            {campaign.stages.map((stag) => (
              <Box key={id}>
                <Typography variant="h6">name : {stag.name}</Typography>
                <Typography fontSize={20} fontWeight={600}>
                  tasks
                </Typography>
                {stag.tasks.map((task) => (
                  <>
                    <Typography variant="h6">label : {task.label}</Typography>
                    <Typography variant="h6">owner : {task.owner}</Typography>
                    <Typography variant="h6" pb={1}>
                      done : {task.done ? "true" : "false"}
                    </Typography>
                  </>
                ))}
              </Box>
            ))}
            <>
              <Typography fontSize={20} fontWeight={600}>
                performance
              </Typography>
              <Typography variant="h6">
                reach : {campaign.performance.reach}
              </Typography>
              <Typography variant="h6">
                conversionRate : {campaign.performance.conversionRate}
              </Typography>
              <Typography variant="h6">
                engagement : {campaign.performance.engagement}
              </Typography>
            </>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardTwo;
