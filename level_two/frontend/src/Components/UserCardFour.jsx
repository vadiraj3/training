import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import WeeklySchedule from "./WeeklySchedule";

const UserCardFour = ({ name, email, weeklySchedule }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h4">{name}</Typography>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Typography variant="subtitle2">{email}</Typography>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            {weeklySchedule.monday.map((mon, indexmon) => (
              <WeeklySchedule key={indexmon} day={mon} />
            ))}
            {weeklySchedule.tuesday.map((tue, indextue) => (
              <WeeklySchedule key={indextue} day={tue} />
            ))}
            {weeklySchedule.wednesday.map((wed, indexwed) => (
              <WeeklySchedule key={indexwed} day={wed} />
            ))}
            {weeklySchedule.thursday.map((thu, indexthu) => (
              <WeeklySchedule key={indexthu} day={thu} />
            ))}
            {weeklySchedule.friday.map((fri, indexfri) => (
              <WeeklySchedule key={indexfri} day={fri} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardFour;
