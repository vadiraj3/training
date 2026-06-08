import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MileStone from "./MileStone";
import Project from "./Project";

const UserCardTwo = ({ name, email, projects }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h4">Name : {name}</Typography>
            <Typography variant="h6" pb={1}>
              Email : {email}
            </Typography>
            <Typography variant="h4">PROJECTS</Typography>
            {projects.map((pro) => (
              <Project pro={pro} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardTwo;
