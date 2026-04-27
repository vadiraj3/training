import {
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

const UserCardTwo = ({ name, email, projects }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="subtitle2">{email}</Typography>
            {projects.map((pro, indexOne) => (
              <React.Fragment key={indexOne}>
                <Chip label={pro.projectId} variant="outlined" />
                <Chip label={pro.name} variant="outlined" />
                <Chip label={pro.status} variant="outlined" />

                <Divider sx={{ my: 2, backgroundColor: "black" }} />
                {pro.milestones.map((mile, indexTwo) => (
                  <MileStone
                    key={indexTwo}
                    title={mile.title}
                    dueDate={mile.dueDate}
                    completion={mile.completion}
                    blockers={mile.blockers}
                  />
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardTwo;
