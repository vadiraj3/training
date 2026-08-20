import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardOne = ({
  id,
  name,
  email,
  profile,
  devices,
  badges,
  activity,
}) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box>
        <Card>
          <Box p={1} textAlign={"start"}>
            <Typography variant="h5">ID : {id}</Typography>
            <Typography variant="h5">NAME : {name}</Typography>
            <Typography variant="h6" pb={1}>
              EMAIL : {email}
            </Typography>
            <Typography fontSize={20} color="black" fontWeight={600}>
              PROFILE
            </Typography>
            <Typography variant="h6">TITLE :{profile.title}</Typography>
            <Typography variant="h6">BIO : {profile.bio}</Typography>
            <Typography variant="h6">CITY : {profile.location.city}</Typography>
            <Typography variant="h6" pb={1}>
              COUNTRY : {profile.location.country}
            </Typography>
            <Typography variant="h6">
              THEME : {profile.preferences.theme}
            </Typography>
            <Typography variant="h6">
              LANGUAGE : {profile.preferences.language}
            </Typography>
            <Typography variant="h6">
              EMAIL :
              {profile.preferences.notifications.email ? "true" : "false"}
            </Typography>
            <Typography variant="h6">
              SMS : {profile.preferences.notifications.sms ? "true" : "false"}
            </Typography>
            <Typography variant="h6" pb={1}>
              PUSH : {profile.preferences.notifications.push ? "true" : "false"}
            </Typography>
            <Typography variant="h6">
              LOGINS : {profile.metrics.logins}
            </Typography>
            <Typography variant="h6">
              SESSIONS : {profile.metrics.sessions}
            </Typography>
            <Typography variant="h6">
              PROJECTSCOMPLETED : {profile.metrics.projectsCompleted}
            </Typography>
            <Typography fontSize={20} color="black" fontWeight={600}>
              DEVICES
            </Typography>
            {devices.map((device) => (
              // eslint-disable-next-line react/jsx-key
              <Box>
                <Typography variant="h6">TYPE : {device.type}</Typography>
                <Typography variant="h6">OS : {device.os}</Typography>
                <Typography variant="h6">
                  LASTSEEN : {device.lastSeen}
                </Typography>
              </Box>
            ))}
            <Typography fontSize={20} color="black" fontWeight={600}>
              BADGES
            </Typography>
            {badges.map((badg) => (
              <Typography variant="h6">{badg}</Typography>
            ))}
            <Typography fontSize={20} color="black" fontWeight={600}>
              ACTIVIVITY
            </Typography>
            {activity.map((active) => (
              <>
                <Typography variant="h6">DATE : {active.date}</Typography>
                <Typography variant="h6">ACTION : {active.action}</Typography>
                <Typography variant="h6">
                  SOURCE : {active.meta.source}
                </Typography>
                <Typography variant="h6">
                  DURATIONMINUTES : {active.meta.durationMinutes}
                </Typography>
              </>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardOne;
