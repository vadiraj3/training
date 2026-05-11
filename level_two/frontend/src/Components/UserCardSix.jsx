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
import QuarterlyReviews from "./QuarterlyReviews";

const UserCardSix = ({ name, email, performance }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h5" color="orange">
              Name : {name}
            </Typography>
            <Typography variant="h5">Email : {email}</Typography>
            <Typography variant="h6" color="green">
              Role : {performance.role}
            </Typography>
            {performance.quarterlyReviews.map((review, reviewindex) => (
              <QuarterlyReviews key={reviewindex} review={review} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardSix;
