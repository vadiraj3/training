import {
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
            <Typography variant="h4">{name}</Typography>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Typography variant="subtitle2">{email}</Typography>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Typography variant="subtitle2">
              {communication.preferredChannel}
            </Typography>
            <Typography variant="subtitle2">
              {communication.channels.email.work}
            </Typography>
            <Typography variant="subtitle2">
              {communication.channels.email.personal}
            </Typography>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Chip
              label={communication.channels.phone.mobile}
              variant="outlined"
            />
            <Chip
              label={communication.channels.phone.office}
              variant="outlined"
            />
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Chip
              label={communication.channels.slack.username}
              variant="outlined"
            />
            <Chip
              label={communication.channels.slack.workspace}
              variant="outlined"
            />
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            {communication.emergencyContacts.map((emer, index) => (
              <EmergencyContact emer={emer} key={index} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardThree;
