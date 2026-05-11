import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import YearlyObjectives from "./YearlyObjectives";

const UserCardTen = ({ name, email, strategyProfile }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h5">Name : {name}</Typography>
            <Typography variant="h5">Email : {email}</Typography>
            <Divider sx={{ backgroundColor: "red", my: 2 }} />
            {strategyProfile.yearlyObjectives.map((object, objectindex) => (
              <YearlyObjectives key={objectindex} object={object} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardTen;
