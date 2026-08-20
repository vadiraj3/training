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
            <Typography variant="h5" pb={1}>
              NAME
            </Typography>
            <Typography variant="h4" pb={1}>
              Name : {name}
            </Typography>
            <Typography variant="h5" pb={1}>
              EMAIL
            </Typography>
            <Typography variant="h6" pb={1}>
              Email : {email}
            </Typography>
            <Typography variant="h5" pb={2}>
              COMMUNICATION
            </Typography>
            <Typography variant="h6" pb={1}>
              preferredChannel : {communication.preferredChannel}
            </Typography>
            <Typography variant="h6">
              work email : {communication.channels.email.work}
            </Typography>
            <Typography variant="h6" pb={1}>
              personal email : {communication.channels.email.personal}
            </Typography>
            <Typography variant="h6" pb={1}>
              mobile : {communication.channels.phone.mobile}
            </Typography>
            <Typography variant="h6" pb={1}>
              office : {communication.channels.phone.office}
            </Typography>
            <Typography variant="h6" pb={1}>
              username : {communication.channels.slack.username}
            </Typography>
            <Typography variant="h6" pb={1}>
              workspace : {communication.channels.slack.workspace}
            </Typography>
            <Typography variant="h5" pb={2}>
              EMERGENCYCONTACTS
            </Typography>
            {communication.emergencyContacts.map((emergency) => (
              <Box>
                <Typography variant="h6" pb={1}>
                  relation : {emergency.relation}
                </Typography>
                <Typography variant="h6" pb={1}>
                  name : {emergency.name}
                </Typography>
                <Typography variant="h5" pb={2}>
                  METHODS
                </Typography>
                {emergency.methods.map((meth) => (
                  <>
                    <Typography variant="h6" pb={1}>
                      type : {meth.type}
                    </Typography>
                    <Typography variant="h6" pb={1}>
                      value : {meth.value}
                    </Typography>
                  </>
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
