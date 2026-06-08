import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import EmergencyContact from "./EmergencyContact";

const UserCardThree = ({ name, email, communication }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h4" pb={1}>
              Name : {name}
            </Typography>
            <Typography variant="h6" pb={1}>
              Email : {email}
            </Typography>
            <Typography variant="h6" pb={1}>
              preferredChannel : {communication.preferredChannel}
            </Typography>
            <Typography variant="h5">CHANNELS</Typography>
            <Typography variant="h6">
              Work : {communication.channels.email.work}
            </Typography>
            <Typography variant="h6" pb={1}>
              Personal : {communication.channels.email.personal}
            </Typography>
            <Typography variant="h5">PHONE</Typography>
            <Typography variant="h6">
              Mobile : {communication.channels.phone.mobile}
            </Typography>
            <Typography variant="h6" pb={1}>
              Office : {communication.channels.phone.office}
            </Typography>
            <Typography variant="h5">SLACK</Typography>
            <Typography variant="h6">
              Username : {communication.channels.slack.username}
            </Typography>
            <Typography variant="h6" pb={1}>
              Workspace : {communication.channels.slack.workspace}
            </Typography>
            <Typography variant="h5">EMERGENCY CONTACTS</Typography>
            {communication.emergencyContacts.map((emergency) => (
              <Box>
                <Typography variant="h6">{emergency.relation}</Typography>
                <Typography variant="h6" pb={1}>
                  {emergency.name}
                </Typography>
                <Typography variant="h5">METHODS</Typography>
                {emergency.methods.map((meth) => (
                  <Box>
                    <Typography variant="h6">{meth.type}</Typography>
                    <Typography variant="h6" pb={1}>
                      {meth.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardThree;
